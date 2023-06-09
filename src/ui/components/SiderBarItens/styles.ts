import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  padding: 10px;
  margin: 0.9rem 0.9rem 0rem 0.9rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.31rem;
  color: var(--color-white);

  &.isSelected {
    border-bottom: 0.31rem solid var(--color-light-blue);
    border-radius: 0.31rem 0.31rem 0.9rem 0.9rem;
    background: rgb(1, 14, 33);
    background: linear-gradient(
      0deg,
      rgba(1, 14, 33, 1) 0%,
      rgba(25, 47, 79, 0.17128849830948) 100%
    );

    p,
    svg {
      color: var(--color-light-blue);
    }
  }

  :hover {
    p,
    svg {
      color: var(--color-light-blue);
    }

    background: var(--color-white);
    &.isSelected {
      border-radius: 0.31rem 0.31rem 0.9rem 0.9rem;
      background: none;
    }
  }
  p {
    margin-left: 10px;
  }
`;
