import { Link, useLocation } from "react-router-dom";

import { SiderBar } from "../../ui/components/SiderBar";
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

import "react-circular-progressbar/dist/styles.css";
import { Graph } from "../../ui/components/Home/Graph";
import { ProgressBar } from "../../ui/components/Home/ProgressBar";
import { RequestsRecent } from "../../ui/components/Home/RequestsRecent";
import { ExpiresSoon } from "../../ui/components/Home/ExpiresSoon";

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
      <div className="main">
        <RequestsRecent class_name="requestsRecent" />
        <Graph class_name="graph" />
        <ProgressBar class_name="progressbar" />
        <ExpiresSoon class_name="expiresSoon"  />
      </div>
    </Conteiner>
  );
}
