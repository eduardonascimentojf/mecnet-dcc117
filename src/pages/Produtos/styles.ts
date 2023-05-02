import styled from "styled-components";

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: 200px 1100px;
  background: var(--color-white);
  width: 100%;
  gap: 15px;
  min-height: 100vh;
  > h1 {
    text-align: center;
    width: 100%;
    padding-bottom: 5px;
    border-bottom: 2px solid var(--color-gray);
    margin: 15px 0;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    overflow-x: auto;
    border-radius: 15px;
    border: 2px solid var(--color-gray);
    margin: 10px 0;
  }
  .notFound {
    word-break: break-word;
    width: 500px;
    text-align: center;
    position: relative;
    top: 100px;
    font-size: 40px;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
