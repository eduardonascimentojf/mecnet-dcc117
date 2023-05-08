import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin-top: 15px;
    font-weight: bold;
    font-size: large;
    text-align: center;
  }
  .verMais {
    cursor: pointer;
    &:hover {
      color: blue;
      text-decoration: underline;
    }
  }
  table {
    margin: 15px 0;
    border-collapse: collapse;
    width: 90%;
    font-size: 0.9em;
    overflow: hidden;
    text-align: center;

    thead {
      border-top: 2px solid var(--color-blue);
      border-bottom: 2px solid var(--color-blue);
      th {
        font-weight: bold;
      }
    }

    th,
    td {
      padding: 5px;
    }

    tbody tr:last-of-type {
      border-bottom: 2px solid var(--color-blue);
    }

    tbody tr.active-row {
      font-weight: bold;
      color: var(--color-blue);
    }
    p {
      padding: 2px;
      width: fit-content;
      margin: auto;
    }
    .complete p {
      background-color: rgba(var(--color-green-rgba), 0.5);
    }
    .notComplete p {
      background-color: rgba(var(--color-yellow-rgba), 0.5);
    }
  }
`;
