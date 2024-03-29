import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin: 10px 0px;
  width: min-content;
  border: 2px solid var(--color-gray);
  align-items: center;
  border-radius: 20px;
  width: 100%;
  .SearchButton {
    margin-top: 15px;
    margin-right: 5%;
    width: min-content;
    border: 2px solid var(--color-gray);
    display: flex;
    align-items: center;
    align-self: flex-end;
    border-radius: 20px;
    width: 20%;
    input {
      border: none;
      background-color: transparent;
      width: 100%;
      padding: 12px 25px;
    }

    svg {
      padding: 12px 0.5em;
    }
    button {
      background-color: transparent;
      border-radius: 0px 20px 20px 0px;
      border: 0px;
      cursor: pointer;
      &:hover {
        background-color: var(--color-blue);
        svg {
          fill: var(--color-gray);
        }
      }
      svg {
        fill: var(--color-light-blue);
      }
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-self: flex-end;
    margin: 0% 5% 5%;
    & button {
      margin: 0px 0px 0px 25px;
    }
  }
`;

export const TableList = styled.table`
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
  td {
    vertical-align: middle;
  }
  td:nth-child(5) {
    :not(.disable) {
      cursor: pointer;
      :hover {
        background-color: green;
        svg {
          fill: var(--color-white);
        }
      }
    }
  }
  td:nth-child(6) {
    cursor: pointer;
    svg {
      fill: var(--color-red);
    }
    :hover {
      background-color: red;
      svg {
        fill: var(--color-white);
      }
    }
  }
  tbody tr {
    border-bottom: 2px solid var(--color-gray-secondary);
  }

  tbody tr:nth-of-type(even) {
    background-color: var(--color-light-blue);
    color: var(--color-white);
  }
`;

export const Edit = styled.div`
  width: 250px;
  margin: 10px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-white);
  text-align: center;

  > p {
    margin-bottom: 15px;
  }

  input {
    width: 150px;
    margin: 5px 0;
    display: grid;
    background-color: rgb(255, 255, 255);
    border-color: rgb(25, 47, 79);
    outline: none;
    box-sizing: border-box;
    padding: 1em 2em;
    color: black;
    border-radius: 1em;
  }
`;
