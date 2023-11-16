import styled, { keyframes } from 'styled-components'

const slideAnimation = (startY) => keyframes`
  from {
    opacity: 0;
    transform: translatey(${startY});
  }
  to {
    opacity: 1;
    transform: translatey(0px);
  }
`
export const ExploreWrapper = styled.div`
  display: flex;
`

export const ExploreHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 120px;
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
  }
  div {
    display: flex;
    flex-direction: column;
    width: 60%;
  }
  div:nth-child(1) {
    margin-top: 30px;
    animation: ${slideAnimation('100px')} 1.6s;
  }
  div:nth-child(2) {
    position: absolute;
    right: -28%;
    animation: ${slideAnimation('-100px')} 1.6s;
  }
`
