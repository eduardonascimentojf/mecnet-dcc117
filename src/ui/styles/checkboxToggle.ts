import styled from "styled-components";

export const CheckboxToggle = styled.input`
  background-color: transparent;
  /*Adiciona border-box para o input e para os pseudo-elementos*/
  &[type="checkbox"],
  &[type="checkbox"]::after,
  &[type="checkbox"]::before {
    box-sizing: border-box;
  }

  /*Estiliza e remove a aparencia padrão do elemento*/
  &[type="checkbox"] {
    outline: none;
    position: relative;
    z-index: 1;
    margin: 2px;
    padding: 0;
    cursor: pointer;
    width: 48px;
    height: 24px;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  /*cria os elementos before e after*/
  &[type="checkbox"]::before,
  &[type="checkbox"]::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    /*efeito animado*/
    transition: left 0.15s cubic-bezier(0.25, 0.8, 0.25, 0.1),
      transform 0.15s ease-in;
  }

  /*Cor padrão de quando o elemento não esta selecionado*/
  &[type="checkbox"]::before {
    background-color: #ccc;
    width: 100%;
    height: 100%;
    border-radius: 28px;
  }

  /*estiliza para parecer um botão toggle*/
  &[type="checkbox"]::after {
    margin: 2px 0 0 2px;
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  }

  /*troca a cor se estiver com a propriedade checked no html ou o usuário "checar"*/
  &[type="checkbox"]:checked::before {
    background-color: var(--color-light-blue);
  }

  /*muda a posição do botão toggle se estiver checado*/
  &[type="checkbox"]:checked::after {
    left: 24px;
  }

  /*Efeito opcional de quando pressiona o botão*/
  &[type="checkbox"]:not([disabled]):active::after {
    transform: scale(1.15, 0.85);
  }

  /*Se o input tiver com o atributo disabled a cor é alterada*/
  &[type="checkbox"]:disabled::before {
    background-color: #b1b4b7 !important;
  }

  /*Se o input tiver com o atributo disabled a cor é alterada*/
  &[type="checkbox"]:disabled::after {
    background-color: #dcd8d8 !important;
  }
`;
