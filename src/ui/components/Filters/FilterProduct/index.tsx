import { BsArrowReturnLeft } from "react-icons/bs";
import { Conteiner } from "./styles";
import { Text } from "../../Text";

const marcas = ["Volvo", "Volksvagen", "Ford", "Dana", "Albarus"];
const precos = [
  "Até R$ 500",
  "R$500 a R$1000",
  "R$1000 a R$2000",
  "R$2000 a R$3000",
  "R$3000 a R$4000",
  "Mais de R$4000",
];
const fabricantes = [
  "Líder",
  "Zava metalúrgica",
  "Jocan",
  "Sarplast Indústria",
];

interface Props {
  closeModal: () => void;
}

export function FilterProduct(props: Props) {
  function confirmfilter() {
    props.closeModal();
  }
  return (
    <Conteiner>
      <BsArrowReturnLeft onClick={props.closeModal} />

      <Text text="Marca" type="h4" styled="normal" color="white" />
      <ul>
        {marcas.map((iten, i) => (
          <li key={i}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{iten}</label>
          </li>
        ))}
      </ul>

      <Text text="Preços" type="h4" styled="normal" color="white" />
      <ul>
        {precos.map((iten, i) => (
          <li key={i}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{iten}</label>
          </li>
        ))}
      </ul>

      <Text
        text="Ofertas e Descontos"
        type="h4"
        styled="normal"
        color="white"
      />
      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Ofertas do Dia</label>
        </li>
        <li>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Todos os descontos</label>
        </li>
      </ul>

      <Text text="Fabricantes" type="h4" styled="normal" color="white" />
      <ul>
        {fabricantes.map((iten, i) => (
          <li key={i}>
            <input type="checkbox" name="" id="" />
            <label htmlFor="">{iten}</label>
          </li>
        ))}
      </ul>

      <Text text="Disponibilidade" type="h4" styled="normal" color="white" />
      <ul>
        <li>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">Exibir itens sem Estoque</label>
        </li>
      </ul>

      <div className="buttons">
        <button className="confirm" onClick={confirmfilter}>
          Aplicar
        </button>
        <button onClick={props.closeModal} className="cancel">
          Cancelar
        </button>
      </div>
    </Conteiner>
  );
}
