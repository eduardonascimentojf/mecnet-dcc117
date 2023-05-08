/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

export type User = {
  id: number;
  name: string;
  email: string;
  user: string;
  password: string;
  isAdm: boolean;
};

type AuthContextData = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  employees: User[];
  signOut: () => void;
  removeEmployee: (_employeeId: number) => void;
  addEmployee: (_employee: User) => void;
};

export const AuthContext = createContext({} as AuthContextData);

type AuthProvider = {
  children: ReactNode;
};

export function AuthProvider(props: AuthProvider) {
  const [user, setUser] = useState<User | null>(null);
  const [employees] = useState<User[]>([
    {
      id: 0,
      name: "1",
      email: "1@mecnet.com",
      user: "1",
      password: "1",
      isAdm: false,
    },
    {
      id: 1,
      name: "2",
      email: "2@mecnet.com",
      user: "2",
      password: "2",
      isAdm: false,
    },
    {
      id: 2,
      name: "admin",
      email: "admin@mecnet.com",
      user: "admin",
      password: "admin",
      isAdm: true,
    },
  ]);

  function signOut() {
    setUser(null);
  }
  function addEmployee(_employee: User) {
    employees.push(_employee);
  }
  function removeEmployee(_employeeId: number) {
    employees.map((employee: User, i: number) => {
      if (employee.id == _employeeId) {
        employees.splice(i, 1);
        toast.success("Funcionário removido com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }
    });
  }
  useEffect(() => {
    if (user !== null) {
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
      value={{ user, setUser, employees, signOut, addEmployee, removeEmployee }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => React.useContext(AuthContext);
