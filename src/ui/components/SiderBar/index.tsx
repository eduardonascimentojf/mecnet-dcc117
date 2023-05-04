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
        <img src={Logo} alt="Logo da mecnet" />
        <Link to="/">
          <SiderBarItens
            name="Home"
            isSelected={splitLocation[1] === ""}
            icon={<BsHouseDoor />}
          />
        </Link>
        {props.items?.map((component, i) => (
          <div key={i}>{component}</div>
        ))}
      </ul>
      {props.home == true ? (
        <p
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
        </p>
      ) : (
        <p className="lastItem" onClick={() => navigate(-1)}>
          <SiderBarItens
            name="Voltar"
            isSelected={splitLocation[1] === "sair"}
            icon={<BsArrowLeft />}
          />
        </p>
      )}
    </S.Conteiner>
  );
}
