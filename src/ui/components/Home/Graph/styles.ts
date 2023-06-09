import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .legend {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 0.6rem;
    .subtitle {
      margin-bottom: 0.9rem;
    }
    span:not(.subtitle) {
      text-align: left;
      align-items: center;
      display: flex;
      margin-top: 0.75rem;
      &::before {
        content: "";
        display: inline-block;
        width: 1.4rem;
        height: 0.9rem;
        margin-right: 0.6rem;
        border-radius: 0.4rem;
      }
      &.produto::before {
        background-color: var(--color-light-blue);
      }
      &.despesas::before {
        background-color: var(--color-light-yellow);
      }
      &.lucro::before {
        background-color: var(--color-light-green);
      }
      &.prejuizo::before {
        background-color: var(--color-light-red);
      }
    }
    h3 {
      margin-top: 0.9rem;
      font-weight: bold;
      font-size: large;
      text-align: center;
    }
  }
`;
