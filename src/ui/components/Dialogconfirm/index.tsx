import { BsXCircle } from "react-icons/bs";
import { Conteiner } from "./styles";
import { Text } from "../Text";
import { Button } from "../Button";
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
        <Button
          type="confirm"
          propsButton={{ onClick: confirmDialog }}
          text={props.textConfirm}
        />
        <Button
          propsButton={{ onClick: props.closeModal }}
          type="cancel"
          text={props.textCancel}
        />
      </div>
    </Conteiner>
  );
}
