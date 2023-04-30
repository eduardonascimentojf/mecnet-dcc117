import { Conteiner } from "./styles";
interface Props {
	type: "password"| "email" | "text",
	placeholder: string;
}
export function Input(props: Props) {
	return <Conteiner type={props.type} placeholder={props.placeholder} />;
}
