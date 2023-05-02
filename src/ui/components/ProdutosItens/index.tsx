import { Conteiner } from "./styles";
import { Product } from "../../../data/contexts/product";
import { Text } from "../Text";
export function ProdutosItens(props: Product) {
  return (
    <Conteiner key={props.id}>
      <img src={props.images[0]} alt={props.title} />
      <div>
        <Text type="h4" text={props.title} color="black" styled="normal" />
        <Text
          type="p"
          text={"R$ " + props.price}
          color="black"
          styled="normal"
        />
        <Text type="p" text={props.category} color="black" styled="normal" />
      </div>
    </Conteiner>
  );
}
