/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-redeclare */
import React, { useEffect } from "react";
import { createContext, ReactNode, useState } from "react";
import { api } from "../api";
type Products = {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
};
export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  images: string[];
};

type ProductContextData = {
  product: Products | null;
  setProduct: React.Dispatch<React.SetStateAction<Products | null>>;
  searchProducts: (_search: string) => void;
  getProducts: () => void;
};

export const ProductsContext = createContext({} as ProductContextData);

type ProductProvider = {
  children: ReactNode;
};

export function ProductProvider(props: ProductProvider) {
  const [product, setProduct] = useState<Products | null>(null);

  function searchProducts(_search: string) {
    api.get<Products>("products/search?q=" + _search).then((response) => {
      setProduct(response.data);
    });
  }
  function getProducts() {
    api.get<Products>("products").then((response) => {
      setProduct(response.data);
    });
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ product, setProduct, searchProducts, getProducts }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => React.useContext(ProductsContext);
