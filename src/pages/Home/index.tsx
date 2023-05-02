import { Link, useLocation } from "react-router-dom";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { ReactNode } from "react";
import {
  BsBoxes,
  BsCart2,
  BsCartCheck,
  BsListOl,
  BsPeople,
} from "react-icons/bs";
import { useAuth } from "../../data/contexts/auth";

export function Home() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const array: ReactNode[] = [
    <Link to="/produtos">
      <SiderBarItens
        name="Produtos"
        isSelected={splitLocation[1] === "produtos"}
        icon={<BsBoxes />}
      />
    </Link>,
    <Link to="/pedidos">
      <SiderBarItens
        name="Pedidos"
        isSelected={splitLocation[1] === "pedidos"}
        icon={<BsCart2 />}
      />
    </Link>,
    <Link to="/estoque">
      <SiderBarItens
        name="Estoque"
        isSelected={splitLocation[1] === "estoque"}
        icon={<BsListOl />}
      />
    </Link>,
    <Link to="/vendas">
      <SiderBarItens
        name="Vendas"
        isSelected={splitLocation[1] === "vendas"}
        icon={<BsCartCheck />}
      />
    </Link>,
  ];
  const { user } = useAuth();
  if (user?.isAdm == true) {
    array.push(
      <Link to="/funcionarios">
        <SiderBarItens
          name="funcionarios"
          isSelected={splitLocation[1] === "funcionarios"}
          icon={<BsPeople />}
        />
      </Link>
    );
  }

  return (
    <Conteiner>
      <SiderBar items={array} home />
      <main>
        <Text text="Home" color="black" type="h3" styled="normal" />
      </main>
    </Conteiner>
  );
}
