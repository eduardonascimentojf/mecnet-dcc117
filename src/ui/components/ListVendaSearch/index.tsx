import { BsSearch, BsTrash3 } from "react-icons/bs";
import { Conteiner, TableList } from "./styles";
import { useEffect, useMemo, useState } from "react";
import { VendasType } from "../../../@types";
import { auxPrice } from "../../../helpers";
import { Dialogconfirm } from "../Dialogconfirm";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { apiJava } from "../../../data/api";
type ListProps = {
  type: "vendas" | "pedidos" | "remove";
  list: VendasType[];
  arg: string[];
};
export function ListVendaSearch(props: ListProps) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [id, setId] = useState("");

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

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
  useEffect(() => {
    if (isDelete === true) {
      setIsDelete(false);
      apiJava
        .get("/sale/cancelSale/" + id)
        .then(() => {
          toast.success("Venda cancelada com sucesso!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response.data, {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDelete]);
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
          {props.type == "remove"
            ? filteredList.map((iten, i) => (
                <tr key={i}>
                  <td>{iten.id.split("-")[0]}</td>
                  <td>{iten.client}</td>
                  <td>{iten.cpfClient}</td>
                  <td>{iten.seller}</td>
                  <td>{auxPrice(iten.price)}</td>
                  <td>{auxDate(iten.createdAt)}</td>
                  <td
                    className="delete"
                    onClick={() => {
                      setId(iten.id);
                      openModal();
                    }}
                  >
                    <BsTrash3 />
                  </td>
                </tr>
              ))
            : filteredList.map((iten, i) => (
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
        <h3 className="notFoundTable">
          Nenhuma informação com '{search}' foi encontrado!
        </h3>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0, .70)",
            zIndex: "1000",
          },
          content: {
            border: "2px solid var(--color-light-blue)",
            backgroundColor: "var(--color-blue)",
            borderRadius: "20px",
            outline: "none",
            width: "min-content",
            height: "max-content",
            margin: "auto",
          },
        }}
      >
        <Dialogconfirm
          closeModal={closeModal}
          set_IsDelete={setIsDelete}
          textCancel="Cancelar"
          textConfirm="Confirmar"
          title="Tem certcetza que que remover esse funcionario?"
        />
      </Modal>
    </Conteiner>
  );
}
