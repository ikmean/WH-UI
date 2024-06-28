import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.greyDarker};
  margin-top: 159px;
  padding: 159px 0 360px 0;
  width: 100%;
  img {
    border-radius: 12px;
  }

  ${media.lg`
    flex-direction: column;
    align-items: center;
  `}

  ${media.sm`
    flex-direction: column;
    align-items: center;
    padding: 4rem 0 9rem 0;
  `}
`
export const TextWrapper = styled.div`
  width: 45%;
  margin-right: 5%;
  h1 {
    line-height: 44px;
    margin-bottom: 26px;
    margin-top: 200px;
    margin-right: 20%;
    font-size: 32px;
  }
  p {
    line-height: 30px;
    font-size: 18px;
    color: ${colors.greyText};
    width: 75%;
    margin-bottom: 36px;
  }

  ${media.lg`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin: 0;
    margin-bottom: 4rem;
    width: 80%;
    h1{
      margin: 0;
      width: 100%;
    }
    p{
      width: 60%;
    }
  `}

  ${media.md`
      h1{
        font-size: 1.75rem;
      }
    `}

${media.xs`
      h1{
        font-size: 1.5rem;
        width: 100%;
      }
    `}
`

export const ImgWrapper = styled.div`
  position: relative;

  img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  ${media.md`
  img {
    width: 70%;
    height: auto;
  }
  `}

  ${media.sm`
  img {
    width: 55%;
    height: auto;
  }
  `}

  ${media.sm`
    padding: 1rem;
  img:nth-child(2)  {
    left: 40%;
  }
  `}
`
