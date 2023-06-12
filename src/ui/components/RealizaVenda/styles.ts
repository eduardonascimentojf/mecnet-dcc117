import styled from "styled-components";

export const Conteiner = styled.form`
  width: 90%;
  margin: 0px auto;
  h3:not(.notFound) {
    margin: 25px 0px;
    padding-bottom: 8px;
    font-size: larger;
    text-align: center;
    border-bottom: 1px solid var(--color-gray);
  }

  .client {
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      margin: 20px auto;

      fieldset {
        display: flex;
        flex-direction: column;
        width: 40%;
      }
    }
  }
  button {
    margin-left: auto;
    margin-bottom: 25px;
  }
`;

export const ConteinerCard = styled.div`
  .search-header {
    width: 600px;
    margin: 30px 0px;
    margin-left: auto;
  }

  width: 100%;
  .card {
    display: flex;
    margin: 10px 0;
    background-color: rgba(var(--color-gray-rgba), 0.2);
    border: 1px solid var(--color-gray);
    border-radius: 0.6rem;
    align-items: center;
    justify-content: space-between;
    .price,
    .info,
    .remove {
      padding: 10px 20px;
    }
    .name {
      font-weight: 600;
    }

    .info {
      display: flex;
      width: 100%;
      :hover p {
        color: var(--color-light-blue);
      }
    }
    .remove {
      cursor: pointer;
      :hover {
        color: var(--color-red);
      }
    }

    img {
      width: 70px;
      height: 70px;
      border-radius: 0.6rem;
      margin-right: 15px;
    }

    .description {
      word-wrap: break-word;
    }
    fieldset {
      display: flex;
      flex-direction: column;
      input {
        background-color: transparent;
        border: 2px solid var(--color-gray);
      }
    }
    :hover {
      background-color: rgba(var(--color-gray-rgba), 0.6);
    }
  }
`;
