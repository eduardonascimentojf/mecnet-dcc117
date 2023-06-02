import { BsSearch } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useMemo, useState } from "react";
import { PedidoType } from "../../../@types";
import { CheckboxToggle } from "../../styles/checkboxToggle";
import { useAuth } from "../../../data/contexts/auth";
import { apiJava } from "../../../data/api";
import { toast } from "react-toastify";

type ListProps = {
  type: "vendas" | "pedidos";
  list: /*VendasType[]*/ PedidoType[];
  arg: string[];
};
export function ListSearch(props: ListProps) {
  const [search, setSearch] = useState("");

  const filteredList = useMemo(() => {
    const searchLower = search.toLowerCase();
    const result = [];

    for (let i = 0; i < props.list.length; i++) {
      if (
        props.list[i].listOrderItems[0].description
          .toLowerCase()
          .includes(searchLower)
        // props.list[i].marca.toLowerCase().includes(searchLower) ||
        // props.list[i].cliente?.toLowerCase().includes(searchLower) ||
        // props.list[i].fornecedor?.toLowerCase().includes(searchLower)
      ) {
        result.push(props.list[i]);
      }
    }
    return result;
  }, [props.list, search]);
  const { user } = useAuth();
  function auxDate(dataString: string | undefined) {
    if (dataString === undefined) return;
    const data = dataString.split("T");
    const hour = data[1].split(":");
    const date = data[0].split("-");
    return `${date[2]}/${date[1]}/${date[0]} | ${hour[0]}:${hour[1]}h  `;
  }
  async function teste(id: string) {
    apiJava
      .get("/order/setReceived/" + id)
      .then((response) => {
        toast.success("Pedido recebido com seucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(response.data);
      })
      .catch((error) => {
        toast.error(error.response.data, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(error.response.data);
      });
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
              <td>{iten.listOrderItems[0].description}</td>
              <td>{iten.fullValue.toFixed(2)}</td>
              <td>{auxDate(iten.createdAt)}</td>
              {user?.isAdmin == false || iten.received == true ? (
                <td>
                  <CheckboxToggle
                    type="checkbox"
                    defaultChecked={iten.received}
                    disabled={true}
                  />
                </td>
              ) : (
                <td>
                  <CheckboxToggle
                    type="checkbox"
                    defaultChecked={iten.received}
                    onClick={() => teste(iten.id)}
                  />
                </td>
              )}
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