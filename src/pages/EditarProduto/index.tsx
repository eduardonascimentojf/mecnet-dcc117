import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "../NovoUsuario/styles";
import { Button } from "../../ui/components/Button";
import { BsXCircle } from "react-icons/bs";
import { toast } from "react-toastify";
import { apiJava } from "../../data/api";
import { Loading } from "../../ui/components/Loading";
import { ConteinerInput } from "../../ui/components/Input/styles";
import { useState } from "react";
import { useProduct } from "../../data/contexts/product";

interface Props {
  closeModal: () => void;
  id: string;
}
interface IForm {
  name: string;
  description: string;
  price: number;
  brand: string;
  manufacturer: string;
  stock: number;
}

export function EditarProduto(props: Props) {
  const { product, getProductById } = useProduct();
  getProductById(props.id);
  const [isLoading, setIsLoading] = useState(false);
  const element = product?.find((element) => element.id == props.id);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => updateProduct(data);
  async function updateProduct(propsEdit: IForm) {
    setIsLoading(true);
    await apiJava
      .put(`/stock/products/${props.id}`, {
        name: propsEdit.name,
        description: propsEdit.description,
        price: propsEdit.price,
        brand: propsEdit.brand,
        manufacturer: propsEdit.manufacturer,
        stock: propsEdit.stock,
        image: element?.image,
      })
      .then(() => {
        toast.success("Produto atualizado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getProductById(props.id);
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
    props.closeModal();
  }

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text
        text="Atualizar um produto"
        type="h4"
        styled="normal"
        color="white"
      />
      {element == undefined ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs">
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Nome"
                type="span"
                required={true}
              />
              <ConteinerInput
                type="text"
                placeholder="Nome"
                defaultValue={element.name}
                {...register("name", {
                  required: true,
                  minLength: 5,
                })}
              />
              {errors.name && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe o nome completo"
                />
              )}
            </div>
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Descrição"
                type="span"
                required={true}
              />
              <textarea
                defaultValue={element?.description}
                placeholder="Descrição"
                {...register("description", {
                  required: true,
                  minLength: 5,
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
                text="Preço"
                type="span"
                required
              />
              <ConteinerInput
                type="number"
                defaultValue={element?.price.toFixed(2)}
                placeholder="Preço"
                step={0.01}
                {...register("price", {
                  required: true,
                  min: 0,
                })}
              />
              {errors.price && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe um preço valido"
                />
              )}
            </div>
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Marca"
                type="span"
                required
              />
              <ConteinerInput
                type="text"
                placeholder="Marca"
                defaultValue={element?.brand}
                {...register("brand", {
                  minLength: 5,
                })}
              />
              {errors.brand && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe a marca do produto"
                />
              )}
            </div>
            <div className="inputLabel">
              <Text
                color="white"
                styled="italic"
                text="Fabricante"
                type="span"
                required
              />
              <ConteinerInput
                type="text"
                placeholder="Fabricante"
                defaultValue={element?.brand}
                {...register("manufacturer", {
                  minLength: 5,
                })}
              />
              {errors.brand && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe o fabricante do produto"
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
                placeholder="Quantidade"
                defaultValue={element?.stock}
                {...register("stock", {
                  min: 0,
                })}
              />
              {errors.brand && (
                <Text
                  type="errorRequired"
                  color="white"
                  styled="italic"
                  text="Informe a quantidade disponivel do produto"
                />
              )}
            </div>
          </div>
          <Button
            text="Atualizar"
            propsButton={{ type: "submit" }}
            type="info"
            disable={isLoading}
          />
        </form>
      )}
    </Conteiner>
  );
}
