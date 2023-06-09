import { ButtonHTMLAttributes, ReactNode } from "react";
import { Conteiner, Spinner } from "./styles";
interface Props {
  icon?: ReactNode;
  propsButton?: ButtonHTMLAttributes<HTMLButtonElement>;
  text?: string;
  disable?: boolean;
  type: "info" | "confirm" | "cancel";
}

export function Button(props: Props) {
  return (
    <Conteiner
      {...props.propsButton}
      disabled={props.disable}
      className={props.type}
    >
      {props.disable ? (
        <Spinner className="spinner-container">
          <div className="loading-spinner"></div>
        </Spinner>
      ) : (
        <>
          {props.icon}
          <p>{props.text}</p>
        </>
      )}
    </Conteiner>
  );
}
