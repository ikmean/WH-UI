import styled from "styled-components";
import { colors } from "../../lib/colors";

interface props {
  margin?: string;
}

export const PostButtonWrapper = styled.div<props>`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 10px;
  padding: 15px 26px;
  margin: ${({ margin }) => margin && margin};
  width: fit-content;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-height: 100%;
  padding: 20px 40px;
  background: ${colors.secondary};
  color: ${colors.white};
  border-radius: 12px;
  font-size: 18px;
`;
