import styled from "styled-components"
import { colors } from "../../lib/colors"

interface props {
  margin?: string
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
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-height: 100%;
  padding: 20px 40px;
  /* background: ${colors.secondary}; */
  background: ${({ color }) =>
    color === "white" ? "white" : color === "red" ? colors.secondary : "black"};
  color: ${({ color }) => (color === "white" ? "black" : "white")};
  border-radius: 12px;
  font-size: 18px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.07);
  cursor: pointer;
  transition: background-color 0.5s ease;
`
