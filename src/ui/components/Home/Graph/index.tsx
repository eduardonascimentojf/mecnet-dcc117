import { Text } from "../../Text";
import { Chart } from "react-google-charts";
import { Conteiner } from "./styles";
import { useEffect, useState } from "react";
import { apiJava } from "../../../../data/api";
import { auxPrice } from "../../../../helpers";
interface Props {
  class_name: string;
}

export function Graph({ class_name }: Props) {
  const [toatalPriceOrder, setTotalPriceOrder] = useState(0);
  const [toatalPriceSale, setTotalPriceSale] = useState(0);
  useEffect(() => {
    apiJava
      .get("/order/priceOrderTotal")
      .then((response) => {
        setTotalPriceOrder(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    apiJava
      .get("sale/priceSaleTotal")
      .then((response) => {
        setTotalPriceSale(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const lucro = toatalPriceSale - toatalPriceOrder;
  const data = [
    ["Nome", "valor"],
    ["Produto Vendido - R$" + toatalPriceSale, toatalPriceSale],
    ["Despesas - R$" + toatalPriceOrder, toatalPriceOrder],
  ];

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
          text={"Produto Vendido - R$" + auxPrice(toatalPriceSale)}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />

        <Text
          class_name="despesas"
          text={"Despesas - R$" + auxPrice(toatalPriceOrder)}
          styled={"italic"}
          type={"span"}
          color={"black"}
        />
        {lucro > 0 ? (
          <>
            <Text
              text={"Lucro Líquido"}
              styled={"normal"}
              type={"h3"}
              color={"black"}
            />

            <Text
              class_name="lucro"
              text={"Lucro - R$" + auxPrice(lucro)}
              styled={"italic"}
              type={"span"}
              color={"black"}
            />
          </>
        ) : (
          <>
            <Text
              text={"Prejuizo"}
              styled={"normal"}
              type={"h3"}
              color={"black"}
            />

            <Text
              class_name="prejuizo"
              text={"Prejuizo - R$" + auxPrice(lucro * -1)}
              styled={"italic"}
              type={"span"}
              color={"black"}
            />
          </>
        )}
      </div>
      <Chart
        chartType="PieChart"
        data={data}
        options={{
          colors: ["#1E5BB4", "#e4f30a"],
          pieSliceText: "none",
          enableInteractivity: false,
          legend: { position: "none" },
          backgroundColor: "transparent",
        }}
        width={"15.6rem"}
        height={"15.6rem"}
      />
    </Conteiner>
  );
}
