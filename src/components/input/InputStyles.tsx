import styled from "styled-components";
import { colors } from "@colors";

export const InputStyles = styled.div`
	input {
		display: flex;

		border-radius: 12px;
		background: ${colors.grey};

		color: ${colors.greyText};
		font-size: 18px;
		font-weight: 600;
		outline: none;
	}
`;
