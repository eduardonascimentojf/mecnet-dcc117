// import { useAuth } from "../../../data/contexts/auth";
// import { ReactNode } from "react";
import { BsFunnel, BsSearch } from "react-icons/bs";
import { Conteiner } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useProduct } from "../../../data/contexts/product";

type IFormInput = {
  search: string;
};
export function Search() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const { searchProducts } = useProduct();
  const onSubmit: SubmitHandler<IFormInput> = (data) =>
    searchProducts(data.search);

  return (
    <Conteiner>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="search" placeholder="Buscar..." {...register("search")} />
        <button type="submit">
          <BsSearch />
        </button>
      </form>
      <div className="modalFilter">
        <BsFunnel />
      </div>
    </Conteiner>
  );
}
