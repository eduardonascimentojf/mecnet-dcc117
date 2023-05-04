import styled from "styled-components";

export const Conteiner = styled.table`
  border-collapse: collapse;
  width: 90%;
  margin: 40px 5px;
  font-size: 0.9em;
  min-width: 400px;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;

  thead tr {
    background-color: var(--color-blue);
    color: var(--color-white);
    font-weight: bold;
  }

  th,
  td {
    padding: 12px 15px;
  }
  th {
    border-left: 2px solid var(--color-white);
    &:first-child {
      border: none;
    }
  }
  td {
    border-left: 2px solid var(--color-gray-secondary);
    &:first-child {
      border: none;
    }
  }
  td:nth-child(5) {
    svg {
      fill: var(--color-light-red);
    }
  }
  td:nth-child(4) {
    svg {
      fill: var(--color-light-green);
    }
  }

  tbody tr {
    border-bottom: 2px solid var(--color-gray-secondary);
  }

  tbody tr:nth-of-type(even) {
    background-color: var(--color-white-secondary);
    &td {
      border-left: 2px solid var(--color-gray-secondary);
    }
  }

  tbody tr:last-of-type {
    border-bottom: 2px solid var(--color-blue);
  }

  tbody tr.active-row {
    font-weight: bold;
    color: var(--color-blue);
  }
  input {
    pointer-events: none;
  }
`;
