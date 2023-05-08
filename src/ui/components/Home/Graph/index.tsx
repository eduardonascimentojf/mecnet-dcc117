import { Text } from "../../Text";
import { Chart } from "react-google-charts";
import { Conteiner } from "./styles";
interface Props {
  class_name: string;
}
const data = [
  ["Nome", "valor"],
  ["Produto Vendido - R$" + 74375.37, 74375.37],
  ["Mecânica - R$" + 54762.83, 54762.83],
  ["Despesas - R$" + 83412.75, 83412.75],
];

export function Graph({ class_name }: Props) {
  return (
    <Conteiner className={class_name}>
      <div className="legend">
        <Text
          text={"Faturamento"}
          styled={"normal"}
          type={"h3"}
          color={"black"}
        />
        <Text
          class_name="subtitle"
          text={"Últimos 3 meses"}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />
        <Text
          class_name="produto"
          text={"Produto Vendido  R$" + 74375.37}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />

        <Text
          class_name="mecanica"
          text={"Mecânica - R$" + 54762.83}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />
        <Text
          class_name="despesas"
          text={"Despesas - R$" + 83412.75}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />
        <Text
          text={"Lucro Líquido"}
          styled={"normal"}
          type={"h3"}
          color={"black"}
        />
				
        <Text
          class_name="lucro"
          text={"Lucro - R$" + 83412.75}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />
      </div>
      <Chart
        chartType="PieChart"
        data={data}
        options={{
          colors: ["#1E5BB4", "#e4f30a", "#f94721"],
          pieSliceText: "none",
          enableInteractivity: false,
          legend: { position: "none" },
          backgroundColor: "transparent",
        }}
        width={"250px"}
        height={"250px"}
      />
    </Conteiner>
  );
}
