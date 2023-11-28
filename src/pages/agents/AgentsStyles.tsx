import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'

export const AgentsInnerPageStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 82px;
  width: 100%;
`

export const Header = styled.div`
  margin-bottom: 47px;
  margin-top: 78px;
  h1 {
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }
  p {
    width: 40%;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
  }
`

export const AgentBoxWrapperPage = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 10px 30px 0 ${colors.grey};
  align-items: center;
  padding: 20px 70px 20px 70px;
  width: 100%;
  height: auto;
  border-radius: 26px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
  h2 {
    color: ${colors.primary};
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    padding: 20px 50px 0px 90px;
  }
  img {
    width: 550px;
    height: 650px;
    border-radius: 20px;
  }
  div {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    width: 600px;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.greyText};
    margin-top: 10px;
    padding: 20px 50px 50px 90px;
  }
`

export const AgentInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  div {
    padding: 50px 50px 20px 90px;
  }
  span {
    font-size: 18px;
    font-weight: 100;
    line-height: 20px;
    padding-left: 10px;
  }
`

export const ArticleWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 47px;
`

export const ArticleBy = styled.div`
  margin-top: 140px;
`
