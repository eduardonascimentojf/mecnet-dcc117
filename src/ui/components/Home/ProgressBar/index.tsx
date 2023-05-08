import { Text } from "../../Text";
import { Conteiner } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
interface Props {
  class_name: string;
}

export function ProgressBar({ class_name }: Props) {
  return (
    <Conteiner className={class_name}>
      <div className="header">
        <div>
          <Text
            text={"Estoque"}
            styled={"normal"}
            type={"h3"}
            color={"black"}
          />
          <Text
            class_name="subtitle"
            text={"Capacidade máxima atingida"}
            styled={"italic"}
            type={"span"}
            color={"black"}
          />
        </div>

        <Link to="/estoque">
          <Text
            class_name="verMais"
            text={"Ver todos"}
            styled={"italic"}
            type={"span"}
            color={"black"}
          />
        </Link>
      </div>

      <div className="progress_bar">
        <CircularProgressbar value={60} text={`${60}%`} />
      </div>
    </Conteiner>
  );
}
