/* eslint-disable react-hooks/exhaustive-deps */

import { ReactNode, useEffect } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsBoxes, BsCardChecklist, BsCart2 } from "react-icons/bs";
import { Search } from "../../ui/components/Search";
import { useProduct } from "../../data/contexts/product";
import { ProdutosItens } from "../../ui/components/ProdutosItens";

export function Produtos() {
  const location = useLocation();
  const { pathname } = location;
  const { product, getProducts } = useProduct();
  const splitLocation = pathname.split("/");

  const array: ReactNode[] = [
    <Link to="/produtos">
      <SiderBarItens
        name="Produtos"
        isSelected={splitLocation[1] === "produtos"}
        icon={<BsBoxes />}
      />
    </Link>,
    <Link to="/pedidos">
      <SiderBarItens
        name="Pedidos"
        isSelected={splitLocation[1] === "pedidos"}
        icon={<BsCart2 />}
      />
    </Link>,
    <Link to="/estoque/historico-pedidos">
      <SiderBarItens
        name="Histórico de Pedidos"
        isSelected={splitLocation[1] === "historico-pedidos"}
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
        <Text text="Produtos" color="black" type="h1" styled="normal" />
        <Search />
        <div className="grid">
          {product?.products.map((iten, i) => (
            <ProdutosItens
              category={iten.category}
              id={iten.id}
              images={iten.images}
              price={iten.price}
              title={iten.title}
              key={i}
            />
          ))}
        </div>
        {!product?.products.length && (
          <h3 className="notFound">Nenhum produto foi encontrado!</h3>
        )}
      </main>
    </Conteiner>
  );
}
