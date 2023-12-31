import styled, { keyframes } from 'styled-components'

interface props {
  type: string
}

const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`

export const LoaderContainer = styled.div<props>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ type }) => (type === 'small' ? '100%' : '80vh')};
`

export const LoaderAnimation = styled.div<props>`
  border: 6px solid #f3f3f3;
  border-top: 6px solid rgba(248, 87, 87, 1);
  border-radius: 50%;
  width: ${({ type }) => (type === 'small' ? '50px' : '80px')};
  height: ${({ type }) => (type === 'small' ? '50px' : '80px')};
  animation: ${rotate} 1s linear infinite;
`
