import styled from "styled-components";

export const Conteiner = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;

  transition: all 0.35s ease-in-out;
  &.info {
    background-color: var(--color-white);
    border-color: var(--color-light-blue);
    p {
      color: var(--color-light-blue);
    }
  }
  &.cancel {
    background: transparent;
    border-color: var(--color-red);
    p {
      color: var(--color-white);
    }
  }
  &.confirm {
    background: transparent;
    border-color: var(--color-light-green);
    p {
      color: var(--color-white);
    }
  }
  svg {
    fill: var(--color-light-blue);
    height: 1rem;
    width: 1rem;
    margin-right: 0.9rem;
  }
  :hover {
    &.info {
      background: var(--color-light-blue);
      p {
        color: var(--color-white);
      }
      svg {
        fill: var(--color-white);
      }
    }
    &.cancel {
      background: var(--color-red);
    }
    &.confirm {
      background: var(--color-light-green);
    }
    .loading-spinner {
      border: 0.12rem solid var(--color-light-blue);
      border-top: 0.12rem solid var(--color-gray-dark);
    }
  }
`;
export const Spinner = styled.div`
  margin: auto;

  .loading-spinner {
    width: 0.9rem;
    height: 0.9rem;
    border: 0.12rem solid var(--color-white);
    border-top: 0.12rem solid var(--color-gray-secondary);
    border-radius: 100%;
    animation: spinner 1.5s linear infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
