import styled from "styled-components";

export const Conteiner = styled.div`
  .search-header {
    width: 600px;
    margin: 30px 0px;
    margin-left: auto;
  }
  width: 100%;
  .card {
    display: flex;
    margin: 10px;
    border-radius: 5px;

    align-items: center;
    justify-content: space-around;
    img {
      width: 50px;
      height: 50px;
      border-radius: 5px;
    }
    .info {
      width: 60%;
    }
    .description,
    .name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
