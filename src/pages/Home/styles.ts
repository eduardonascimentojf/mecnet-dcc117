import styled from "styled-components";

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 200px 1100px;
  background: var(--color-white);
  width: 100%;
  gap: 15px;
  min-height: 100vh;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
