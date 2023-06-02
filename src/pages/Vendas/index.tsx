import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCartCheck, BsCartX, BsJournalText } from "react-icons/bs";
import { useAuth } from "../../data/contexts/auth";

export function Vendas() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  // const { user } = useAuth();
  const array: ReactNode[] = [
    <Link to="/vendas">
      <SiderBarItens
        name="Vendas"
        isSelected={splitLocation[1] === "vendas"}
        icon={<BsCartCheck />}
      />
    </Link>,

    <Link to="/vendas/historico-vendas">
      <SiderBarItens
        name="Histórico de Vendas"
        isSelected={splitLocation[1] === "vendas/historico-vendas"}
        icon={<BsJournalText />}
      />
    </Link>,
  ];
  const { user } = useAuth();
  console.log(user);
  if (user?.isAdmin) {
    array.push(
      <Link to="/consulta-total">
        <SiderBarItens
          name="Consulta total"
          isSelected={splitLocation[1] === "consulta-total"}
          icon={<BsJournalText />}
        />
      </Link>
    );
    array.push(
      <Link to="/cancelar-venda">
        <SiderBarItens
          name="Cancelar Venda"
          isSelected={splitLocation[1] === "cancelar-venda"}
          icon={<BsCartX />}
        />
      </Link>
    );
  }
  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text text="Vendas" color="black" type="h3" styled="normal" />
      </main>
    </Conteiner>
  );
}
