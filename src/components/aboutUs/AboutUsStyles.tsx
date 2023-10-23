import styled from "styled-components"
import { colors } from "@colors"

export interface props {
  reverse?: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.greyDarker};
  margin-top: 162px;
  padding-bottom: 160px;
`

export const AboutBoxContainer = styled.div<props>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "")};
`
export const Text = styled.div`
  width: 40%;
  h1 {
    font-size: 32px;
    line-height: 44px;
    margin-top: 330px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
    margin-top: 40px;
    width: 80%;
  }
`
export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 160px;
  img {
    border-radius: 12px;
  }
`
export const InfoBox = styled.div<props>`
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  padding: 58px 64px 53px 64px;
  background: white;
  position: absolute;
  bottom: 60px;
  left: ${({ reverse }) => (reverse ? "" : "-100px")};
  right: ${({ reverse }) => (reverse ? "-100px" : "")};
  h2 {
    color: ${colors.secondary};
    font-size: 63px;
  }
  span {
    font-size: 22px;
  }
`
