import { BsSearch } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useMemo, useState } from "react";
import { VendasType } from "../../../@types";
import { auxPrice } from "../../../helpers";

type ListProps = {
  type: "vendas" | "pedidos";
  list: VendasType[];
  arg: string[];
};
export function ListVendaSearch(props: ListProps) {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    const searchLower = search.toLowerCase();
    const result = [];

    for (let i = 0; i < props.list.length; i++) {
      if (
        props.list[i].client.toLowerCase().includes(searchLower) ||
        props.list[i].seller.toLowerCase().includes(searchLower) ||
        props.list[i].cpfClient.toLowerCase().includes(searchLower)
      ) {
        result.push(props.list[i]);
      }
    }
    return result;
  }, [props.list, search]);
  function auxDate(dataString: string | undefined) {
    if (dataString === undefined) return;
    const data = dataString.split("T");
    const hour = data[1].split(":");
    const date = data[0].split("-");
    return `${date[2]}/${date[1]}/${date[0]} | ${hour[0]}:${hour[1]}h  `;
  }

  return (
    <Conteiner>
      <div className="SearchButton">
        <input
          type="search"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <BsSearch />
        </button>
      </div>
      <TableList>
        <thead>
          <tr key={1}>
            {props.arg.map((arg, i) => (
              <th key={i}>{arg}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredList.map((iten, i) => (
            <tr key={i}>
              <td>{iten.id.split("-")[0]}</td>
              <td>{iten.client}</td>
              <td>{iten.cpfClient}</td>
              <td>{iten.seller}</td>
              <td>{auxPrice(iten.price)}</td>
              <td>{auxDate(iten.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </TableList>
      {!filteredList.length && (
        <h3 className="notFound">
          Nenhuma informação com '{search}' foi encontrado!
        </h3>
      )}
    </Conteiner>
  );
}
