import styled from "styled-components";

export const Conteiner = styled.div`
  margin: auto;
  width: 400px;
  height: 200px;
  background-color: var(--color-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > svg {
    fill: red;
    height: 25px;
    width: 25px;
    padding: 3px;
    cursor: pointer;
    align-self: flex-end;
    :hover {
      background-color: red;
      fill: white;
    }
  }
  h2 {
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 80%;
    button {
      cursor: pointer;
      background-color: var(--color-light-blue);
      padding: 1em 2em;
      border-radius: 1em;
      border: 1px solid var(--color-white);
      color: var(--color-white);

      &.confirm {
        background-color: var(--color-green);
      }
      &.cancel {
        background-color: var(--color-red);
      }

      :hover {
        background-color: var(--color-white);
        &.confirm {
          color: var(--color-green);
        }
        &.cancel {
          color: var(--color-red);
        }
      }
    }
  }
`;
