import { Text } from "../../Text";
import { Conteiner } from "./styles";

import { Link } from "react-router-dom";
interface Props {
  class_name: string;
}
interface expiresSoonProps {
  codigo: string;
  tipo: "Motor" | "Suspensão" | "Freio";
  valorUnid: number;
  qtd: number;
}
const expiresSoon: expiresSoonProps[] = [
  {
    codigo: "52WVC10338",
    tipo: "Motor",
    valorUnid: 5632.24,
    qtd: 2,
  },
  {
    codigo: "M303304",
    tipo: "Freio",
    valorUnid: 250.0,
    qtd: 4,
  },
];

export function ExpiresSoon({ class_name }: Props) {
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
            text={"Ver todos ->"}
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
            <th>Tipo</th>
            <th>Valor unid.</th>
            <th>QTD</th>
          </tr>
        </thead>
        <tbody>
          {expiresSoon.map((iten, i) => (
            <tr key={i}>
              <td>{iten.codigo}</td>
              <td>{iten.tipo}</td>
              <td>R$ {iten.valorUnid}</td>
              <td>{iten.qtd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
}
