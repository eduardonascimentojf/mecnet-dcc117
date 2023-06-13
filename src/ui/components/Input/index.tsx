import { ConteinerInput } from "./styles";
interface Props {
  type: "password" | "email" | "text" | "search";
  placeholder: string;
}
export function Input(props: Props) {
  return <ConteinerInput type={props.type} placeholder={props.placeholder} />;
}
