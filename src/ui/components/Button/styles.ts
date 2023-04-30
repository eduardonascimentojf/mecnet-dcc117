import styled from "styled-components";

export const Conteiner = styled.button`
	width: 360px;
	background-color: var(--color-light-blue);
	padding: 1em 2em;
	margin-top: 20px;
	p {
		color: var(--color-white);
	}
	border-radius: 1em;
	transition: 0.8s;
	:hover {
		background-color: var(--color-white);
		border-color: (--color-light-blue);
		p {
			color: var(--color-light-blue);
		}
		border-radius: 1em;
	}
`;
