import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const ExploreWrapper = styled.div`
  display: flex;
  gap: 40px;

  ${media.md`
    flex-direction: column;
    align-items:center;
    justify-content:center;
  `}
`

export const ExploreHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 60px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.5s forwards;

  ${media.md`
   text-align: center;
  `}

  ${media.sm`
    font-size: 2.5rem;
    line-height: 40px;
  `}

  ${media.sm`
    font-size: 2.06rem;
  `}
`

export const ExploreText = styled.span`
  color: ${colors.greyText};
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.7s forwards;
  padding: 1rem 0;
  font-size: 1.125rem;
`

export const ExploreButton = styled.div`
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.9s forwards;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  h1 {
    margin-bottom: 14px;
    margin-top: 115px;
  }

  ${media.md`
   align-items: center;
   width: 70%;
  `}

  ${media.sm`
   align-items: center;
   width: 60%;
  `}

  ${media.xs`
   align-items: center;
   width: 80%;
  `}
`

export const Right = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  img {
    margin-bottom: 20px;
    width: auto;
    height: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  div:nth-child(1) {
    margin-top: 60px;
    animation: ${slideAnimation('100px')} 1.6s;
  }
  div:nth-child(2) {
    position: absolute;
    right: -23%;
    animation: ${slideAnimation('-100px')} 1.6s;
  }

  ${media.md`
   align-items: center;
   width: 100%;
   gap: 1rem;

   div:nth-child(2){
     position: initial;
   }
  `}
`
