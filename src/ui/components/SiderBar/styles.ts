import styled from "styled-components";

export const Conteiner = styled.div`
	background-color: var(--color-blue);
	border-radius: 0px 15px 15px 0px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100vh;
	width: 200px;
	img {
		height: 50px;
		margin: 40px auto;
		align-items: center;
		display: flex;
	}
	.lastItem > div {
		justify-content: end;
		flex-direction: row-reverse;
		p {
			margin-right: 10px;
		}
	}
`;
