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
    fill: var(--color-white);
    height: 25px;
    width: 25px;
    padding: 3px;
    cursor: pointer;
    align-self: flex-end;
    :hover {
      fill: var(--color-red);
    }
  }
  h2 {
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }
`;
