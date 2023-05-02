/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist, BsListOl } from "react-icons/bs";
import { useProduct } from "../../data/contexts/product";
import { Search } from "../../ui/components/Search";
import { ProdutosItens } from "../../ui/components/ProdutosItens";

export function Estoque() {
  const location = useLocation();
  const { pathname } = location;
  const { product, getProducts } = useProduct();
  const splitLocation = pathname.split("/");
  const array: ReactNode[] = [
    <Link to="/estoque">
      <SiderBarItens
        name="Estoque"
        isSelected={splitLocation[1] === "estoque"}
        icon={<BsListOl />}
      />
    </Link>,
    <Link to="/consultar-historico">
      <SiderBarItens
        name="Consultar Histórico"
        isSelected={splitLocation[1] === "consultar-historico"}
        icon={<BsCardChecklist />}
      />
    </Link>,
  ];
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Conteiner>
      <SiderBar items={array} />
      <main>
        <Text text="Estoque" color="black" type="h1" styled="normal" />
        <Search />
        <div className="grid">
          {product?.products.map((iten) => (
            <ProdutosItens
              category={iten.category}
              id={iten.id}
              images={iten.images}
              price={iten.price}
              title={iten.title}
            />
          ))}
        </div>
      </main>
    </Conteiner>
  );
}
