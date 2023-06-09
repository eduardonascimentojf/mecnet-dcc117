import * as S from "./styles";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../../../assets/mecnet.png";
import { SiderBarItens } from "../SiderBarItens";
import { useAuth } from "../../../data/contexts/auth";
import { ReactNode } from "react";
import { BsArrowLeft, BsBoxArrowInLeft, BsHouseDoor } from "react-icons/bs";

interface Props {
  items?: ReactNode[];
  home?: boolean;
}

export function SiderBar(props: Props) {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const { signOut } = useAuth();
  const navigate = useNavigate();
  return (
    <S.Conteiner>
      <ul>
        <li>
          <img src={Logo} alt="Logo da mecnet" />
        </li>
        <li>
          <Link to="/">
            <SiderBarItens
              name="Home"
              isSelected={splitLocation[1] === ""}
              icon={<BsHouseDoor />}
            />
          </Link>
        </li>
        {props.items?.map((component, i) => (
          <li key={i}>{component}</li>
        ))}
        {props.home == true ? (
          <li
            className="lastItem"
            onClick={() => {
              signOut();
            }}
          >
            <SiderBarItens
              name="Sair"
              isSelected={splitLocation[1] === "sair"}
              icon={<BsBoxArrowInLeft />}
            />
          </li>
        ) : (
          <li className="lastItem" onClick={() => navigate(-1)}>
            <SiderBarItens
              name="Voltar"
              isSelected={splitLocation[1] === "sair"}
              icon={<BsArrowLeft />}
            />
          </li>
        )}
      </ul>
    </S.Conteiner>
  );
}
