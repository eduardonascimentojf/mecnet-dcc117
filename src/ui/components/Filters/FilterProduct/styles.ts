import styled from "styled-components";

export const Conteiner = styled.div`
  width: 350px;
  height: 100%;
  border-radius: 25px;
  background-color: var(--color-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;

  > svg {
    fill: white;
    height: 25px;
    width: 25px;
    padding: 3px;
    cursor: pointer;
    align-self: flex-start;
    :hover {
      fill: var(--color-light-blue);
    }
  }
  h4 {
    width: 80%;
    font-weight: bold;
    text-align: center;
    border-top: 1px solid var(--color-gray);
    border-bottom: 1px solid var(--color-gray);
    padding: 5px 0;
    margin: 5px 0;
  }
  ul {
    width: 70%;
    align-items: start;
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      label {
        margin-left: 20px;
        color: var(--color-gray);
      }
      input {
        width: min-content;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    width: 80%;
    button {
      margin: 15px 0;
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
