import styled from "styled-components";
import { colors } from "@colors";

export const SearchContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 84px;
`;

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 83px;
	width: 35%;
	box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
	border: 1px solid white;
	border-radius: 14px;
	padding: 16px 17px 21px 16px;
	&:hover {
		border: 1px solid ${colors.secondary};
	}
	${
		"" /* input {
		padding-left: 20px;
		border: none;
		outline: none;
		font-size: 16px;
		font-weight: 400;
		line-height: 19px;
		color: ${colors.textGray};
		width: 100%;
		font-weight: 600;
	} */
	}
	div {
		display: flex;
		align-items: center;
	}
	@media only screen and (max-width: 1024px) {
		width: 40%;
	}
`;
