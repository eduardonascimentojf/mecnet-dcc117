import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsPeople } from "react-icons/bs";
// import { useAuth } from "../../data/contexts/auth";

export function Funcionarios() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // const { user } = useAuth();
  const array: ReactNode[] = [
    <Link to="/funcionarios">
      <SiderBarItens
        name="funcionarios"
        isSelected={splitLocation[1] === "funcionarios"}
        icon={<BsPeople />}
      />
    </Link>,
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />
      <Text text="Funcionarios" color="black" type="h3" styled="normal" />
    </Conteiner>
  );
}
