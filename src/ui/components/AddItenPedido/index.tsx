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
import { Loading } from "../Loading";
import { ConteinerInput } from "../Input/styles";

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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    apiJava
      .get<Catalog>("/catalog/" + props.id)
      .then((response) => {
        setProductCatalog(response.data);
      })
      .catch(() => {
        toast.error("Error interno", {
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
      });
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormAdd>();
  const onSubmit: SubmitHandler<IFormAdd> = (data) => addItem(data);
  async function addItem(propsAdd: IFormAdd) {
    setIsLoading(true);
    if (productCatalog != undefined)
      await apiJava
        .post(`/order/orderItems`, {
          productCatalogId: props.id,
          description: propsAdd.description,
          amount: amount,
          fullValue: propsAdd.amount * productCatalog.price,
          price: productCatalog.price,
        })
        .then(() => {
          console.log(propsAdd);
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
    setIsLoading(false);
  }
  const [amount, setAmount] = useState(1);

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text text="Adicionar item" type="h4" styled="normal" color="white" />
      {productCatalog == undefined ? (
        <Loading />
      ) : (
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
                {productCatalog && (
                  <ConteinerInput
                    type="text"
                    defaultValue={productCatalog.name}
                    placeholder="Nome"
                    {...register("description", {
                      required: true,
                    })}
                  />
                )}
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
                  required
                />
                <ConteinerInput
                  type="number"
                  min={1}
                  placeholder="Quantidade"
                  {...register("amount", {
                    required: true,
                    min: 1,
                  })}
                  onChange={(e) => {
                    if (parseInt(e.target.value) > 1)
                      setAmount(parseInt(e.target.value));
                  }}
                />
                {errors.amount && (
                  <Text
                    type="errorRequired"
                    color="white"
                    styled="italic"
                    text="Informe uma quantidade maior que 0"
                  />
                )}
              </div>
              <div className="inputLabel">
                <Text color="white" styled="italic" text="Preço" type="span" />
                {productCatalog && (
                  <ConteinerInput
                    type="text"
                    min={1}
                    step={0.01}
                    placeholder="Preço"
                    readOnly
                    value={auxPrice(productCatalog?.price * amount)}
                    {...register("price", {
                      min: 1,
                    })}
                  />
                )}
              </div>
            </div>
          </div>
          <Button
            text="Adicionar"
            propsButton={{ type: "submit" }}
            disable={isLoading}
            type="confirm"
          />
        </form>
      )}
    </Conteiner>
  );
}
