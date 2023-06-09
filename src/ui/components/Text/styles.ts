import styled from "styled-components";
import { TextProps } from ".";

export const H1 = styled.h1<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 0.12rem;
`;
export const H2 = styled.h2<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 0.12rem;
`;
export const H3 = styled.h3<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 0.12rem;
`;
export const H4 = styled.h4<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 0.12rem;
`;
export const Span = styled.span<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  .required {
    color: red;
  }
`;
export const ErrorRequired = styled.span<TextProps>`
  color: var(--color-gray);
  font-style: ${(props) => props.styled};
  text-align: end;
  font-size: smaller;
`;

export const NotFound = styled.h3<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  word-break: break-word;
  width: 31.5rem;
  text-align: center;
  margin: auto;
  font-size: 2.5rem;
`;
export const NotFoundTable = styled.h3<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  word-break: break-word;
  width: 500px;
  text-align: center;
  margin: 30px;
  font-size: 40px;
`;

export const P = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
`;
