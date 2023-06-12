/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, useEffect } from "react";
import { SiderBar } from "../../ui/components/SiderBar";
import { Text } from "../../ui/components/Text";
import { SiderBarItens } from "../../ui/components/SiderBarItens";
import { Link, useLocation } from "react-router-dom";
import { BsCardChecklist, BsListOl } from "react-icons/bs";
import { useProduct } from "../../data/contexts/product";
import { Search } from "../../ui/components/Search";
import { ProdutosItens } from "../../ui/components/ProdutosItens";
// import { Loading } from "../../ui/components/Loading";

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
    <Link to="/vendas/historico-vendas">
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
    <div>
      <SiderBar items={array} />
      <main>
        <Text text="Estoque" color="black" type="h1" styled="normal" />
        <Search type="product" />
        <div className="grid">
          {product?.map((iten, i) => (
            <Link to={"/estoque/" + iten.id} key={i}>
              <ProdutosItens
                id={iten.id}
                image={iten.image}
                price={iten.price}
                name={iten.name}
                stock={iten.stock}
                description={iten.description}
                key={i}
              />
            </Link>
          ))}
        </div>
        {!product?.length && (
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
