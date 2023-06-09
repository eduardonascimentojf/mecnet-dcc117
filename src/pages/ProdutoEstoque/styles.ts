import styled from "styled-components";

export const Conteiner = styled.div`
  .carousel-container {
    height: 250px !important;
    img {
      height: 250px !important;
    }
  }
  h3:not(.notFound) {
    width: 80%;
    text-align: start;
    font-size: larger;
    font-weight: bold;
    margin-bottom: 20px;
    font-weight: 900;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 40px;
    font-weight: 300;
    font-size: large;
    letter-spacing: 3px;
    color: #404040;
    border-bottom: 2px solid var(--color-gray);
    text-align: center;
    margin: 15px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .gridProduct {
    width: 100%;
    margin-left: 50px;
    display: grid;
    grid-template-columns: 450px 450px;
    gap: 20px;
    margin-bottom: 20px;

    img {
      height: 180px;
      object-fit: revert;
    }
    .info {
      margin: auto;

      span {
        font-style: italic;
        letter-spacing: 1px;
        text-decoration: underline;
        margin-left: 10px;
      }
      p:nth-child(3) {
        margin-top: 55px;
        margin-bottom: 10px;
      }
      a {
        font-style: italic;
      }
    }
    .auto {
      width: 80%;
      text-align: start;
      > p:first-child {
        font-size: large;
        font-weight: 600;
        text-align: center;
      }
      .checkbox {
        margin-top: 20px;
        display: flex;
        align-items: center;
        p {
          margin-right: 15px;
        }
      }
      .autoinfo {
        &.close {
          display: none;
        }
        &.open {
          display: block;
        }

        ul li {
          width: 80%;
          display: flex;
          align-items: center;
          margin: 2px auto;
          justify-content: space-between;
          p {
            border: 2px solid var(--color-gray);
            padding: 3px 10px;
          }
          p:last-child {
            width: 150px;
            background-color: var(--color-gray);
            text-align: center;
            border-radius: 0px 5px 5px 0px;
          }
          p:first-child {
            width: 150px;
            border-radius: 5px 0px 0px 5px;
          }
        }
        button {
          margin-top: 15px;
          margin-left: auto;
          margin-right: 10%;
          padding: 0.2em;
          text-align: center;
          p {
            padding: 1px 6px;
          }
        }
      }
    }
  }

  .lastDiv {
    align-items: end;
    justify-self: end;
    display: flex;
  }
`;
