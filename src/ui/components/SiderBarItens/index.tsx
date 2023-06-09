import React from "react";

import { Conteiner } from "./styles";
import { Text } from "../Text";
type Props = {
  name: string;
  isSelected: boolean;
  icon: React.ReactNode;
  id?: number;
};
export function SiderBarItens({ name, isSelected, icon, id }: Props) {
  return (
    <Conteiner className={isSelected ? "isSelected" : ""} key={id}>
      {icon}
      <Text text={name} color="white" styled="normal" type="p" />
    </Conteiner>
  );
}
