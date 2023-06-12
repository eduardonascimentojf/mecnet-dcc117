/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Text } from "../../Text";
import { Conteiner } from "./styles";

import { Link } from "react-router-dom";
import { useProduct } from "../../../../data/contexts/product";
import { auxPrice } from "../../../../helpers";
interface Props {
  class_name: string;
}

export function ExpiresSoon({ class_name }: Props) {
  const { searchProducts, product } = useProduct();
  useEffect(() => {
    searchProducts("", "stock,asc");
  }, []);

  return (
    <Conteiner className={class_name}>
      <div className="header">
        <div>
          <Text
            text={"Expira em breve"}
            styled={"normal"}
            type={"h3"}
            color={"black"}
          />
          <Text
            class_name="subtitle"
            text={"Podutos em baixa no estoque"}
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

      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Valor unid.</th>
            <th>QTD</th>
          </tr>
        </thead>
        <tbody>
          {product?.slice(0, 3).map((iten, i) => (
            <tr key={i}>
              <td>{iten.id.split("-")[0]}</td>
              <td className="name">{iten.name}</td>
              <td>R$ {auxPrice(iten.price)}</td>
              <td>{iten.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
}
