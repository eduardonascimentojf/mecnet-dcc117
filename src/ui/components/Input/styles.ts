import styled from "styled-components";

export const ConteinerInput = styled.input`
  border: 1px solid var(--color-gray);
  color: var(--color-black);
  padding: 1rem 2rem;
  border-radius: 0.6rem;
  :hover,
  :focus-within {
    box-shadow: var(--color-gray-secondary) 0px 1px 6px 0px;
  }
`;
