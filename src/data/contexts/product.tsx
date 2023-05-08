/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
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
  getProductById: (id: string) => void;
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
  function getProductById(id: string) {
    api.get<Product>("products/" + id).then((response) => {
      const productById: Products = {
        limit: 0,
        products: [response.data],
        skip: 0,
        total: 0,
      };
      setProduct(productById);
    });
  }

  return (
    <ProductsContext.Provider
      value={{
        product,
        setProduct,
        searchProducts,
        getProducts,
        getProductById,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => React.useContext(ProductsContext);
