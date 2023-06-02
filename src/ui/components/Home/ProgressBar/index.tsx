import { useEffect, useState } from "react";
import { Text } from "../../Text";
import { Conteiner } from "./styles";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import { apiJava } from "../../../../data/api";
interface Props {
  class_name: string;
}

export function ProgressBar({ class_name }: Props) {
  const [fullStock, setFullStock] = useState(0);
  useEffect(() => {
    apiJava
      .get("/stock")
      .then((response) => {
        setFullStock(
          (100 * response.data.productsQuantity) / response.data.capacity
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            text={"% da capacidade máxima"}
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
        <CircularProgressbar value={fullStock} text={`${fullStock}%`} />
      </div>
    </Conteiner>
  );
}
