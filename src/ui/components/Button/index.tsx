import { ButtonHTMLAttributes, ReactNode } from "react";
import { Conteiner } from "./styles";
interface Props {
	icon?: ReactNode;
	propsButton?: ButtonHTMLAttributes<HTMLButtonElement>;
	text?: string;
}

export function Button(props: Props) {
	return (
		<Conteiner {...props.propsButton}>
			{props.icon}
			<p>{props.text}</p>
		</Conteiner>
	);
}
