import styled from "styled-components";
import { colors } from "@colors";

export const Wrapper = styled.div`
	margin-top: 166px;
	padding-bottom: 100px;
	width: 100%;
	padding-left: 10%;
	h1 {
		font-size: 32px;
	}
`;
export const Header = styled.div`
	width: 100%;
	margin-bottom: 41px;
`;

export const BoxContainer = styled.div<{ type: any }>`
	display: ${({ type }) => type === "readMoreSmall" && "flex"};
	height: ${({ type }) => type === "readMoreSmall" && "179px"};
	width: ${({ type }) => type === "default" && "32%"};
	width: ${({ type }) => type === "description" && "40%"};
	margin-right: ${({ type }) => type === "default" && "2%"};
	margin-right: ${({ type }) => type === "description" && "5%"};
	flex-shrink: 0;
	box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
	border-radius: 26px;
	:nth-child(3) {
		margin-right: 0;
	}
	img {
		border-top-left-radius: 26px;
		border-top-right-radius: ${({ type }) =>
			type !== "readMoreSmall" && "26px"};
		border-bottom-left-radius: ${({ type }) =>
			type === "readMoreSmall" && "26px"};
		width: 100%;
		height: ${({ type }) => type === "readMoreSmall" && "100%"};
		height: ${({ type }) => type === "description" && "377px"};
		max-height: 100%;
	}
	h2 {
		font-size: 22px;
		line-height: 30px;
	}
	p {
		color: ${colors.greyText};
		font-size: 18px;
		margin-top: 16px;
		padding-bottom: 56px;
	}
	span {
		display: inline-block;
		/* color: red; */ //TODO
		margin-right: 13px;
		margin-top: 21px;
		font-size: 18px;
	}
`;

export const Info = styled.div`
	margin-top: 31px;
	padding: 0 25px;
`;
export const InfoFooter = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${colors.greyText};
	padding-bottom: 33px;
`;
export const Line = styled.div`
	height: 1px;
	width: 100%;
	background: ${colors.border};
	margin: 25px 0;
`;

export const BoxWrapper = styled.div`
	display: flex;
	overflow: hidden;
	padding-bottom: 15px; // ქვემოთ შედოუ იჭრებოდა
`;
