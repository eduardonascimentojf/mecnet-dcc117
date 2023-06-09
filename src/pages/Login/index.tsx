import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Typewriter from "typewriter-effect";
import { Text } from "../../ui/components/Text";
import { Button } from "../../ui/components/Button";
import { useAuth } from "../../data/contexts/auth";

import { Conteiner } from "./styles";
import "react-toastify/dist/ReactToastify.css";
import mecnet from "../../assets/mecnet.png";
import { apiJava } from "../../data/api";
import { User } from "../../@types";
import { useState } from "react";
import { Input } from "../../ui/components/Input";
import { ConteinerInput } from "../../ui/components/Input/styles";

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
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormLogin>();
  const onSubmit: SubmitHandler<IFormLogin> = (data) =>
    login(data.login, data.password);

  async function login(_login: string, _password: string) {
    setIsLoading(true);
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
        setIsLoading(false);
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
          });
        console.log(err);
        setIsLoading(false);
      });
  }

  return (
    <Conteiner className="login">
      <Text text="BEM VINDO" type="h4" styled="normal" color="white" />
      <div className="mecnet">
        <img src={mecnet} className="logo" alt="Mecnet logo" />
        <div className="title">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("<span class=fix>Mecnet é <span>")
                .pauseFor(500)
                .typeString("<span class=info>agilidade!</span>")
                .pauseFor(250)
                .deleteChars(10)
                .pauseFor(250)
                .typeString("<span class=info>economia!</span>")
                .pauseFor(250)
                .deleteChars(10)
                .pauseFor(250)
                .typeString("<span class=info>praticidade!</span>")
                .start();
            }}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Text
          color="white"
          styled="italic"
          text="Usuário"
          type="span"
          required={true}
        />
        <ConteinerInput
          type="text"
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

        <ConteinerInput
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

        <Button
          text="Login"
          disable={isLoading}
          propsButton={{ type: "submit" }}
          type="info"
        />

        <ToastContainer />
      </form>
    </Conteiner>
  );
}
