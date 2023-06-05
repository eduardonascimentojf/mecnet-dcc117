import { Conteiner } from "./styles";
interface Props {
  setSort: (sort: string) => void;
  closeModal: () => void;
}

export function Sort(props: Props) {
  return (
    <Conteiner>
      <li
        onClick={() => {
          props.setSort("name,asc");
          props.closeModal();
        }}
      >
        Crescente
      </li>
      <li
        onClick={() => {
          props.setSort("name,desc");
          props.closeModal();
        }}
      >
        Decrescente
      </li>
      <li
        onClick={() => {
          props.setSort("price,asc");
          props.closeModal();
        }}
      >
        Menor Preço
      </li>
      <li
        onClick={() => {
          props.setSort("price,desc");
          props.closeModal();
        }}
      >
        Maior Preço
      </li>
      <li
        onClick={() => {
          props.setSort("stock,desc");
          props.closeModal();
        }}
      >
        Maior Quantidade disponivel
      </li>
      <li
        onClick={() => {
          props.setSort("stock,asc");
          props.closeModal();
        }}
      >
        Menor Quantidade disponivel
      </li>
    </Conteiner>
  );
}
