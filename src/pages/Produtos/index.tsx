import { ReactNode } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsBoxes, BsCardChecklist, BsCart2 } from "react-icons/bs";

export function Produtos() {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");
	const array: ReactNode[] = [
		<Link to="/produtos">
			<SiderBarItens
				name="Produtos"
				isSelected={splitLocation[1] === "produtos"}
				icon={<BsBoxes />}
			/>
		</Link>,
		<Link to="/pedidos">
			<SiderBarItens
				name="Pedidos"
				isSelected={splitLocation[1] === "pedidos"}
				icon={<BsCart2 />}
			/>
		</Link>,
		<Link to="/">
			<SiderBarItens
				name="Histórico de Pedidos"
				isSelected={splitLocation[1] === "historico-pedidos"}
				icon={<BsCardChecklist />}
			/>
		</Link>,
	];
	return (
		<Conteiner>
			<SiderBar items={array} />

			<Text text="Produtos" color="black" type="h3" styled="normal" />
		</Conteiner>
	);
}
