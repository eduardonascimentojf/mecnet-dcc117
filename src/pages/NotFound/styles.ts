import styled from "styled-components";

export const Conteiner = styled.div`
  position: fixed;
  z-index: 10;
  background: rgba(var(--color-black-rgba), 0.8) !important;
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: space-around;
  top: 0;
  left: 0;
  h1 {
    font-size: 70px;
    word-wrap: break-word;
  }
  img {
    height: 300px;
    width: 300px;
  }
`;
