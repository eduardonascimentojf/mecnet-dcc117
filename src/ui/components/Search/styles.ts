import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: end;
  justify-content: end;
  margin: 10px 0px;
  .test {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: end;
    margin: 10px 0px;
  }

  .sort {
    > p {
      cursor: pointer;
      text-align: center;
      margin-right: 25px;
      padding: 8px 15px;
      background-color: var(--color-white-secondary);
      border-radius: 25px 25px;
      :hover {
        background-color: var(--color-blue);
        color: var(--color-white);
      }
    }

    .sortModal {
      position: absolute;
      margin-top: 30px;
      width: max-content;
      transform: translateX(-50%);
      &.closeSort {
        display: none;
      }
    }
  }

  .filter {
    min-height: 100vh;
    top: 0;
    margin: 10px;

    position: absolute;
    &.closeFilter {
      display: none;
    }
  }

  input {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 12px 25px;
  }
  form {
    width: min-content;
    border: 2px solid var(--color-gray);
    display: flex;
    align-items: center;
    border-radius: 20px;
    width: 40%;

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
  .modalFilter {
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 2px solid var(--color-gray);
    display: flex;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
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
  .lastItem > div {
    justify-content: end;
    flex-direction: row-reverse;
    p {
      margin-right: 10px;
    }
  }
`;
