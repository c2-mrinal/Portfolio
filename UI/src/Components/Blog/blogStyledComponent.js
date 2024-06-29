import styled from "styled-components";
export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
	padding: 20px;
`;

export const Card = styled.div`
	background: #fff;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	width: 100%;
	max-width: 300px;
	transition: transform 0.2s;

	&:hover {
		transform: translateY(-10px);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
`;

export const CardHeader = styled.h3`
	margin: 16px;
	font-size: 1.5rem;
	color: #333;
`;

export const CardDescription = styled.p`
	margin: 0 16px 16px;
	color: #666;
`;
