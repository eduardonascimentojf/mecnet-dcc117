import styled from "styled-components";

export const Conteiner = styled.button`
  cursor: pointer;
  background-color: var(--color-light-blue);
  padding: 1em 2em;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: var(--color-white);
    margin-left: 15px;
  }
  svg {
    fill: var(--color-white);
    height: 16px;
    width: 16px;
  }
  border-radius: 1em;
  border-color: var(--color-light-blue);
  transition: 0.8s;
  :hover {
    background-color: transparent;
    p {
      color: var(--color-light-blue);
    }
    svg {
      fill: var(--color-light-blue);
    }
    border-radius: 1em;
  }
`;
