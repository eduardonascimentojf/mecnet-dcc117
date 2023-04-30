import * as S from "./styles";
export interface TextProps {
	text: string;
	styled: "normal" | "italic";
	type: "h1" | "h2" | "h3" | "h4" | "p" | "span";
	color: "white" | "black";
}
export function Text(props: TextProps) {
	return props.type === "h1" ? (
		<S.H1 styled={props.styled} type="h1" text="" color={props.color}>
			{props.text}
		</S.H1>
	) : props.type === "h2" ? (
		<S.H2 styled={props.styled} type="h2" text="" color={props.color}>
			{props.text}
		</S.H2>
	) : props.type === "h3" ? (
		<S.H3 styled={props.styled} type="h3" text="" color={props.color}>
			{props.text}
		</S.H3>
	) : props.type === "h4" ? (
		<S.H4 styled={props.styled} type="h4" text="" color={props.color}>
			{props.text}
		</S.H4>
	) : props.type === "span" ? (
		<S.Span styled={props.styled} type="span" text="" color={props.color}>
			{props.text}
		</S.Span>
	) : (
		<S.P styled={props.styled} type="p" text="" color={props.color}>
			{props.text}
		</S.P>
	);
}
