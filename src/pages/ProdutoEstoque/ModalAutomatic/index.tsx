import { SubmitHandler, useForm } from "react-hook-form";

import { Conteiner } from "./styles";

import { BsXCircle } from "react-icons/bs";

import { toast } from "react-toastify";
import { Text } from "../../../ui/components/Text";
import { apiJava } from "../../../data/api";
import { AutoStock } from "../../../@types";
import { useState } from "react";
import { Button } from "../../../ui/components/Button";

export interface propsSettingsAuto {
  PMin: number | undefined;
  PMax: number | undefined;
  QMax: number | undefined;
  QMin: number | undefined;
}

interface Props {
  closeModal: () => void;
  set_editAuto: React.Dispatch<React.SetStateAction<boolean>>;
  set_settingsAuto: React.Dispatch<
    React.SetStateAction<propsSettingsAuto | undefined>
  >;
  settingsAuto: propsSettingsAuto | undefined;
  id: string;
}

export function ModalAutomatic(props: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<propsSettingsAuto>();

  const onSubmit: SubmitHandler<propsSettingsAuto> = (data) =>
    updateSetting(data);
  async function updateSetting(propsCreate: propsSettingsAuto) {
    setIsLoading(true);
    await apiJava
      .put<AutoStock>("/stock/products/autoStock/" + props.id, {
        automates: true,
        maxPrice: propsCreate.PMax,
        minPrice: propsCreate.PMin,
        maxQuantity: propsCreate.QMax,
        minQuantity: propsCreate.QMin,
      })
      .then((response) => {
        setIsLoading(true);
        props.set_settingsAuto({
          PMin: response.data.minPrice,
          PMax: response.data.maxPrice,
          QMin: response.data.minQuantity,
          QMax: response.data.maxQuantity,
        });
        toast.success("Configurações salvas com sucesso!", {
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
      .catch(() => {
        toast.error("Erro interno!", {
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

  async function disableAutoAux() {
    setIsLoading(true);
    await apiJava
      .put<AutoStock>("/stock/products/autoStock/" + props.id, {
        automates: false,
        maxPrice: props.settingsAuto?.PMax,
        minPrice: props.settingsAuto?.PMin,
        maxQuantity: props.settingsAuto?.QMax,
        minQuantity: props.settingsAuto?.QMin,
      })
      .then((response) => {
        props.set_settingsAuto({
          PMin: response.data.minPrice,
          PMax: response.data.maxPrice,
          QMin: response.data.minQuantity,
          QMax: response.data.maxQuantity,
        });
        toast.success("Desativado com sucesso!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        props.set_editAuto(false);
        props.closeModal();
      })
      .catch(() => {
        toast.error("Erro interno!", {
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

  return (
    <Conteiner>
      <BsXCircle onClick={props.closeModal} />

      <Text text="MECNET" type="h2" styled="normal" color="white" />

      <Text
        text="Automatize o estoque."
        type="h4"
        styled="normal"
        color="white"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="Preço Mínimo"
              type="span"
              required={true}
            />
            <input
              step="0.01"
              type="number"
              min="1"
              placeholder="Preço Mínimo"
              defaultValue={props.settingsAuto?.PMin}
              {...register("PMin", {
                required: true,
                min: 1,
              })}
            />
            {errors.PMin && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="O preço mínimo deve ser maior que 1"
                class_name="errorMessage"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="Preço Máximo"
              type="span"
              required={true}
            />
            <input
              type="number"
              min="1"
              step="0.01"
              placeholder="Preço Máximo"
              defaultValue={props.settingsAuto?.PMax}
              {...register("PMax", {
                required: true,
                min: 1,
              })}
            />
            {errors.PMax?.type && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="O preço máximo deve ser maior que 1"
                class_name="errorMessage"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="Quantidade Miníma"
              type="span"
              required={true}
            />
            <input
              type="number"
              min="0"
              placeholder="Quantidade Miníma"
              defaultValue={props.settingsAuto?.QMin}
              {...register("QMin", {
                required: true,
                min: 1,
                max: 50,
              })}
            />
            {errors.QMin && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="A quantidade miníma deve ser de 1 até 50"
                class_name="errorMessage"
              />
            )}
          </div>
          <div className="inputLabel">
            <Text
              color="white"
              styled="italic"
              text="Quantidade Máxima"
              type="span"
              required={true}
            />
            <input
              type="number"
              min="0"
              placeholder="Quantidade Máxima"
              defaultValue={props.settingsAuto?.QMax}
              {...register("QMax", {
                required: true,
                min: 1,
                max: 50,
              })}
            />
            {errors.QMax && (
              <Text
                type="errorRequired"
                color="white"
                styled="italic"
                text="A quantidade máxima deve ser de 1 até 50"
                class_name="errorMessage"
              />
            )}
          </div>
        </div>
        <div className="buttons">
          <Button
            text="Automatizar"
            type="confirm"
            disable={isLoading}
            propsButton={{ type: "submit" }}
          />
          <Button
            text="Desativar"
            type="cancel"
            disable={isLoading}
            propsButton={{ onClick: () => disableAutoAux() }}
          />
        </div>
      </form>
    </Conteiner>
  );
}
