import styled from "styled-components";

export const Conteiner = styled.ul`
  width: auto;
  background-color: var(--color-white-secondary);
  border-radius: 25px 25px;
  li {
    &:first-child {
      border-radius: 25px 25px 0px 0px;
    }
    &:last-child {
      border-radius: 0px 0px 25px 25px;
    }
    padding: 8px 15px;
    text-align: center;
    border-bottom: 2px solid var(--color-gray-secondary);
    cursor: pointer;
    &:hover {
      color: var(--color-white);
      border-color: var(--color-light-blue);
      background: var(--color-blue);
    }
  }
`;
