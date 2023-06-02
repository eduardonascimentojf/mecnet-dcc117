import styled from "styled-components";

export const Conteiner = styled.ul`
  width: auto;
  background-color: var(--color-white-secondary);
  border-radius: 25px 25px;
  padding: 8px 15px;
  li {
    border-bottom: 2px solid var(--color-gray-secondary);
    cursor: pointer;
    &:hover {
      color: var(--color-blue);
      border-color: var(--color-blue);
    }
  }
`;
