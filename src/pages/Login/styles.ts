import styled from "styled-components";

export const Conteiner = styled.div`
  background: var(--color-blue);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  input {
    width: 22.5rem;
    margin: 0.3em 0;
  }
  .title {
    font-family: "Lato", sans-serif;
    font-size: 3.3rem;
    font-weight: 700;
    font-style: italic;
    color: var(--color-light-blue);
    .fix {
      color: var(--color-white);
    }
    .info {
      color: var(--color-light-blue);
      font-size: 2.5rem;
      font-weight: 500;
      font-style: italic;
      border-bottom: 0.12rem solid var(--color-light-blue);
    }
  }
  .mecnet {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0;
    img {
      width: 3.8rem;
      height: 3.8rem;
    }
    h2 {
      margin: 1rem 0;
      font-weight: 800;
    }
  }
  form {
    display: flex;
    flex-direction: column;
  }
  button p {
    margin: auto;
  }
`;
