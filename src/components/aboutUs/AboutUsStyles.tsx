import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export interface props {
  reverse?: boolean
}
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: ${colors.greyDarker};
  margin-top: 162px;
  padding: 6rem 4rem 160px 4rem;
  gap: 5rem;

  ${media.xs`
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`

export const AboutBoxContainer = styled.div<props>`
  display: flex;
  justify-content: space-between;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : '')};

  ${media.lg`
    flex-direction: column;
    align-items: center;
  `}
`

export const Text = styled.div`
  width: 45%;
  h1 {
    font-size: 32px;
    font-weight: 700;
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

  ${media.lg`
    h1{
      margin-top: 0;
      font-size: 1.75rem;
    }
  `}

  ${media.xs`
    width: 80vw;

    h1{
      font-size: 1.5rem;
    }
  `}
`

export const ImgWrapper = styled.div`
  position: relative;
  padding-top: 160px;
  img {
    border-radius: 12px;
    max-width: 100%;
    width: 492.77px;
  }

  ${media.xs`
    img{
      width: 80vw;
    }
  `}
`

export const InfoBox = styled.div<props>`
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  padding: 58px 64px 53px 64px;
  background: white;
  position: absolute;
  bottom: 60px;
  left: ${({ reverse }) => (reverse ? '' : '-100px')};
  right: ${({ reverse }) => (reverse ? '-100px' : '')};
  h2 {
    color: ${colors.secondary};
    font-size: 63px;
  }
  span {
    font-size: 22px;
  }

  ${media.md`  
    bottom: -3.5rem;
    right: 5rem;
    left: 5rem;
    h2{
      font-size: 3.3rem;
    }
  `}

  ${media.sm`
    h2{
      font-size: 2.75rem;
    }

    span{
      font-size: 1.25rem;
    }
  `}

  ${media.xs`
    right:0;
    left:0;
    
    h2{
      font-size: 2.25rem;
    }
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 47px;
  margin-top: 78px;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    padding: 20px;
    text-align: center;
  }
  p {
    width: 40%;
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: ${colors.greyText};
    margin-bottom: 20px;
  }

  ${media.sm`
    h1{
      font-size: 1.5rem;
    }
    p{
      width: 60%;
    }
  `}
`
export const AboutAgentsWrapper = styled.div`
  ${media.md`
    width: 90vw;
  `}
`
