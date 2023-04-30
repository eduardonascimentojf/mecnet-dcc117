import React from "react";

import { Conteiner } from "./styles";
type Props = {
	name: string;
	isSelected: boolean;
	icon: React.ReactNode;
};
export function SiderBarItens({ name, isSelected, icon }: Props) {
	return (
		<Conteiner className={isSelected ? "isSelected" : ""}>
			{icon}
			<p>{name}</p>
		</Conteiner>
	);
}
