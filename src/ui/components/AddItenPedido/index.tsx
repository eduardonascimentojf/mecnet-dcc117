/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Catalog } from "../../../@types";
import { apiJava } from "../../../data/api";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Conteiner } from "./styles";
import { BsXCircle } from "react-icons/bs";
import { Text } from "../Text";
import { Button } from "../Button";
import { auxPrice } from "../../../helpers";

type IFormAdd = {
  productCatalogId: string;
  description: string;
  amount: number;
  fullValue: number;
  price: number;
};
interface Props {
  closeModal: () => void;
  id: string;
}

export function AddItenPedido(props: Props) {
  const [productCatalog, setProductCatalog] = useState<Catalog>();

  useEffect(() => {
    apiJava
      .get("/catalog/" + props.id)
      .then((response) => {
        setProductCatalog(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormAdd>();
  const onSubmit: SubmitHandler<IFormAdd> = (data) => addItem(data);
  async function addItem(propsAdd: IFormAdd) {
    if (productCatalog == undefined) return;
    await apiJava
      .post(`/order/orderItems`, {
        productCatalogId: props.id,
        description: propsAdd.description,
        amount: propsAdd.amount,
        fullValue: propsAdd.amount * productCatalog.price,
        price: productCatalog.price,
      })
      .then(() => {
        toast.success("Produto adicionado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        props.closeModal();
      })
      .catch((err) => {
        toast.error(err.response.data, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  }

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text text="Adicionar item" type="h4" styled="normal" color="white" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="inputLabel">
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Nome"
                type="span"
                required={true}
              />
              <input
                type="text"
                defaultValue={productCatalog?.name}
                placeholder="Nome"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description?.type === "required" && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe uma descrição"
                />
              )}
            </div>
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Quantidade"
                type="span"
              />
              <input
                type="number"
                min={1}
                placeholder="Quantidade"
                {...register("amount", {
                  required: true,
                  min: 1,
                })}
              />
              {errors.amount && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="A quantidade deve ser maior que 0"
                />
              )}
            </div>
            <div className="inputLabel">
              <Text color="white" styled="italic" text="Preço" type="span" />
              <input
                type="number"
                min={1}
                step={0.01}
                placeholder="Preço"
                disabled
                defaultValue={auxPrice(productCatalog?.price)}
                {...register("price", {
                  min: 1,
                })}
              />
            </div>
          </div>
        </div>
        <Button text="Adicionar" propsButton={{ type: "submit" }} />
      </form>
    </Conteiner>
  );
}
