/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import { apiJava } from "../api";
import { User } from "../../@types";

type AuthContextData = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  signOut: () => void;
  employees: User[];
  setEmployees: React.Dispatch<React.SetStateAction<User[]>>;
  setControllerLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  const [controllerLogin, setControllerLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [employees, setEmployees] = useState<User[]>([]);

  function signOut() {
    setUser(null);
    localStorage.removeItem("@User:token");
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("@User:token");
      if (token) {
        apiJava.defaults.headers.common.authorization = `Bearer ${token}`;
        await apiJava
          .get<User>("/authenticate")
          .then((response) => {
            setUser(response.data);
          })
          .catch(() => {
            localStorage.removeItem("@User:token");
          });
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (user !== null && controllerLogin) {
      toast.success("Login efetuado com sucesso!", {
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
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        employees,
        setEmployees,
        signOut,
        setControllerLogin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
