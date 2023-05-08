import styled from "styled-components";
import { TextProps } from ".";

export const H1 = styled.h1<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 2px;
`;
export const H2 = styled.h2<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 2px;
`;
export const H3 = styled.h3<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 2px;
`;
export const H4 = styled.h4<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
  letter-spacing: 2px;
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
export const P = styled.p<TextProps>`
  color: ${(props) => props.color};
  font-style: ${(props) => props.styled};
`;
