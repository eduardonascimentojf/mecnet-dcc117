import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../../data/contexts/auth";
import { apiJava } from "../../../data/api";
import { toast } from "react-toastify";
import { Conteiner } from "./styles";
import { BsXCircle } from "react-icons/bs";
import { Text } from "../Text";
import { CheckboxToggle } from "../../styles/checkboxToggle";
import { Button } from "../Button";

type IFormLogin = {
  name: string;
  email: string;
  userName: string;
  passWord: string;
  isAdmin: boolean;
};
interface Props {
  closeModal: () => void;
  id: string;
}

export function EditarUsuario(props: Props) {
  const { employees, setEmployees } = useAuth();
  const element = employees?.find((element) => element.id == props.id);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();

  const onSubmit: SubmitHandler<IFormLogin> = (data) => updateEmployee(data);
  async function updateEmployee(propsEdit: IFormLogin) {
    await apiJava
      .put(`/employee/${props.id}`, {
        name: propsEdit.name,
        email: propsEdit.email,
        userName: propsEdit.userName,
        passWord: propsEdit.passWord,
        isAdmin: propsEdit.isAdmin,
      })
      .then((res) => {
        const index = employees.map((e) => e.id).indexOf(props.id);
        res.data.userName = res.data.username;
        employees.splice(index, 1, res.data);
        setEmployees(employees);
        toast.success("Funcionário atualizado com sucesso!", {
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
              defaultValue={element?.userName}
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
            <Text color="white" styled="italic" text="Senha" type="span" />
            <input
              type="password"
              placeholder="Senha"
              defaultValue="*****"
              {...register("passWord", {
                minLength: 5,
                maxLength: 12,
              })}
            />
            {errors.passWord && (
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
              defaultChecked={element?.isAdmin}
              {...register("isAdmin")}
            />
          </div>
        </div>
        <Button
          text="Atualizar"
          propsButton={{ type: "submit" }}
          type="confirm"
        />
      </form>
    </Conteiner>
  );
}
