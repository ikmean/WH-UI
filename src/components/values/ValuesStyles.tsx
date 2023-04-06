import styled from "styled-components"
import { colors } from "../../lib/colors"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  flex-direction: column;
  background: ${colors.grey};
  width: 100%;
  margin-top: 160px;
  h1 {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 13px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
  }
`

export const Left = styled.div`
  width: 45%;
`
export const Right = styled.div`
  width: 45%;
  padding-top: 160px;
  padding-bottom: 124px;
`
export const Header = styled.div`
  margin-bottom: 70px;
  margin-top: 164px;
  width: 70%;
`

export const ValueBoxWrapper = styled.div`
  display: flex;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  background: white;
  padding: 49px 60px 70px 38px;
  margin-bottom: 36px;
  h2 {
    text-transform: capitalize;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107.09px;
  height: 107.09px;
  background: rgba(248, 87, 87, 0.12);
  border-radius: 50%;
  margin-right: 22px;
  flex-shrink: 0;
`
