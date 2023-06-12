import { Conteiner, ConteinerCard } from "./styles";
import { Text } from "../Text";
import { ConteinerInput } from "../Input/styles";
import { useEffect, useState } from "react";
import { apiJava } from "../../../data/api";
import { Product, SaleProducts } from "../../../@types";
import { CardSearchOption } from "../CardSearchOption";
import { useForm } from "react-hook-form";
import { Button } from "../Button";
import { BsCartCheck, BsTrash3 } from "react-icons/bs";
import { useProduct } from "../../../data/contexts/product";
import { Link } from "react-router-dom";
import { auxPrice } from "../../../helpers";
import { toast } from "react-toastify";

type FormValues = {
  client: string;
  cpfClient: string;
  saleProducts: SaleProducts[];
};
export function RealizaVenda() {
  const { productVenda, setProductVenda } = useProduct();
  const [isLoading, setIsLoading] = useState(false);
  function remove(id: string) {
    const index = productVenda.map((e) => e.id).indexOf(id);
    productVenda.splice(index, 1);
    setProductVenda((productVenda) => [...productVenda]);
  }

  const [data, setData] = useState<Product[]>([]);
  useEffect(() => {
    apiJava
      .get<Product[]>("/stock/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [data]);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data: FormValues) => {
    const teste: SaleProducts[] = [];
    data.saleProducts.map((e) => teste.push(e));
    setData([]);
    setIsLoading(true);
    apiJava
      .post("/sale", data)
      .then(() => {
        toast.success("Venda realizada com sucesso", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((e) => {
        toast.error("Erro interno: Não foi possivel concluir a venda", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(e);
      });
    setProductVenda([]);
    setIsLoading(false);
  });

  return (
    <Conteiner onSubmit={onSubmit}>
      <div className="client">
        <Text color="black" styled="normal" text="Dados do cliente" type="h3" />
        <div>
          <fieldset>
            <Text
              text="Nome do Coliente"
              type="span"
              required
              color="black"
              styled="italic"
            />
            <ConteinerInput
              type="text"
              placeholder="Nome do cliente"
              {...register("client", {
                required: true,
                minLength: 5,
                maxLength: 40,
              })}
            />
            {errors.client && (
              <Text
                type="errorRequired"
                color="black"
                styled="italic"
                text="Informe o nome do cliente"
              />
            )}
          </fieldset>
          <fieldset>
            <Text
              text="CPF do Coliente"
              type="span"
              required
              color="black"
              styled="italic"
            />
            <ConteinerInput
              type="text"
              placeholder="CPF do cliente"
              {...register("cpfClient", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors.cpfClient && (
              <Text
                type="errorRequired"
                color="black"
                styled="italic"
                text="Informe um CPF Valido com 11 digitos"
              />
            )}
          </fieldset>
        </div>
      </div>

      <Text color="black" styled="normal" text="Adicionar Produtos" type="h3" />
      <CardSearchOption data={data} />
      <ConteinerCard>
        {productVenda.map((item, i) => (
          <div className="card" key={i}>
            <Link to={"/estoque/" + item.id} className="info" target="_blank">
              <img src={item.image[0]} alt={item.name} />
              <div>
                <Text
                  text={item.name}
                  styled="normal"
                  type="p"
                  color="black"
                  class_name="name"
                />

                <Text
                  text={item.description}
                  styled="normal"
                  type="p"
                  color="black"
                  class_name="description"
                />
              </div>
            </Link>
            <div className="price">
              <Text
                text={"Preço: R$" + auxPrice(item.price)}
                styled="normal"
                type="p"
                color="black"
              />
              <ConteinerInput
                type="hidden"
                defaultValue={item.id}
                {...register(`saleProducts.${i}.id_productStock`, {
                  required: true,
                })}
              />
              {errors.saleProducts?.length == 0 && (
                <Text
                  type="errorRequired"
                  color="black"
                  styled="italic"
                  text="Adicione um produto"
                />
              )}
              <ConteinerInput
                type="hidden"
                defaultValue={item.price}
                {...register(`saleProducts.${i}.price`)}
              />
              <fieldset>
                <Text
                  text={"Quantidade"}
                  styled="italic"
                  type="span"
                  required
                  color="black"
                />

                <ConteinerInput
                  type="number"
                  max={item.stock}
                  min={1}
                  defaultValue={1}
                  {...register(`saleProducts.${i}.amount`, { required: true })}
                />
              </fieldset>
            </div>
            <div className="remove">
              <p
                onClick={() => {
                  remove(item.id);
                  reset();
                }}
              >
                <BsTrash3 />
              </p>
            </div>
          </div>
        ))}
      </ConteinerCard>
      {productVenda.length > 0 ? (
        <Button
          type="info"
          icon={<BsCartCheck />}
          text="Vender"
          propsButton={{ type: "submit" }}
          disable={isLoading}
        />
      ) : (
        <Text
          color="black"
          styled="normal"
          text="Nenhum produto Adicionado!"
          type="notFound"
          class_name="notFound"
        />
      )}
    </Conteiner>
  );
}
