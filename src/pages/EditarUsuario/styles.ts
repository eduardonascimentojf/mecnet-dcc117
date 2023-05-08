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
    :hover {
      background-color: red;
      fill: white;
    }
  }
  input {
    width: 360px;
    margin: 5px 0;
  }
  form {
    height: 400px;
    overflow-y: auto;
    width: 900px;
    .inputs {
      display: grid;
      grid-template-columns: auto auto;
      gap: 20px;

      .inputLabel {
        width: min-content;
        span {
          margin-right: 5px;
        }
      }

      .isAdm {
        display: flex;
        align-content: center;
        span {
          margin-right: 15px;
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
    button {
      margin-bottom: 40px;
      align-self: flex-end;
      :hover {
        background-color: var(--color-white);
      }
    }
  }
`;
