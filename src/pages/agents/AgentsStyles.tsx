import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const AgentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`
export const AgentsInnerPageStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 82px;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
    color: ${colors.greyText};
  }

  ${media.sm`
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    p{
      width: 80%;
    }
  `}
`

export const AgentBoxWrapperPage = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 10px 30px #e0e0e0;
  background: none;
  align-items: center;
  width: 90%;
  height: auto;
  border-radius: 26px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
  h2 {
    color: ${colors.primary};
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
  }
  img {
    width: 550px;
    height: 650px;
    border-radius: 20px;
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

  ${media.lg`
    flex-direction: column;
    width: 60vw;

    img{
      width: 100%;
      height: auto;
    }
  `}

  ${media.md`
    width: 80vw;
  `}

  ${media.sm`
    width: 90vw;
  `}
`

export const AgentBoxInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  gap: 3rem;

  ${media.lg`
    width: 100%;
    align-items: flex-start;
  `}

  ${media.sm`
    h2{
      font-size: 1.75rem;
    }
  `}

  ${media.xs`
    padding: 1rem;

    h2{
      font-size: 1.5rem;
    }

    p{
      font-size: 1rem;
    }
  `}
`

export const AgentInfo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;

  span {
    font-size: 18px;
    font-weight: 100;
    line-height: 20px;
  }

  ${media.sm`
    flex-direction: column;
  `}

  ${media.xs`
    flex-direction: column;
    span{
      font-size: 0.8rem;
    }
  `}
`

export const ArticleWrapper = styled.div`
  display: grid;
  margin-top: 47px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 1rem;

  ${media.lg`
    grid-template-columns: repeat(2, 1fr);

  `}
  ${media.md`
    grid-template-columns: repeat(1, 1fr);
    
  `}
`

export const ContentBy = styled.div`
  margin-top: 140px;

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
`
