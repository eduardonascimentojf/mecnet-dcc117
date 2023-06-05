import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import { Text } from "../../ui/components/Text";
import { Button } from "../../ui/components/Button";
import { User, useAuth } from "../../data/contexts/auth";

import { Conteiner } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import mecnet from "../../assets/mecnet.png";
import { apiJava } from "../../data/api";

type IFormLogin = {
  login: string;
  password: string;
};
type AuthResponse = {
  token: string;
  employee: User;
};

export function Login() {
  const { setUser, setControllerLogin } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) =>
    login(data.login, data.password);

  async function login(_login: string, _password: string) {
    await apiJava
      .post<AuthResponse>("/login", {
        login: _login,
        password: _password,
      })
      .then((response) => {
        const { token, employee } = response.data;
        localStorage.setItem("@User:token", token);
        apiJava.defaults.headers.common.authorization = `Bearer ${token}`;
        setUser(employee);
        setControllerLogin(true);
      })
      .catch((err) => {
        if (err.message == "Network Error") {
          toast.error("Serivdor não está respondendo", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else
          toast.error("Usuário e/ou senha inválidos", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
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
          {...register("login", {
            required: true,
          })}
        />
        {errors.login && (
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
