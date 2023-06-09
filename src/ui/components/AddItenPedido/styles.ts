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

  > svg {
    fill: var(--color-white);
    height: 25px;
    width: 25px;
    padding: 3px;
    cursor: pointer;
    align-self: flex-end;
    margin-right: 50px;
    :hover {
      fill: var(--color-red);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .inputLabel {
      width: min-content;
    }
  }
`;
