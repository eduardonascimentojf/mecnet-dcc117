/* eslint-disable react-hooks/exhaustive-deps */
import { BsFunnel, BsSearch } from "react-icons/bs";
import { Conteiner } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProduct } from "../../../data/contexts/product";

import { useMemo, useState } from "react";
import { FilterProduct } from "../Filters/FilterProduct";
import { Sort } from "../Sort";

type IFormInput = {
  search: string;
};
interface Props {
  type: "catalog" | "product";
}
export function Search(props: Props) {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { searchProducts, searchProductsCatalog } = useProduct();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    Setsearch(data.search);
    if (props.type == "catalog") {
      searchProductsCatalog(data.search, sort);
    } else {
      searchProducts(data.search, sort);
    }
  };
  const [filterIsOpen, setIsOpen] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [sort, setSort] = useState("name,desc");
  const [search, Setsearch] = useState("");
  function openFilter() {
    setIsOpen(true);
  }
  function closeFilter() {
    setIsOpen(false);
  }
  function openSort() {
    if (isOpenSort) {
      setIsOpenSort(false);
    } else setIsOpenSort(true);
  }
  function clodeSort() {
    if (isOpenSort) {
      setIsOpenSort(false);
    }
  }

  useMemo(() => {
    if (props.type == "product") searchProducts(search, sort);
    else searchProductsCatalog(search, sort);
  }, [sort]);

  return (
    <Conteiner onClick={clodeSort}>
      <div className="test">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="search"
            placeholder="Buscar..."
            {...register("search")}
          />
          <button type="submit">
            <BsSearch />
          </button>
        </form>
        <div className="modalFilter" onClick={openFilter}>
          <BsFunnel />
        </div>
      </div>
      <div className="sort" onClick={openSort}>
        <p>Ordernar por:</p>
        <div
          className={
            isOpenSort == true ? "sortModal openSort" : "sortModal closeSort"
          }
        >
          <Sort setSort={setSort} closeModal={clodeSort} />
        </div>
      </div>
      <div
        className={
          filterIsOpen == true ? "filter openFilter" : "filter closeFilter"
        }
      >
        <FilterProduct closeModal={closeFilter} />
      </div>
    </Conteiner>
  );
}
