import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 75px;
  margin-bottom: 42px;
  h1 {
    font-weight: 700;
    font-size: 48px;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }

  ${media.sm`
    h1{
      font-size: 1.75rem;
    }
  `}

  ${media.xs`
    h1{
      font-size: 1.5rem;
    }
  `}

  ${media.lg`
    justify-content: center;
  `}
`

export const SearchWrapper = styled.div`
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
`

export const ArticleListWrapper = styled.div`
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 1s forwards;
  margin-bottom: 100px;

  ${media.lg`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

export const DateWrapper = styled.div`
  color: ${colors.greyText};
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.5s forwards;
`

export const ArticleHeaderWrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
  img {
    width: 100%;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1.6s ease 1s forwards;
  }

  ${media.md`
    flex-direction: column;
    align-items: center;
  `}

  ${media.xs`
    padding: 2rem;
  `}
`

export const ArticleHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 120px;
  margin-left: 20px;
  h1 {
    font-size: 48px;
    font-weight: 700;
    line-height: 60px;
    letter-spacing: 0px;
    text-align: left;
    padding: 20px 84px 20px 0px;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1.6s ease 0.7s forwards;
  }
  p {
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1.6s ease 0.9s forwards;
  }

  ${media.sm`
    h1{
      font-size: 2.5rem;
    }
  `}

  ${media.xs`
    h1{
      font-size: 2.05rem;
    }
  `}
`

export const Author = styled.div`
  animation: ${slideAnimation('100px')} 1.6s ease 0.9s forwards;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  width: 300px;
  height: 70px;
  margin-top: 40px;
  opacity: 0;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  span {
    color: ${colors.greyText};
    padding-top: 5px;
  }
  &:hover {
    cursor: pointer;
    h2 {
      color: ${colors.secondary};
    }
  }
`

export const AuthorBigger = styled.div`
  display: flex;
  width: 838px;
  border-radius: 26px;
  box-shadow: 0 10px 30px 0 ${colors.grey};
  align-items: center;
  padding: 20px 70px 20px 70px;
  transition: transform 0.3s ease-in-out;
  img {
    width: 171.54px;
    height: 171.54px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    padding-left: 30px;
  }
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
  }
  span {
    color: ${colors.secondary};
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: ${colors.greyText};
    margin-top: 10px;
  }
  &:hover {
    cursor: pointer;
    transform: translate(0, -3px);
    h2 {
      color: ${colors.secondary};
    }
  }

  ${media.sm`
    width: 100vw;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  `}

  ${media.xs`
    img{
      height: 7rem;
      width: 7rem;
    }
  `}
`

export const ArticleContent = styled.div`
  padding: 20px 200px 20px 200px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 100px;
    padding-bottom: 20px;
  }
  p {
    color: ${colors.greyText};
    height: fit-content;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
  h3 {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0px;
    text-align: left;
    padding: 40px 0px 20px 0px;
  }
  img {
    width: 100%;
    padding: 20px 0px 20px 0px;
  }

  ${media.md`
    padding: 0 1.5rem;
  `}

  ${media.sm`
    h2{
      font-size: 1.75rem;
    }
    h3{
      font-size: 1.25rem;
    }
  `}

  ${media.xs`
    padding: 0 1rem;
    h2{
      font-size: 1.44rem;
    }
  `}
`
