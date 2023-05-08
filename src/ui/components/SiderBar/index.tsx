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
          <div key={i}>{component}</div>
        ))}
      </ul>
      {props.home == true ? (
        <div
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
        </div>
      ) : (
        <div className="lastItem" onClick={() => navigate(-1)}>
          <SiderBarItens
            name="Voltar"
            isSelected={splitLocation[1] === "sair"}
            icon={<BsArrowLeft />}
          />
        </div>
      )}
    </S.Conteiner>
  );
}
