/* eslint-disable react-hooks/exhaustive-deps */
import { BsPen, BsTrash3 } from "react-icons/bs";
import { useAuth } from "../../../data/contexts/auth";
import { Conteiner } from "./styles";
import { CheckboxToggle } from "../../styles/checkboxToggle";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Dialogconfirm } from "../Dialogconfirm";

import { EditarUsuario } from "../../../pages/EditarUsuario";
export function Table() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [id, setId] = useState(0);

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
  const { employees, removeEmployee } = useAuth();

  useEffect(() => {
    if (isDelete === true) {
      setIsDelete(false);
      removeEmployee(id);
    }
  }, [isDelete]);

  return (
    <Conteiner>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>É gerente</th>
          <th>Editar</th>
          <th>Apagar</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((iten, i) => (
          <tr key={i}>
            <td>{iten.name}</td>
            <td>{iten.email}</td>
            <td>
              <CheckboxToggle
                type="checkbox"
                name=""
                id=""
                defaultChecked={iten.isAdm}
              />
            </td>
            <td
              onClick={() => {
                setId(iten.id);
                openModalEdit();
              }}
            >
              <BsPen />
            </td>
            <td
              onClick={() => {
                setId(iten.id);
                openModal();
              }}
            >
              <BsTrash3 />
            </td>
          </tr>
        ))}
      </tbody>
      <Modal
        isOpen={modalIsOpenEdit}
        onRequestClose={closeModalEdit}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0, .93)",
            zIndex: "1000",
            overflowY: "scroll",
          },
          content: {
            zIndex: "1000",
            border: "2px solid var(--color-light-blue)",
            backgroundColor: "var(--color-blue)",
            overflow: "hidden",
            borderRadius: "20px",
            outline: " none",
          },
        }}
      >
        <EditarUsuario closeModal={closeModalEdit} id={id} />
      </Modal>

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
