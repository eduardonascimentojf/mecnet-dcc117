/* eslint-disable react-hooks/exhaustive-deps */

import { ReactNode, useEffect } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsBoxes, BsCardChecklist, BsCart2 } from "react-icons/bs";
import { Search } from "../../ui/components/Search";
import { useProduct } from "../../data/contexts/product";
import { ProdutosItens } from "../../ui/components/ProdutosItens";

export function Produtos() {
  const location = useLocation();
  const { pathname } = location;
  const { productCatalog, getProductsCatalog } = useProduct();
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
    getProductsCatalog();
  }, []);

  return (
    <div>
      <SiderBar items={array} />
      <main>
        <Text text="Produtos" color="black" type="h1" styled="normal" />
        <Search type="catalog" />

        <div className="grid">
          {productCatalog?.map((iten, i) => (
            <ProdutosItens
              id={iten.id}
              name={iten.name}
              image={iten.image}
              price={iten.price}
              description={iten.description}
              key={i}
            />
          ))}
        </div>
        {!productCatalog?.length && (
          <Text
            text="Nenhum produto foi encontrado!"
            styled={"normal"}
            type={"notFound"}
            color={"black"}
          />
        )}
      </main>
    </div>
  );
}
