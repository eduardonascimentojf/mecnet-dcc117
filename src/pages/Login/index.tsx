import { SubmitHandler, useForm } from "react-hook-form";
// import { Input } from "../../ui/components/Input";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import userDefault from "../../assets/userDefault.png";
import { Button } from "../../ui/components/Button";
import { useState } from "react";
import { User, useAuth } from "../../data/contexts/auth";

export type IFormInput = {
	user: string;
	password: string;
};

export function Login() {
	const [data] = useState<User[]>([
		{
			id: 1,
			name: "1",
			email: "1@mecnet.com",
			user: "1",
			password: "1",
			isAdm: false,
		},
		{
			id: 2,
			name: "2",
			email: "2@mecnet.com",
			user: "2",
			password: "2",
			isAdm: false,
		},
		{
			id: 3,
			name: "admin",
			email: "admin@mecnet.com",
			user: "admin",
			password: "admin",
			isAdm: true,
		},
	]);
	const { register, handleSubmit } = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) =>
		login(data.user, data.password);
	const { setUser } = useAuth();

	console.log(data);
	function login(_name: string, _password: string) {
		data.forEach((element) => {
			if (
				element.name.toString() == _name ||
				element.password.toString() == _password
			) {
				setUser(element);
			}
		});
	}
	return (
		<Conteiner>
			<Text text="BEM VINDO" type="h4" styled="normal" color="white" />
			<img src={userDefault} className="logo" alt="Vite logo" />

			<Text text="MECNET" type="h2" styled="normal" color="white" />
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Usuario</label>
				<input type="text" placeholder="Usuário" {...register("user")} />
				<label>Senha</label>
				<input type="password" placeholder="Senha" {...register("password")} />
				{/* <Input type="text" placeholder="Usuário" />
				<Input type="password" placeholder="Senha" /> */}
				<Button text="Login" propsButton={{ type: "submit" }} />
			</form>
		</Conteiner>
	);
}
