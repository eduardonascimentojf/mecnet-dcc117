import { BsSearch } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useMemo, useState } from "react";

type LispProps = {
  produto: string;
  marca: string;
  fornecedor?: string;
  cliente?: string;
  qtd: string;
  VUnid: string;
  data: string;
  VTotal: string;
};
type ListProps = {
  type: "vendas" | "pedidos";
  list: LispProps[];
  arg: {
    produto: "Produto";
    marca: "Marca";
    fornecedor?: "Fornecedor";
    cliente?: "Cliente/CPF";
    qtd: "Qtd.";
    VUnid: "Preço unid.";
    data: "Data";
    VTotal: "Total";
  };
};
export function ListSearch(props: ListProps) {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    const searchLower = search.toLowerCase();
    const result = [];
    for (let i = 0; i < props.list.length; i++) {
      if (
        props.list[i].produto.toLowerCase().includes(searchLower) ||
        props.list[i].marca.toLowerCase().includes(searchLower) ||
        props.list[i].cliente?.toLowerCase().includes(searchLower) ||
        props.list[i].fornecedor?.toLowerCase().includes(searchLower)
      ) {
        result.push(props.list[i]);
      }
    }
    return result;
  }, [props.list, search]);
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
          <tr>
            <th>{props.arg.produto}</th>
            <th>{props.arg.marca}</th>
            {props.type == "pedidos" ? (
              <th>{props.arg.fornecedor}</th>
            ) : (
              <th>{props.arg.cliente}</th>
            )}
            <th>{props.arg.qtd}</th>
            <th>{props.arg.VUnid}</th>
            <th>{props.arg.data}</th>
            <th>{props.arg.VTotal}</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((iten, i) => (
            <tr key={i}>
              <td>{iten.produto}</td>
              <td>{iten.marca}</td>
              {props.type == "pedidos" ? (
                <th>{iten.fornecedor}</th>
              ) : (
                <th>{iten.cliente}</th>
              )}
              <td>{iten.qtd}</td>
              <td>{iten.VUnid}</td>
              <td>{iten.data}</td>
              <td>{iten.VTotal}</td>
            </tr>
          ))}
        </tbody>
      </TableList>
      {!filteredList.length && (
        <h3 className="notFound">Nenhuma informação com '{search}' foi encontrado!</h3>
      )}
    </Conteiner>
  );
}
