import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .legend {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    .subtitle {
      margin-bottom: 15px;
    }
    span:not(.subtitle) {
      text-align: left;
      align-items: center;
      display: flex;
      margin-top: 12px;
      &::before {
        content: "";
        display: inline-block;
        width: 23px;
        height: 15px;
        margin-right: 10px;
        border-radius: 7.5px;
      }
      &.produto::before {
        background-color: var(--color-light-blue);
      }
      &.mecanica::before {
        background-color: var(--color-light-yellow);
      }
      &.despesas::before {
        background-color: var(--color-light-red);
      }
      &.lucro::before {
        background-color: var(--color-light-green);
      }
    }
    h3 {
      margin-top: 15px;
      font-weight: bold;
      font-size: large;
      text-align: center;
    }
  }
`;
