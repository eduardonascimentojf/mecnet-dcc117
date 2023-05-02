import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: 140px;
  height: 250px;
  background: var(--color-white);
  padding: 10px;
  margin: 15px;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--color-gray);
  padding: 2px;
  img {
    width: 100px;
    height: 140px;
    object-fit: contain;
  }
  div {
    text-align: left;
    margin: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    h4 {
      font-weight: bold;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
  :hover {
    border-radius: 5px;
    background: var(--color-gray);
    border: 2px solid var(--color-blue);
    p,
    h4 {
      color: var(--color-blue);
    }
  }
`;
