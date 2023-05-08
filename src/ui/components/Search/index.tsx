import { BsFunnel, BsSearch } from "react-icons/bs";
import { Conteiner } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProduct } from "../../../data/contexts/product";

import { useState } from "react";
import { FilterProduct } from "../Filters/FilterProduct";
type IFormInput = {
  search: string;
};
export function Search() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { searchProducts } = useProduct();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    searchProducts(data.search);

  const [filterIsOpen, setIsOpen] = useState(false);

  function openFilter() {
    setIsOpen(true);
  }
  function closeFilter() {
    setIsOpen(false);
  }

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" placeholder="Buscar..." {...register("search")} />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      <div className="modalFilter" onClick={openFilter}>
        <BsFunnel />
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
