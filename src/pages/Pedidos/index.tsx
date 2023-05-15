import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist, BsCart2 } from "react-icons/bs";
import { PedidosSearch } from "../../ui/components/PedidosSearch";

// import { useAuth } from "../../data/contexts/auth";

export function Pedidos() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // const { user } = useAuth();
  const array: ReactNode[] = [
    <Link to="/pedidos">
      <SiderBarItens
        name="Pedidos"
        isSelected={splitLocation[1] === "pedidos"}
        icon={<BsCart2 />}
        id={1}
      />
    </Link>,
    <Link to="/estoque/historico-pedidos">
      <SiderBarItens
        name="Histórico de Pedidos"
        isSelected={splitLocation[2] === "historico-pedidos"}
        icon={<BsCardChecklist />}
        id={1}
      />
    </Link>,
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text text="Pedidos" color="black" type="h3" styled="normal" />
        <PedidosSearch />
      </main>
    </Conteiner>
  );
}
