import { BsXCircle } from "react-icons/bs";
import { Conteiner } from "./styles";
import { Text } from "../Text";
interface Props {
  title: string;
  textConfirm: string;
  textCancel: string;
  closeModal: () => void;
  set_IsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Dialogconfirm(props: Props) {
  function confirmDialog() {
    props.set_IsDelete(true);
    props.closeModal();
  }
  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />
      <Text text={props.title} type="h2" styled="normal" color="white" />

      <div className="buttons">
        <button className="confirm" onClick={confirmDialog}>
          {props.textConfirm}
        </button>
        <button onClick={props.closeModal} className="cancel">
          {props.textCancel}
        </button>
      </div>
    </Conteiner>
  );
}
