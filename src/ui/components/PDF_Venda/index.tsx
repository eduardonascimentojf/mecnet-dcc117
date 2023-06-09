import { User, VendasType } from "../../../@types";
import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts.js";
import { auxDate, auxPrice } from "../../../helpers";

export function PDF_Venda(
  vendas: VendasType[],
  user: User | null,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  function date() {
    const data = new Date();
    data.setHours(data.getHours() - 3);
    return data.toJSON();
  }
  const reportTitle = [
    {
      text: "Histórico de Vendas - MECNET",
      fontSize: 15,
      bold: true,
      margin: [15, 20, 0, 45], // left, top, right, bottom
    },
  ];

  const dados = vendas.map((venda) => {
    return [
      { text: venda.id.split("-")[0], fontSize: 9, margin: [0, 2, 0, 2] },
      { text: venda.client, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: venda.cpfClient, fontSize: 9, margin: [0, 2, 0, 2] },
      { text: auxPrice(venda.price), fontSize: 9, margin: [0, 2, 0, 2] },
      { text: auxDate(venda.createdAt), fontSize: 9, margin: [0, 2, 0, 2] },
    ];
  });
  const details = [
    {
      margin: [0, 20, 0, 20], // left, top, right, botto
      columns: [
        [
          { text: "Vendedor: " + user?.name },
          { text: "Email: " + user?.email },
        ],
        [
          {
            text: "Data: " + auxDate(date()),
            alignment: "right",
          },
        ],
      ],
    },
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*", "*"],
        body: [
          [
            { text: "Código", style: "tableHeader", fontSize: 10 },
            { text: "Cliente", style: "tableHeader", fontSize: 10 },
            { text: "CPF", style: "tableHeader", fontSize: 10 },
            { text: "Peço", style: "tableHeader", fontSize: 10 },
            { text: "Data", style: "tableHeader", fontSize: 10 },
          ],
          ...dados,
        ],
      },
      layout: "lightHorizontalLines",
    },
  ];

  function Rodape(currentPage: any, pageCount: any) {
    return [
      {
        text: "Gerado por @mecnet  " + currentPage + " / " + pageCount,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0], // left, top, right, bottom
      },
    ];
  }

  const docDefinitios: any = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: Rodape,
  };
  return (
    pdfMake.createPdf(docDefinitios).download("hist_venda_" + user?.name),
    setIsLoading(false)
  );
}
