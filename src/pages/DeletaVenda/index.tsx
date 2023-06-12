import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, Navigate, useLocation } from "react-router-dom";
import { BsJournalText } from "react-icons/bs";
import { useAuth } from "../../data/contexts/auth";
import { VendasType } from "../../@types";
import { apiJava } from "../../data/api";
import { ListVendaSearch } from "../../ui/components/ListVendaSearch";

export function DeletaVenda() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const [todasVendas, setTodasVendas] = useState<VendasType[]>();
  useEffect(() => {
    apiJava
      .get<VendasType[]>("/sale/all")
      .then((response) => {
        setTodasVendas(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const array: ReactNode[] = [];
  const { user } = useAuth();
  if (user?.isAdmin) {
    array.push(
      <Link to="/vendas/consulta-total">
        <SiderBarItens
          name="Consulta total"
          isSelected={splitLocation[2] === "consulta-total"}
          icon={<BsJournalText />}
        />
      </Link>
    );
  }
  return (
    <>
      {user?.isAdmin === false ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Conteiner>
          <SiderBar items={array} />
          <main>
            <Text
              text="Cancelar uma venda"
              color="black"
              type="h1"
              styled="normal"
            />
            {todasVendas != undefined ? (
              <ListVendaSearch
                type={"remove"}
                list={todasVendas}
                arg={[
                  "Codigo",
                  "Cliente",
                  "CPF",
                  "Vendedor",
                  "Peço",
                  "Data",
                  "Remover",
                ]}
              />
            ) : (
              <h3 className="notFound">Nenhuma venda foi encontrado!</h3>
            )}
          </main>
        </Conteiner>
      )}
    </>
  );
}
