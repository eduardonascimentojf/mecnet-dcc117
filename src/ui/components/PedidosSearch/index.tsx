/* eslint-disable react-hooks/exhaustive-deps */
import { BsPen, BsSearch, BsXLg } from "react-icons/bs";
import { Conteiner, Edit, TableList } from "./styles";
import { useAuth } from "../../../data/contexts/auth";
import { Button } from "../Button";
import { useEffect, useMemo, useState } from "react";
import { apiJava } from "../../../data/api";
import Modal from "react-modal";
import { Dialogconfirm } from "../Dialogconfirm";
import { toast } from "react-toastify";
type ListOrderItems = {
  id: string;
  isComplete: boolean;
  description: string;
  amount: number;
  price: number;
  fullValue: number;
};
type PedidoType = {
  id: string;
  isComplete: boolean;
  received: boolean;
  fullValue: number;
  listOrderItems: ListOrderItems[];
};

export function PedidosSearch() {
  const [pedidos, setPedidos] = useState<PedidoType>();
  const { user } = useAuth();
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [markOrdered, setMarkOrdered] = useState(false);
  const [id_, setId_] = useState("");
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      await apiJava
        .get<PedidoType>("/order")
        .then((response) => {
          setPedidos(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, [pedidos]);

  useEffect(() => {
    if (isDelete === true) {
      setIsDelete(false);
      apiJava
        .delete("/order/orderItems", {
          data: {
            id: id_,
          },
        })
        .then(() => {
          if (pedidos != undefined) {
            const index = pedidos.listOrderItems.map((e) => e.id).indexOf(id_);
            pedidos.listOrderItems.splice(index, 1);
            setPedidos(pedidos);
            toast.success("Item removido com sucesso!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
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
  }, [isDelete]);

  useEffect(() => {
    if (markOrdered === true) {
      setMarkOrdered(false);
      apiJava
        .get("/order/setBuy/" + pedidos?.id)
        .then(() => {
          setPedidos(undefined);
          toast.success("Pedido encomendado com seucesso!", {
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
  }, [markOrdered]);

  const filteredRequests = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    const result = [];
    if (pedidos?.listOrderItems != undefined)
      for (let i = 0; i < pedidos?.listOrderItems.length; i++) {
        if (
          pedidos?.listOrderItems[i].description
            .toLowerCase()
            .includes(lowerSearch)
        ) {
          result.push(pedidos?.listOrderItems[i]);
        }
      }
    return result;
  }, [search, pedidos]);

  function update() {
    apiJava
      .put<ListOrderItems>("/order/orderItems/" + id_, {
        amount: amount,
      })
      .then((response) => {
        const index = filteredRequests.map((e) => e.id).indexOf(id_);
        filteredRequests.splice(index, 1, response.data);
        setPedidos(pedidos);
        closeModalEdit();
        toast.success("Item atualizado com sucesso!", {
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

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function openModalEdit() {
    setIsOpenEdit(true);
  }
  function closeModalEdit() {
    setIsOpenEdit(false);
  }
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
            <th>Descrição</th>
            <th>Qtde</th>
            <th>Vlr. Unit</th>
            <th>Vlr. Total</th>
            {user?.isAdmin && <th>Editar</th>}
            {user?.isAdmin && <th>Remover</th>}
          </tr>
        </thead>
        <tbody>
          {filteredRequests.map((iten, i) => (
            <tr key={i}>
              <td>{iten.description}</td>
              <td>{iten.amount}</td>
              <td>{iten.price.toFixed(2)}</td>
              <td>{iten.fullValue.toFixed(2)}</td>
              {user?.isAdmin && (
                <td
                  onClick={() => {
                    setId_(iten.id);
                    setAmount(iten.amount);
                    openModalEdit();
                  }}
                >
                  <BsPen />
                </td>
              )}
              {user?.isAdmin && (
                <td
                  onClick={() => {
                    setId_(iten.id);
                    openModal();
                  }}
                >
                  <BsXLg />
                </td>
              )}
            </tr>
          ))}
        </tbody>
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
            title="Tem certeza que deseja remover este item?"
          />
        </Modal>

        <Modal
          isOpen={modalIsOpenEdit}
          onRequestClose={closeModalEdit}
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
          <Edit>
            <p>Qual seria a quantidade?</p>
            <input
              type="number"
              min={1}
              defaultValue={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <Button propsButton={{ onClick: () => update() }} text="Alterar" />
          </Edit>
        </Modal>
      </TableList>
      {!filteredRequests.length && pedidos && (
        <h3 className="notFound">
          Nenhum pedido com '{search}' foi encontrado!
        </h3>
      )}

      {!pedidos && <h3 className="notFound">Nenhum pedido ativo!</h3>}

      {user?.isAdmin && pedidos && (
        <div className="button">
          <p>Valor total: R$ {pedidos?.fullValue}</p>
          <Button
            text="Fechar Pedido"
            propsButton={{
              onClick: () => {
                setId_(pedidos.id);
                openModal();
              },
            }}
          />
        </div>
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
          set_IsDelete={setMarkOrdered}
          textCancel="Cancelar"
          textConfirm="Confirmar"
          title="Tem certeza que deseja encomendar esses itens?"
        />
      </Modal>
    </Conteiner>
  );
}
