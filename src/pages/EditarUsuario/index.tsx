import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { Button } from "../../ui/components/Button";

import { useAuth } from "../../data/contexts/auth";
import { BsXCircle } from "react-icons/bs";
import { CheckboxToggle } from "../../ui/styles/checkboxToggle";
import { toast } from "react-toastify";

type IFormLogin = {
  name: string;
  email: string;
  user: string;
  password: string;
  isAdm: boolean;
};
interface Props {
  closeModal: () => void;
  id: number;
}

export function EditarUsuario(props: Props) {
  const { employees } = useAuth();
  const element = employees.find((element) => element.id == props.id);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => updateEmployee(data);
  function updateEmployee(propsEdit: IFormLogin) {
    employees.map((employee) => {
      if (employee.id == props.id) {
        employee.name = propsEdit.name;
        employee.email = propsEdit.email;
        employee.user = propsEdit.user;
        employee.password = propsEdit.password;
        employee.isAdm = propsEdit.isAdm;
        employee.id = props.id;
      }
    });

    props.closeModal();
    toast.success("Informação atualizada com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text
        text="Atualizar um funcionário"
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
              defaultValue={element?.name}
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
              defaultValue={element?.email}
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
              defaultValue={element?.user}
              placeholder="Usuário"
              {...register("user", {
                required: true,
                minLength: 5,
                maxLength: 15,
              })}
            />
            {errors.user && (
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
              defaultValue={element?.password}
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
              defaultChecked={element?.isAdm}
              {...register("isAdm")}
            />
          </div>
        </div>
        <Button text="Atualizar" propsButton={{ type: "submit" }} />
      </form>
    </Conteiner>
  );
}
