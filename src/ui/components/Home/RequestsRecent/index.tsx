import { useEffect, useState } from "react";
import { Text } from "../../Text";
import { Conteiner } from "./styles";
import { Link } from "react-router-dom";
import { apiJava } from "../../../../data/api";
import { ListOrderItems, PedidoType } from "../../../../@types";
import { auxDate, auxPrice } from "../../../../helpers";

interface Props {
  class_name: string;
}

export function RequestsRecent({ class_name }: Props) {
  const [pedidos, setPedidos] = useState<PedidoType[]>();
  useEffect(() => {
    apiJava
      .get<PedidoType[]>("/order/all")
      .then((response) => {
        setPedidos(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pedidos]);
  function auxQuantidade(listOrderItems: ListOrderItems[]) {
    let quantidade = 0;
    listOrderItems.map((iten) => {
      quantidade += iten.amount;
    });
    return quantidade;
  }
  function getDias() {
    if (pedidos && pedidos[0]?.updatedAt != undefined) {
      const data = new Date(pedidos[0]?.updatedAt);
      const date2 = new Date();
      const timeDiff = Math.abs(date2.getTime() - data.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (timeDiff / (1000 * 3600 * 24) < 1)
        return "Últimas em menos de um dia";
      if (diffDays >= 2) return `Últimas em ${diffDays} dias`;
      return "Últimas em 1 dia";
    }
  }
  return (
    <Conteiner className={class_name}>
      <div className="header">
        <div>
          <Text
            text={"Pedidos Recentes"}
            styled={"normal"}
            type={"h3"}
            color={"black"}
          />
          <Text
            class_name="subtitle"
            text={getDias()}
            styled={"italic"}
            type={"span"}
            color={"black"}
          />
        </div>

        <Link to="/pedidos">
          <Text
            class_name="verMais"
            text={"Ver todos"}
            styled={"italic"}
            type={"span"}
            color={"black"}
          />
        </Link>
      </div>

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Status</th>
            <th>Valor unid.</th>
            <th>QTD</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {pedidos?.slice(0, 3).map((iten, i) => (
            <tr key={i}>
              <td>{iten.id.split("-")[0]}</td>

              {iten.received ? (
                <td className="complete">
                  {" "}
                  <p>Completo</p>
                </td>
              ) : (
                <td className="notComplete">
                  {" "}
                  <p>Em aberto</p>{" "}
                </td>
              )}

              <td>R$ {auxPrice(iten.fullValue)}</td>
              <td>{auxQuantidade(iten.listOrderItems)}</td>
              <td>{auxDate(iten.updatedAt)?.split("|")[0]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
}
