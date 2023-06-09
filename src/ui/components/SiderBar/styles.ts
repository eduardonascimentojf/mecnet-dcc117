import styled from "styled-components";

export const Conteiner = styled.div`
  background-color: var(--color-blue);
  border-radius: 0rem 0.9rem 0.9rem 0rem;
  height: 100%;
  width: 12.5rem;
  img {
    height: 3.1rem;
    margin: 2.5rem auto;
    align-items: center;
    display: flex;
  }
  ul {
    height: 100vh;
    display: flex;
    flex-direction: column;
    -moz-box-pack: justify;
  }
  .lastItem {
    width: 12.5rem;
    align-self: flex-end;
    margin: auto auto 0.9rem auto;
    div {
      justify-content: end;
      flex-direction: row-reverse;

      p {
        margin-right: 0.6rem;
      }
    }
  }
`;
