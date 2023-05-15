import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist } from "react-icons/bs";

import { ListSearch } from "../../ui/components/ListSearch";

// import { useAuth } from "../../data/contexts/auth";

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

  const arrayTeste = [
    {
      produto: "Kit de Suspensão Dianteira",
      marca: "Cofap",
      fornecedor: "Auto Peças Jundiaí",
      qtd: "01",
      VUnid: "R$ 576,82",
      data: "11/04/23",
      VTotal: "R$ 576,82",
    },
    {
      produto: "Kit de Suspensão Mercedes Actros 2651 2022",
      marca: "acTR",
      fornecedor: "GMA Auto Peças",
      qtd: "01",
      VUnid: "R$ 1576,82",
      data: "11/04/23",
      VTotal: "R$ 1576,82",
    },
    {
      produto: "Lona Freio Scania P114 P270",
      marca: "Fras-le",
      fornecedor: "Fras-le",
      qtd: "01",
      VUnid: "R$ 576,82",
      data: "11/04/23",
      VTotal: "R$ 576,82",
    },
    {
      produto: "Redutor GNV 5ª",
      marca: "Lovato",
      fornecedor: "Lovato LTDA",
      qtd: "01",
      VUnid: "R$ 1576,82",
      data: "11/04/23",
      VTotal: "R$ 1576,82",
    },
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text
          text="Histórico de Pedidos"
          color="black"
          type="h3"
          styled="normal"
        />
        <ListSearch
          type={"pedidos"}
          list={arrayTeste}
          arg={{
            produto: "Produto",
            marca: "Marca",
            fornecedor: "Fornecedor",
            qtd: "Qtd.",
            VUnid: "Preço unid.",
            data: "Data",
            VTotal: "Total",
          }}
        />
      </main>
    </Conteiner>
  );
}
