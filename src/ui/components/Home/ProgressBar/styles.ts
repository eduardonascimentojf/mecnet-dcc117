import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
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
  .progress_bar {
    width: 200px;
    height: 200px;
    align-self: end;
    margin-right: 10%;
  }
`;
