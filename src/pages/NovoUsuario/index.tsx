import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { Button } from "../../ui/components/Button";

import { useAuth } from "../../data/contexts/auth";
import { BsXCircle } from "react-icons/bs";
import { CheckboxToggle } from "../../ui/styles/checkboxToggle";
import { toast } from "react-toastify";
import { apiJava } from "../../data/api";
import { User } from "../../@types";

type IFormLogin = {
  name: string;
  email: string;
  userName: string;
  password: string;
  isAdmin: boolean;
};
interface Props {
  closeModal: () => void;
}

export function NovoUsuario(props: Props) {
  const { employees } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => creatEmployee(data);
  async function creatEmployee(propsCreate: IFormLogin) {
    await apiJava
      .post<User>("/employee", {
        name: propsCreate.name,
        email: propsCreate.email,
        userName: propsCreate.userName,
        passWord: propsCreate.password,
        isAdmin: propsCreate.isAdmin,
      })
      .then((response) => {
        employees?.push(response.data);
        toast.success("Funcionário cadastrado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
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
            <Text
              color="white"
              styled="italic"
              text="Nome"
              type="span"
              required={true}
            />
            <input
              type="text"
              placeholder="Nome"
              {...register("name", {
                required: true,
                minLength: 5,
              })}
            />
            {errors.name && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="Informe o nome completo"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="E-mail"
              type="span"
              required={true}
            />
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email?.type === "required" && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="Informe um e-mail valido"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text color="white" styled="italic" text="Usuário" type="span" />
            <input
              type="text"
              placeholder="Usuário"
              {...register("userName", {
                required: true,
                minLength: 5,
                maxLength: 15,
              })}
            />
            {errors.userName && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="O usuário deve conter de 5 a 15 letras"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="Senha"
              type="span"
              required={true}
            />
            <input
              type="password"
              placeholder="Senha"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
            {errors.password && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="A senha deve conter de 6 a 12 caracteres"
              />
            )}
          </div>
          <div className="isAdm">
            <Text color="white" styled="italic" text="É gerente" type="span" />
            <CheckboxToggle
              type="checkbox"
              placeholder="É gerente"
              defaultChecked={false}
              {...register("isAdmin")}
            />
          </div>
        </div>
        <Button text="Cadastrar" propsButton={{ type: "submit" }} type="info" />
      </form>
    </Conteiner>
  );
}
