import React from "react";

import { Conteiner } from "./styles";
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
      <p>{name}</p>
    </Conteiner>
  );
}
