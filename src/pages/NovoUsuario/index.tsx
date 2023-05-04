import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { Button } from "../../ui/components/Button";

import { useAuth } from "../../data/contexts/auth";
import { BsXCircle } from "react-icons/bs";


type IFormLogin = {
  name: string;
  email: string;
  user: string;
  password: string;
  isAdm: boolean;
};
interface Props {
  closeModal: () => void;
}

export function NovoUsuario(props: Props) {
  const { register, handleSubmit } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) => creatEmployee(data);

  const { employees } = useAuth();

  function creatEmployee(propsCreate: IFormLogin) {
    employees.push({
      id: employees.length,
      name: propsCreate.name,
      email: propsCreate.email,
      password: propsCreate.password,
      user: propsCreate.user,
      isAdm: propsCreate.isAdm,
    });
    props.closeModal();
  }

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text
        text="Cadastre um funcionário"
        type="h4"
        styled="normal"
        color="white"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="inputLabel">
            <Text color="white" styled="italic" text="Nome" type="span" />
            <input type="text" placeholder="Nome" {...register("name")} />
          </div>
          <div className="inputLabel">
            <Text color="white" styled="italic" text="Email" type="span" />
            <input type="email" placeholder="Email" {...register("email")} />
          </div>
          <div className="inputLabel">
            <Text color="white" styled="italic" text="Usuário" type="span" />
            <input type="text" placeholder="Usuário" {...register("user")} />
          </div>
          <div className="inputLabel">
            <Text color="white" styled="italic" text="Senha" type="span" />
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </div>
          <div className="isAdm">
            <Text color="white" styled="italic" text="É gerente" type="span" />
            <input
              type="checkbox"
              placeholder="É gerente"
              defaultChecked={false}
              {...register("isAdm")}
            />
          </div>
        </div>
        <Button text="Cadastrar" propsButton={{ type: "submit" }} />
      </form>
    </Conteiner>
  );
}
