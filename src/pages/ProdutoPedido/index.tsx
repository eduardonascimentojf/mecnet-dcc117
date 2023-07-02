/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useParams } from "react-router-dom";
import { BsCardChecklist, BsCart2 } from "react-icons/bs";
import { apiJava } from "../../data/api";
import { PedidoType } from "../../@types";
import { useProduct } from "../../data/contexts/product";
import { TableList } from "../../ui/components/PedidosSearch/styles";
import { auxDate, auxPrice } from "../../helpers";

export function ProdutoPedido() {
  const params = useParams();
  const array: ReactNode[] = [
    <Link to="/pedidos">
      <SiderBarItens name="Pedidos" isSelected={false} icon={<BsCart2 />} />
    </Link>,
    <Link to="/estoque/historico-pedidos">
      <SiderBarItens
        name="Histórico de Pedidos"
        isSelected={false}
        icon={<BsCardChecklist />}
      />
    </Link>,
  ];

  const { product } = useProduct();
  const [order, setOrder] = useState<PedidoType>();

  useEffect(() => {
    const fetchData = async () => {
      if (params.pedidoID != undefined) {
        await apiJava
          .get<PedidoType>("/order/" + params.pedidoID)
          .then((response) => {
            setOrder(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    };
    fetchData();
  }, [product]);

  return (
    <Conteiner>
      <SiderBar items={array} />
      {order ? (
        <main>
          <Text
            text="Produtos do Pedido"
            color="black"
            type="h3"
            styled="normal"
          />

          <TableList>
            <thead>
              <tr>
                <th>Descrição</th>
                <th>Qtde</th>
                <th>Vlr. Unit</th>
                <th>Vlr. Total</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {order.listOrderItems.map((orderItem, i) => (
                <tr key={i}>
                  <td>{orderItem.description}</td>
                  <td>{orderItem.amount}</td>
                  <td>{`R$ ${auxPrice(orderItem.price)}`}</td>
                  <td>{`R$ ${auxPrice(orderItem.fullValue)}`}</td>
                  <td className="disable">{auxDate(orderItem.updatedAt)}</td>
                </tr>
              ))}
            </tbody>
          </TableList>
          <div className="info_order">
            <Text
              color="black"
              text={`Valor total: R$ ${auxPrice(order.fullValue)}`}
              type="p"
              styled="normal"
            />
            {!order.received ? (
              <div className="info_not_receiced">
                <Text
                  color="black"
                  text="Comprado em "
                  type="p"
                  styled="normal"
                />
                <Text
                  color="black"
                  text={auxDate(order.updatedAt)}
                  type="p"
                  styled="normal"
                />
              </div>
            ) : (
              <div className="info_receiced">
                <section>
                  <Text
                    color="black"
                    text="Comprado em"
                    type="p"
                    styled="normal"
                  />
                  <Text
                    color="black"
                    text={auxDate(order.createdAt)}
                    type="p"
                    styled="normal"
                  />
                </section>
                <section>
                  <Text
                    color="black"
                    text="Entregue em"
                    type="p"
                    styled="normal"
                  />
                  <Text
                    color="black"
                    text={auxDate(order.updatedAt)}
                    type="p"
                    styled="normal"
                  />
                </section>
              </div>
            )}
          </div>
        </main>
      ) : (
        <Text
          type="notFound"
          text="Nenhum pedido foi encontrado!"
          styled="normal"
          color="black"
          class_name="notFound"
        />
      )}
    </Conteiner>
  );
}
