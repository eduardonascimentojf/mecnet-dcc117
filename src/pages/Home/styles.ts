import styled from "styled-components";

export const Conteiner = styled.div`
  .main {
    display: grid;
    grid-template-columns: 500px 500px;
    /* grid-template-rows: auto auto; */
    padding: 10px;
    gap: 10px;
    justify-content: center;
    margin: auto 0;
    .requestsRecent,
    .graph,
    .progressbar,
    .expiresSoon {
      border-radius: 30px;
      border: 2px solid var(--color-gray);
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
