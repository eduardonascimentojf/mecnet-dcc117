import { Product } from "../../../@types";
import { auxPrice } from "../../../helpers";
import { Text } from "../Text";
import { Conteiner } from "./styles";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useProduct } from "../../../data/contexts/product";

interface PropsType {
  data: Product[];
}
export function CardSearchOption({ data }: PropsType) {
  const { setProductVenda, productVenda } = useProduct();

  const handleOnSelect = (item: Product) => {
    const index = productVenda.map((e) => e.id).indexOf(item.id);
    if (index < 0) setProductVenda((productVenda) => [...productVenda, item]);
  };

  const formatResult = (item: Product) => {
    return (
      <div className="card">
        <img src={item.image[0]} alt={item.name} />
        <div className="info">
          <Text text={item.name} styled="normal" type="p" color="black" class_name="name" />
          <Text
            text={item.description}
            styled="normal"
            type="p"
            color="black"
            class_name="description"
          />
        </div>
        <div>
          <Text
            text={"Preço: R$" + auxPrice(item.price)}
            styled="normal"
            type="p"
            color="black"
          />
          <Text
            text={"Disponível: " + item.stock.toString()}
            styled="normal"
            type="p"
            color="black"
          />
        </div>
      </div>
    );
  };
  return (
    <Conteiner>
      <div className="search">
        <header className="search-header">
          <ReactSearchAutocomplete
            placeholder="Adicionar item"
            items={data.filter((e) => e.stock > 0)}
            fuseOptions={{ keys: ["name"] }}
            onSelect={handleOnSelect}
            autoFocus
            showNoResultsText="Não encontrado"
            formatResult={formatResult}
            showIcon={false}
            maxResults={4}
            showClear={true}
          />
        </header>
      </div>
    </Conteiner>
  );
}
