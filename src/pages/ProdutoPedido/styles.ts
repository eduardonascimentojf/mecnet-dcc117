import styled from "styled-components";

export const Conteiner = styled.div`
  .info_order {
    width: 90%;
    margin: 15px auto;
    display: flex;
    align-items: end;
    flex-direction: column;
    .info_not_receiced,
    .info_receiced {
      display: flex;
      align-items: end;
      flex-direction: column;
      section {
        display: flex;
        align-items: end;
        p + p {
          margin-left: 15px;
        }
      }
    }
  }
`;
