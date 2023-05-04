import { ReactNode, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsPeople, BsPersonPlus } from "react-icons/bs";
import { Button } from "../../ui/components/Button";
import Modal from "react-modal";
import { Table } from "../../ui/components/Table";
import { NovoUsuario } from "../NovoUsuario";

const MODAL_STYLES = {
  position: "absolute",
  backgroundColor: "#FFF",
  padding: "15px",
  zIndex: "1000",
  width: "35%",
  borderRadius: ".5em",
};
const OVERLAY_STYLE = {
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0, .8)",
  zIndex: "1000",
  overflowY: "auto",
};

export function Funcionarios() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const array: ReactNode[] = [
    <Link to="/funcionarios">
      <SiderBarItens
        name="funcionarios"
        isSelected={splitLocation[1] === "funcionarios"}
        icon={<BsPeople />}
      />
    </Link>,
  ];
  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text text="Funcionários" color="black" type="h1" styled="normal" />
        <Button
          propsButton={{ onClick: openModal }}
          icon={<BsPersonPlus />}
          text="Novo funcionário"
        />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0,0,0, .93)",
              zIndex: "1000",
              overflowY: "scroll",
            },
            content: {
              border: "2px solid var(--color-light-blue)",
              backgroundColor: "var(--color-blue)",
              overflow: "hidden",
              borderRadius: "20px",
              outline: " none",
            },
          }}
        >
          <NovoUsuario closeModal={closeModal} />
        </Modal>

        <Table />
      </main>
    </Conteiner>
  );
}
