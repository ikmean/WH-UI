import styled from "styled-components"
import { colors } from "../../lib/colors"

// export interface props {}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
  }
`
export const AgentBoxStyles = styled.div`
  width: 32%;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  img {
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
  }
`
export const ImgWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  border-radius: 60px;
  padding: 12px 22px;
  margin-right: 18px;
  background: ${colors.secondary};
  color: white;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  margin-top: 36px;
  text-align: left;
  padding: 0 40px 30px 40px;
  h2 {
    margin-bottom: 8px;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    span {
      margin-left: 16.7px;
    }
  }
`
export const AgentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 67px;
`
