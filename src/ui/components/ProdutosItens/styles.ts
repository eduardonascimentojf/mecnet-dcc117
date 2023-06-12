import styled from "styled-components";

export const Conteiner = styled.div`
  &.indispo {
    img {
      opacity: 0.3;
    }
    p {
      color: var(--color-red);
    }
    > div:hover {
      p {
        color: var(--color-red) !important;
      }
    }
  }
  display: flex;
  flex-direction: column;
  width: 11.25rem;
  height: 18.75rem;
  margin: 0.9rem;
  align-items: center;
  cursor: pointer;
  img {
    width: 11.25rem;
    height: 11.25rem;
    object-fit: fill;
    border-radius: 0.5rem 0.5rem 0rem 0rem;
  }
  > div {
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    border: 1px solid var(--color-gray);
    border-top: none;
    text-align: left;
    padding: 0px 9px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    h4 {
      font-weight: bold;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    span {
      word-break: break-all;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        overflow: hidden;
        white-space: break-spaces;
        height: 100vh;
        z-index: 1;
        background: var(--color-white);
      }
    }
  }
  :hover {
    border-radius: 0.37rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    transform: translateY(-0.5rem);
    box-shadow: 0.5rem 0.75rem 1.5rem var(--color-gray-secondary);
    div {
      border: none;
    }
    p,
    h4 {
      color: var(--color-blue);
    }
  }
`;
