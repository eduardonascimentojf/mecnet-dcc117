import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist, BsListOl } from "react-icons/bs";

export function Estoque() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const array: ReactNode[] = [
    <Link to="/estoque">
      <SiderBarItens
        name="Estoque"
        isSelected={splitLocation[1] === "estoque"}
        icon={<BsListOl />}
      />
    </Link>,
    <Link to="/consultar-historico">
      <SiderBarItens
        name="Consultar Histórico"
        isSelected={splitLocation[1] === "consultar-historico"}
        icon={<BsCardChecklist />}
      />
    </Link>,
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />

      <Text text="Estoque" color="black" type="h3" styled="normal" />
    </Conteiner>
  );
}
