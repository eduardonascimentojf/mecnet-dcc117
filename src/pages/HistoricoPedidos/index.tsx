import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";

import { ListSearch } from "../../ui/components/ListSearch";

import { apiJava } from "../../data/api";
import { PedidoType } from "../../@types";

export function HistoricoPedidos() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // const { user } = useAuth();
  const array: ReactNode[] = [
    <Link to="/estoque/historico-pedidos">
      <SiderBarItens
        name="Histórico de Pedidos"
        isSelected={splitLocation[2] === "historico-pedidos"}
        icon={<BsCardChecklist />}
        id={1}
      />
    </Link>,
  ];

  const [todosPedidos, setTodosPedidos] = useState<PedidoType[]>();
  useEffect(() => {
    apiJava
      .get<PedidoType[]>("/order/all/")
      .then((response) => {
        setTodosPedidos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <SiderBar items={array} />
      <main>
        <Text
          text="Histórico de Pedidos"
          color="black"
          type="h1"
          styled="normal"
        />
        {todosPedidos != undefined ? (
          <ListSearch
            type={"pedidos"}
            list={todosPedidos}
            arg={["Codigo", "Produtos", "Valor", "Data", "Recebido"]}
          />
        ) : (
          <Text
            text="Nenhum pedido foi encontrado!"
            styled="normal"
            type="notFound"
            color={"black"}
          />
        )}
      </main>
    </div>
  );
}
