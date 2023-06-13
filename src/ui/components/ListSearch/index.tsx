import { BsSearch } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useMemo, useState } from "react";
import { PedidoType } from "../../../@types";
import { CheckboxToggle } from "../../styles/checkboxToggle";
import { useAuth } from "../../../data/contexts/auth";
import { apiJava } from "../../../data/api";
import { toast } from "react-toastify";
import { auxDate, auxPrice } from "../../../helpers";
import { Text } from "../Text";

type ListProps = {
  type: "vendas" | "pedidos";
  list: PedidoType[];
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
          .includes(searchLower) ||
        props.list[i].id.split("-")[0].toLowerCase().includes(searchLower)
      ) {
        result.push(props.list[i]);
      }
    }
    return result;
  }, [props.list, search]);
  const { user } = useAuth();

  async function setReceived(id: string) {
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
              <td>{auxPrice(iten.fullValue)}</td>
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
                    onClick={() => setReceived(iten.id)}
                  />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </TableList>
      {!filteredList.length && (
        <Text
          text={"Nenhuma informação com '" + search + "' foi encontrado!"}
          styled={"normal"}
          type={"notFoundTable"}
          color={"black"}
        />
      )}
    </Conteiner>
  );
}
