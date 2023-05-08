import { SubmitHandler, useForm } from "react-hook-form";

import { Conteiner } from "./styles";

import { BsXCircle } from "react-icons/bs";

import { toast } from "react-toastify";
import { Text } from "../../../ui/components/Text";

export interface propsSettingsAuto {
  PMin: number;
  PMax: number;
  QMin: number;
  QMax: number;
}

interface Props {
  closeModal: () => void;
  set_editAuto: React.Dispatch<React.SetStateAction<boolean>>;
  set_settingsAuto: React.Dispatch<React.SetStateAction<propsSettingsAuto>>;
  settingsAuto: propsSettingsAuto;
}

export function ModalAutomatic(props: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<propsSettingsAuto>();

  const onSubmit: SubmitHandler<propsSettingsAuto> = (data) =>
    updateSetting(data);
  function updateSetting(propsCreate: propsSettingsAuto) {
    props.set_settingsAuto(propsCreate);
    props.closeModal();
    toast.success("Configurações salvas com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function disableAuto() {
    props.closeModal();
    props.set_editAuto(false);
    toast.success("Desativado com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
              type="number"
              min="0"
              placeholder="Preço Mínimo"
              defaultValue={props.settingsAuto.PMin}
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
              min="0"
              placeholder="Preço Máximo"
              defaultValue={props.settingsAuto.PMax}
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
            />
            <input
              type="number"
              min="0"
              placeholder="Quantidade Miníma"
              defaultValue={props.settingsAuto.QMin}
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
              defaultValue={props.settingsAuto.QMax}
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
          <button className="confirm" type="submit">
            Automatizar
          </button>
          <button onClick={disableAuto} className="cancel">
            Desativar
          </button>
        </div>
      </form>
    </Conteiner>
  );
}
