import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import userDefault from "../../assets/userDefault.png";
import { Button } from "../../ui/components/Button";

import { useAuth } from "../../data/contexts/auth";

type IFormLogin = {
  user: string;
  password: string;
};

export function Login() {
  const { register, handleSubmit } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) =>
    login(data.user, data.password);
  const { setUser, employees } = useAuth();

  function login(_name: string, _password: string) {
    employees.forEach((element) => {
      if (
        element.name.toString() == _name ||
        element.password.toString() == _password
      ) {
        setUser(element);
      }
    });
  }
  return (
    <Conteiner className="login">
      <Text text="BEM VINDO" type="h4" styled="normal" color="white" />
      <img src={userDefault} className="logo" alt="Vite logo" />

      <Text text="MECNET" type="h2" styled="normal" color="white" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text color="white" styled="italic" text="Usuário" type="span" />
        <input type="text" placeholder="Usuário" {...register("user")} />

        <Text color="white" styled="italic" text="Senha" type="span" />
        <input type="password" placeholder="Senha" {...register("password")} />

        <Button text="Login" propsButton={{ type: "submit" }} />
      </form>
    </Conteiner>
  );
}
