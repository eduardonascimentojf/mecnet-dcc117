import styled from "styled-components";

export const Conteiner = styled.div`
  background: var(--color-blue);
  width: 100;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 360px;
    margin: 5px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 1em 2em;
      color: black;
      border-radius: 1em;
    }
  }
  h2 {
    margin: 10px 0;
    font-weight: 800;
  }
`;
