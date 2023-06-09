import styled from "styled-components";

const Conteiner = styled.div`
  position: fixed;
  z-index: 10;
  background: rgba(var(--color-black-rgba), 0.8);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  .logo svg {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
    width: 100px;
    height: 100px;
    fill: var(--color-light-blue);
  }
  .logo svg:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.mecnet svg:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @keyframes logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo svg {
      animation: logo-spin infinite 20s linear;
    }
  }
`;

import { BsTools } from "react-icons/bs";
export function Loading() {
  return (
    <Conteiner>
      <div className="logo mecnet">{<BsTools />}</div>
    </Conteiner>
  );
}
