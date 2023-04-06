import styled from "styled-components"
import { colors } from "../../lib/colors"

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 113px;
    font-size: 48px;
  }
  p {
    width: 40%;
    color: ${colors.greyText};
  }
`
export const Images = styled.div`
  img {
    margin-right: 40px;
    &:last-child {
      position: absolute;
    }
  }
`
export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 109px;
`
