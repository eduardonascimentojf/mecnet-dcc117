import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsJournalText } from "react-icons/bs";
import { ListSearch } from "../../ui/components/ListSearch";
import { Button } from "../../ui/components/Button";

// import { useAuth } from "../../data/contexts/auth";

export function HistoricoVendas() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const arrayTeste = [
    {
      produto: "Kit de Suspensão Dianteira",
      marca: "Cofap",
      cliente: "Joaquim/***.***.***-**",
      qtd: "01",
      VUnid: "R$ 576,82",
      data: "11/04/23",
      VTotal: "R$ 576,82",
    },
    {
      produto: "Kit de Suspensão Mercedes Actros 2651 2022",
      marca: "acTR",
      cliente: "Pedro/***.***.***-**",
      qtd: "01",
      VUnid: "R$ 1576,82",
      data: "11/04/23",
      VTotal: "R$ 1576,82",
    },
    {
      produto: "Lona Freio Scania P114 P270",
      marca: "Fras-le",
      cliente: "Andre/***.***.***-**",
      qtd: "01",
      VUnid: "R$ 576,82",
      data: "11/04/23",
      VTotal: "R$ 576,82",
    },
    {
      produto: "Redutor GNV 5ª",
      marca: "Lovato",
      cliente: "Paulo/***.***.***-**",
      qtd: "01",
      VUnid: "R$ 1576,82",
      data: "11/04/23",
      VTotal: "R$ 1576,82",
    },
  ];
  const array: ReactNode[] = [
    <Link to="/vendas/historico-vendas">
      <SiderBarItens
        name="Histórico de Vendas"
        isSelected={splitLocation[2] === "historico-vendas"}
        icon={<BsJournalText />}
      />
    </Link>,
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text
          text="Histórico de Vendas"
          color="black"
          type="h3"
          styled="normal"
        />
        <ListSearch
          type={"vendas"}
          list={arrayTeste}
          arg={{
            produto: "Produto",
            marca: "Marca",
            cliente: "Cliente/CPF",
            qtd: "Qtd.",
            VUnid: "Preço unid.",
            data: "Data",
            VTotal: "Total",
          }}
        />
        <Button text="Gerar relatório" />
      </main>
    </Conteiner>
  );
}
