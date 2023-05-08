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
  .mecnet {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    img {
      width: 60px;
      height: 60px;
    }
    h2 {
      margin: 10px 0;
      font-weight: 800;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    input {
      padding: 1em 2em;
      color: black;
      border-radius: 1em;
    }
    button {
      transition: all 0.8s ease 0s;
      p {
        margin: 0;
        width: 100%;
      }
      :hover {
        background-color: var(--color-white);
      }
    }
  }
`;
