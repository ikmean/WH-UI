import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'

export const ExploreWrapper = styled.div`
  display: flex;
  gap: 40px;
`

export const ExploreHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.5s forwards;
`

export const ExploreText = styled.span`
  color: ${colors.greyText};
  opacity: 0;
  animation: ${slideAnimation('100px')} 1.6s ease 0.7s forwards;
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
`

export const Right = styled.div`
  display: flex;
  width: 50%;
  position: relative;
  img {
    margin-bottom: 20px;
    width: 347px;
    height: 233.33px;
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
`
