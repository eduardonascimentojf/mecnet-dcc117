import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsJournalText, BsFiletypePdf } from "react-icons/bs";

import { Button } from "../../ui/components/Button";
import { apiJava } from "../../data/api";
import { VendasType } from "../../@types";
import { ListVendaSearch } from "../../ui/components/ListVendaSearch";
import { PDF_Venda } from "../../ui/components/PDF_Venda";
import { useAuth } from "../../data/contexts/auth";

export function HistoricoVendas() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { user } = useAuth();
  const [todasVendas, setTodasVendas] = useState<VendasType[]>();
  useEffect(() => {
    apiJava
      .get<VendasType[]>("/sale/salesEmploy")
      .then((response) => {
        setTodasVendas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
        {todasVendas?.length ? (
          <>
            <ListVendaSearch
              type={"vendas"}
              list={todasVendas}
              arg={["Codigo", "Cliente", "CPF", "Vendedor", "Peço", "Data"]}
            />
            <Button
              disable={isLoading}
              text="Gerar relatório"
              icon={<BsFiletypePdf />}
              type="info"
              propsButton={{
                onClick: () => {
                  setIsLoading(true);
                  PDF_Venda(todasVendas, user, setIsLoading);
                },
              }}
            />
          </>
        ) : (
          <Text
            text="Nenhuma venda encontrado!"
            styled="normal"
            type="notFound"
            color="black"
          />
        )}
      </main>
    </Conteiner>
  );
}
