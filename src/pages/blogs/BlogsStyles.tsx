import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 75px;
  margin-bottom: 42px;
  h1 {
    font-weight: 700;
    font-size: 48px;
  }
`

export const DateWrapper = styled.div`
  color: ${colors.greyText};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
`

export const ArticleHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  img {
    height: 748.36px;
    width: 100%;
  }
`

export const ArticleHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 170px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;
    padding: 20px 84px 20px 0px;
  }
  p {
    color: ${colors.greyText};
    width: 512.31px;
    height: 90px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
  }
`

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 300px;
  height: 70px;
  margin-top: 40px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: ${colors.greyText};
    padding-top: 5px;
  }
`

export const ArticleContent = styled.div`
  padding: 20px 200px 20px 200px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
  }
  p,
  div {
    color: ${colors.greyText};
  }
`
