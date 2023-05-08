import { Text } from "../../Text";
import { Conteiner } from "./styles";

import { Link } from "react-router-dom";
interface Props {
  class_name: string;
}
interface requestsRecentProps {
  codigo: number;
  status: "Completo" | "Em aberto";
  valorUnid: number;
  qtd: number;
  data: string;
}
const requestsRecent: requestsRecentProps[] = [
  {
    codigo: 534764873,
    status: "Completo",
    valorUnid: 123.94,
    qtd: 20,
    data: "24/03/2023",
  },
  {
    codigo: 637425465,
    status: "Em aberto",
    valorUnid: 78.35,
    qtd: 10,
    data: "21/03/2023",
  },
];

export function RequestsRecent({ class_name }: Props) {
  return (
    <Conteiner className={class_name}>
      <div className="header">
        <div>
          <Text
            text={"Pedidos Recentes"}
            styled={"normal"}
            type={"h3"}
            color={"black"}
          />
          <Text
            class_name="subtitle"
            text={"Últimas 2 dias"}
            styled={"italic"}
            type={"span"}
            color={"black"}
          />
        </div>

        <Link to="/pedidos">
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
            <th>Status</th>
            <th>Valor unid.</th>
            <th>QTD</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {requestsRecent.map((iten, i) => (
            <tr key={i}>
              <td>{iten.codigo}</td>
              <td
                className={
                  iten.status === "Completo" ? "complete" : "notComplete"
                }
              >
                <p>{iten.status}</p>
              </td>
              <td>R$ {iten.valorUnid}</td>
              <td>{iten.qtd}</td>
              <td>{iten.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Conteiner>
  );
}
