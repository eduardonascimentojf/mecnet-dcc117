import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { Text } from "../../ui/components/Text";
import { Button } from "../../ui/components/Button";
import { useAuth } from "../../data/contexts/auth";

import { Conteiner } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import mecnet from "../../assets/mecnet.png";

type IFormLogin = {
  user: string;
  password: string;
};

export function Login() {
  const { setUser, employees } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) =>
    login(data.user, data.password);

  function login(_name: string, _password: string) {
    employees.forEach((element) => {
      if (
        element.name.toString() == _name &&
        element.password.toString() == _password
      ) {
        setUser(element);
      }
    });
    toast.error("Usuário e/ou senha inválidos", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  return (
    <Conteiner className="login">
      <Text text="BEM VINDO" type="h4" styled="normal" color="white" />
      <div className="mecnet">
        <img src={mecnet} className="logo" alt="Mecnet logo" />
        <Text text="MECNET" type="h2" styled="normal" color="white" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          color="white"
          styled="italic"
          text="Usuário"
          type="span"
          required={true}
        />
        <input
          type="text"
          // required={true} // verificar qual o grupo prefere
          placeholder="Usuário"
          {...register("user", {
            required: true,
          })}
        />
        {errors.user && (
          <Text
            type="errorRequired"
            color="white"
            styled="italic"
            text="O usuário é necessário"
          />
        )}

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
          })}
        />
        {errors.password && (
          <Text
            type="errorRequired"
            color="white"
            styled="italic"
            text="A senha é necessária"
          />
        )}
        <Button text="Login" propsButton={{ type: "submit" }} />
        <ToastContainer />
      </form>
    </Conteiner>
  );
}
