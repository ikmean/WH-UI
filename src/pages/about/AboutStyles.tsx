import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  h1 {
    margin-top: 113px;
    font-size: 3rem;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }

  ${media.sm`
  h1{
    font-size: 2.5rem;
  }
 `}

  ${media.xs`
    h1{
      font-size: 2.05rem;
      width: 80vw;
    }

 `}
`

export const HeaderAndDescription = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md`
    align-items: center;
    justify-content: center;
  `}

  ${media.sm`
    align-items: flex-start;
  `}
`
export const Images = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  gap: 1rem;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
  width: 90vw;
  img {
    height: 100%;
    width: auto;
  }
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 109px;
  gap: 40px;
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    width: 50%;
    color: ${colors.greyText};
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
  }

  ${media.md`
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    p{
      width: 80%;
      text-align: center;
    }
  `}

  ${media.sm`
   align-items: flex-start;

    p{
      text-align: left;
      width: 80vw;
    }
  `}
`
