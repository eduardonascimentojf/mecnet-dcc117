/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-redeclare */
import React from "react";
import { createContext, ReactNode, useState } from "react";
import { apiJava } from "../api";
import { Catalog, Stock } from "../../@types";


type ProductContextData = {
  product: Stock[] | null;
  setProduct: React.Dispatch<React.SetStateAction<Stock[] | null>>;
  searchProducts: (_search: string, _sort: string) => void;
  getProducts: () => void;
  getProductById: (id: string) => void;

  productCatalog: Catalog[] | null;
  setProductCatalog: React.Dispatch<React.SetStateAction<Catalog[] | null>>;
  searchProductsCatalog: (_search: string, _sort: string) => void;
  getProductsCatalog: () => void;
  getProductCatalogById: (id: string) => void;
};

export const ProductsContext = createContext({} as ProductContextData);

type ProductProvider = {
  children: ReactNode;
};

export function ProductProvider(props: ProductProvider) {
  const [product, setProduct] = useState<Stock[] | null>(null);
  const [productCatalog, setProductCatalog] = useState<Catalog[] | null>(null);
  function searchProducts(_search: string, _sort: string) {
    apiJava
      .get(
        `/searchProduct/queryDynamicLike?name=${_search}&page=0&size=100&sort=${_sort}`
      )
      .then((response) => {
        setProduct(response.data);
      });
  }
  function getProducts() {
    apiJava.get("/stock/products").then((response) => {
      setProduct(response.data);
    });
  }
  async function getProductById(id: string) {
    await apiJava.get<Stock>("/stock/products/" + id).then((response) => {
      setProduct([response.data]);
    });
  }
  function searchProductsCatalog(_search: string, _sort: string) {
    apiJava
      .get(
        `/searchCatalog/queryDynamicLike?name=${_search}&page=0&size=100&sort=${_sort}`
      )
      .then((response) => {
        setProductCatalog(response.data);
      });
  }
  function getProductsCatalog() {
    apiJava.get<Catalog[]>("/catalog").then((response) => {
      setProductCatalog(response.data);
    });
  }
  function getProductCatalogById(id: string) {
    apiJava.get<Catalog[]>("/catalog/" + id).then((response) => {
      // const productById: Products = {
      //   limit: 0,
      //   products: [response.data],
      //   skip: 0,
      //   total: 0,
      // };
      setProductCatalog(response.data);
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

        productCatalog,
        setProductCatalog,
        searchProductsCatalog,
        getProductsCatalog,
        getProductCatalogById,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProduct = () => React.useContext(ProductsContext);
