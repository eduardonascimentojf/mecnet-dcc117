import styled from "styled-components";

export const ConteinerTetextarea = styled.textarea`
  font-size: 0.8rem;
  letter-spacing: 1px;
  padding: 10px;
  line-height: 1.5;
  border-radius: 5px;
  border: 1px solid var(--color-gray);
  box-shadow: 1px 1px 1px var(--color-gray-secondary);
  width: 300px;
  outline: none;
  :hover,
  :focus-within {
    box-shadow: var(--color-gray-secondary) 0px 1px 6px 0px;
  }
`;
