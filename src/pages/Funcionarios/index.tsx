/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect, useState } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, Navigate, useLocation } from "react-router-dom";
import { BsPeople, BsPersonPlus } from "react-icons/bs";
import { Button } from "../../ui/components/Button";
import Modal from "react-modal";
import { Table } from "../../ui/components/Table";
import { NovoUsuario } from "../NovoUsuario";
import { useAuth } from "../../data/contexts/auth";
import { apiJava } from "../../data/api";
import { User } from "../../@types";

export function Funcionarios() {
  const { setEmployees, user, employees } = useAuth();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const array: ReactNode[] = [
    <Link to="/funcionarios">
      <SiderBarItens
        name="funcionarios"
        isSelected={splitLocation[1] === "funcionarios"}
        icon={<BsPeople />}
      />
    </Link>,
  ];
  useEffect(() => {
    const fetchData = async () => {
      apiJava
        .get<User[]>("/employee")
        .then((response) => {
          setEmployees(response.data);
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    };
    fetchData();
  }, [employees]);

  return (
    <>
      {user?.isAdmin === false ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Conteiner>
          <SiderBar items={array} />
          <main>
            <Text text="Funcionários" color="black" type="h1" styled="normal" />
            <Button
              propsButton={{ onClick: openModal }}
              icon={<BsPersonPlus />}
              text="Novo funcionário"
              type="info"
            />

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: "rgba(0,0,0, .93)",
                  zIndex: "1000",
                  overflowY: "scroll",
                },
                content: {
                  zIndex: "1000",
                  border: "2px solid var(--color-light-blue)",
                  backgroundColor: "var(--color-blue)",
                  overflow: "hidden",
                  borderRadius: "20px",
                  outline: " none",
                },
              }}
            >
              <NovoUsuario closeModal={closeModal} />
            </Modal>
            {employees && <Table />}
          </main>
        </Conteiner>
      )}
    </>
  );
}
