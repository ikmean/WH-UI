import { keyframes } from 'styled-components'

export const slideAnimation = (startY) => keyframes`
  from {
    opacity: 0;
    transform: translatey(${startY});
  }
  to {
    opacity: 1;
    transform: translatey(0px);
  }
`
