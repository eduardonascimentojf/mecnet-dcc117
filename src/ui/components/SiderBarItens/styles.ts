import styled from "styled-components";

export const Conteiner = styled.div`
	display: flex;
	padding: 10px;
	margin: 15px;
	align-items: center;
	cursor: pointer;
	border-radius: 5px 5px 15px 15px;
	color: var(--color-white);

	&.isSelected {
		border-bottom: 5px solid var(--color-light-blue);
		border-radius: 5px 5px 15px 15px;
		background: rgb(1, 14, 33);
		background: linear-gradient(
			0deg,
			rgba(1, 14, 33, 1) 0%,
			rgba(25, 47, 79, 0.17128849830948) 100%
		);

		p,
		svg {
			color: var(--color-light-blue);
		}
	}

	:hover {
		border-radius: 5px;
		color: var(--color-blue);
		background: var(--color-white);
		&.isSelected {
			border-radius: 5px 5px 15px 15px;
			background: none;
		}
	}
	p {
		margin-left: 10px;
	}
`;
