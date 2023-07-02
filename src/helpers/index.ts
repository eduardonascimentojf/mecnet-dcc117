export function auxDate(dataString: string | undefined) {
  if (dataString === undefined) return;
  const dataAux = new Date(dataString);
  dataAux.setUTCHours(dataAux.getUTCHours() - 6);
  const data = dataAux.toJSON().split("T");
  const hour = data[1].split(":");
  const date = data[0].split("-");
  return `${date[2]}/${date[1]}/${date[0]} | ${hour[0]}:${hour[1]}h`;
}

export function auxPrice(price?: number) {
  if (price != undefined) return price.toFixed(2).replace(".", ",");
}
export function auxCPF(cpf: string) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}
