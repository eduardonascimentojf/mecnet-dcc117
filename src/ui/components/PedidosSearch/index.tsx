import { BsSearch, BsXLg } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useAuth } from "../../../data/contexts/auth";
import { Button } from "../Button";
import { useMemo, useState } from "react";

const pedidos = {
  itens: [
    {
      id: 1,
      cod: "345149",
      desc: "Compressor de Ar",
      qtde: 2,
      Vunid: "2.589,00",
      VTotal: "5.178,00",
    },
    {
      id: 2,
      cod: "765788",
      desc: "Cabeçote para Caminhões Volvo",
      qtde: 1,
      Vunid: "32.139,96",
      VTotal: "32.139,96",
    },
    {
      id: 3,
      cod: "4009",
      desc: "PINO FEMEA 3P - 10A",
      qtde: 15,
      Vunid: "2,00",
      VTotal: "30,00",
    },
    {
      id: 4,
      cod: "75321788",
      desc: "Cabeçote para Caminhões Mercedes Actros 2651 2022",
      qtde: 1,
      Vunid: "39.139,96",
      VTotal: "39.139,96",
    },
    {
      id: 5,
      cod: "3452359",
      desc: "Alternador ACTROS 2651 LS - Delco Remy",
      qtde: 2,
      Vunid: "2.589,00",
      VTotal: "5.178,00",
    },
    {
      id: 6,
      cod: "705788",
      desc: "Kit de Filtros ACTROS 2651 LS - Parker - REK-40045",
      qtde: 1,
      Vunid: "1.139,96",
      VTotal: "1.139,96",
    },
    {
      id: 7,
      cod: "14009",
      desc: "Barra Lateral - Attow - ATW248 - Unitário ",
      qtde: 2,
      Vunid: "590,90",
      VTotal: "1.181,80",
    },
    {
      id: 8,
      cod: "320788",
      desc: "Terminal de Direção - Attow - ATW5174 - Unitário ",
      qtde: 10,
      Vunid: "234,07",
      VTotal: "2.340,70",
    },
  ],
  total: "14.846,90",
};
export function PedidosSearch() {
  const { user } = useAuth();
  const [search, setSearch] = useState("");

  const filteredRequests = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    const result = [];
    for (let i = 0; i < pedidos.itens.length; i++) {
      if (
        pedidos.itens[i].desc.toLowerCase().includes(lowerSearch) ||
        pedidos.itens[i].cod.toLowerCase().includes(lowerSearch)
      ) {
        result.push(pedidos.itens[i]);
      }
    }
    return result;
  }, [search]);

  return (
    <Conteiner>
      <div className="SearchButton">
        <input
          type="search"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </div>

      <TableList>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Qtde</th>
            <th>Vlr. Unit</th>
            <th>Vlr. Total</th>
            {user?.isAdm && <th>Remover</th>}
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((iten, i) => (
            <tr key={i}>
              <td>{iten.cod}</td>
              <td>{iten.desc}</td>
              <td>{iten.qtde}</td>
              <td>{iten.Vunid}</td>
              <td>{iten.VTotal}</td>
              {user?.isAdm && (
                <td>
                  <BsXLg />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </TableList>
      {!filteredRequests.length && (
        <h3 className="notFound">
          Nenhum pedido com '{search}' foi encontrado!
        </h3>
      )}

      {user?.isAdm && (
        <div className="button">
          <p>Valor total: R$ {pedidos.total}</p>
          <Button text="Fechar Pedido" />
        </div>
      )}
    </Conteiner>
  );
}
