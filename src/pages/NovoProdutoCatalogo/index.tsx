import { useForm } from "react-hook-form";
import { Text } from "../../ui/components/Text";
import { Conteiner } from "./styles";
import { apiJava } from "../../data/api";
import { toast } from "react-toastify";
import { ConteinerInput } from "../../ui/components/Input/styles";
import { Button } from "../../ui/components/Button";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../data/contexts/auth";
type FormValues = {
  name: string;
  description: string;
  price: number;
  brand: string;
  manufacturer: string;
  stock: number;
  image: string;
};
export function NovoProdutoCatalogo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = handleSubmit((data) => {
    const imageArray = data.image.split(";");
    apiJava
      .post("/catalog", {
        name: data.name,
        description: data.description,
        price: data.price,
        brand: data.brand,
        manufacturer: data.manufacturer,
        stock: data.stock,
        image: imageArray,
      })
      .then((res) => {
        toast.success("Item adicionado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error(res);
      })
      .catch((e) => {
        console.error(e);
      });
  });
  const { user } = useAuth();
  return (
    <>
      {user?.isAdmin === false ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Conteiner>
          <Text
            text="Adicionar um novo produto no catalogo"
            styled={"normal"}
            type={"h1"}
            color={"black"}
          />
          <form onSubmit={onSubmit}>
            <ConteinerInput
              {...register("name")}
              placeholder="Nome do produto"
              minLength={5}
              required
            />
            {errors?.name && <p>{errors.name.message}</p>}

            <ConteinerInput
              {...register("description")}
              placeholder="Descrição do produto"
              minLength={5}
              required
            />
            {errors?.description && <p>{errors.description.message}</p>}

            <ConteinerInput
              {...register("price")}
              placeholder="preço"
              type="number"
              min={1}
              step={0.01}
              required
            />
            {errors?.price && <p>{errors.price.message}</p>}

            <ConteinerInput
              {...register("brand")}
              placeholder="Marca"
              minLength={3}
              required
            />
            {errors?.brand && <p>{errors.brand.message}</p>}

            <ConteinerInput
              {...register("manufacturer")}
              placeholder="Fabricante"
              minLength={3}
              required
            />
            {errors?.manufacturer && <p>{errors.manufacturer.message}</p>}

            <ConteinerInput
              {...register("stock")}
              placeholder="Quantidade no estoque do fornecedor"
              min={0}
              type="number"
              required
            />
            {errors?.stock && <p>{errors.stock.message}</p>}

            <ConteinerInput
              {...register("image")}
              placeholder="Imagens"
              required
            />
            {errors?.image && <p>{errors.image.message}</p>}

            <Button
              type="confirm"
              text="Criar"
              propsButton={{ type: "submit" }}
            />
          </form>
        </Conteiner>
      )}{" "}
    </>
  );
}
