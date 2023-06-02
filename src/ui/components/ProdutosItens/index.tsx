import { Conteiner } from "./styles";

import { Text } from "../Text";
import Modal from "react-modal";
import { useState } from "react";
import { Product } from "../../../@types";
import { AddItenPedido } from "../AddItenPedido";

export function ProdutosItens(props: Product) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Conteiner key={props.id} onClick={() => openModal()}>
        <img src={props.image[0]} alt={props.name} />
        <div>
          <Text type="h4" text={props.name} color="black" styled="normal" />
          <Text
            type="p"
            text={"R$ " + props.price.toFixed(2)}
            color="black"
            styled="normal"
          />
        </div>
      </Conteiner>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        <AddItenPedido closeModal={closeModal} id={props.id} />
      </Modal>
    </>
  );
}
