import styled from "styled-components";

export const Conteiner = styled.div`
  .main {
    display: grid;
    grid-template-columns: 31.2rem 31.2rem;
    padding: 0.65rem;
    gap: 0.65rem;
    justify-content: center;
    margin-bottom: auto;
    .requestsRecent,
    .graph,
    .progressbar,
    .expiresSoon {
      border-radius: 30px;
      border: 0.12rem solid var(--color-gray);
    }
    .requestsRecent {
      height: auto;
      overflow-y: auto;
    }
    .graph,
    .progressbar {
      background-color: var(--color-gray);
    }
    .expiresSoon {
      height: auto;
      overflow-y: auto;
    }
  }
`;
