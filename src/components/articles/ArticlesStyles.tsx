import styled from "styled-components"
import { colors } from "../../lib/colors"

export const Wrapper = styled.div`
  margin-top: 166px;
  padding-bottom: 160px;
  width: 100%;
  padding-left: 10%;
  h1 {
    font-size: 32px;
  }
`
export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
`

export const BoxContainer = styled.div`
  width: 32%;
  margin-right: 2%;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  :nth-child(3) {
    margin-right: 0;
  }
  img {
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    width: 100%;
  }
  h2 {
    font-size: 22px;
    line-height: 30px;
  }
`

export const Info = styled.div`
  margin-top: 31px;
  padding: 0 25px;
`
export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.greyText};
  padding-bottom: 33px;
`
export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 25px 0;
`

export const BoxWrapper = styled.div`
  display: flex;
  overflow: hidden;
`
