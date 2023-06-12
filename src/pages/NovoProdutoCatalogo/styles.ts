import styled from "styled-components";

export const Conteiner = styled.main`
  width: 80vw;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 100%;
      margin: 5px;
    }
    button {
      width: min-content;
      margin: auto;
      p {
        color: var(--color-black) !important;
      }
    }
  }
`;
