import styled from "styled-components";

export const Conteiner = styled.div`
  background: var(--color-blue);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-weight: 800;
  }
  h2,
  h4 {
    margin: 5px 0;
  }

  svg {
    fill: red;
    height: 25px;
    width: 25px;
    padding: 3px;
    cursor: pointer;
    align-self: flex-end;
    margin-right: 50px;
    margin-top: 25px;
    :hover {
      background-color: red;
      fill: white;
    }
  }
  input {
    width: 150px;
    margin: 5px 0;
  }
  form {
    height: 400px;
    overflow-y: auto;
    margin: 50px;
    width: 500px;
    .inputs {
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      gap: 20px;
      .errorMessage {
        text-align: center;
      }
      .inputLabel {
        width: min-content;
        margin: auto;
        span {
          margin-right: 5px;
        }
      }
      .inputLabel {
        display: flex;
        flex-direction: column;
        input {
          padding: 1em 2em;
          color: black;
          border-radius: 1em;
        }
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      width: 80%;
      margin: 30px auto;
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
  }
`;
