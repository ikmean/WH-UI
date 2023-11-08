import styled from 'styled-components'
import { colors } from '../../lib/colors'

interface props {
  margin?: string
  width?: string
  color?: string
}

export const PostButtonWrapper = styled.div<props>`
  display: flex;
  align-items: center;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 10px;
  padding: 20px 36px;
  margin: ${({ margin }) => margin && margin};
  width: fit-content;
  transition: transform 1s ease, background-color 0.3s ease;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    background-color: ${colors.secondary};
  }
`

export const ButtonWrapper = styled.div<props>`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width === '100%' ? '100%' : 'fit-content')};
  max-height: fit-content;
  padding: 20px 40px;
  background: ${({ color }) => (color === 'white' ? 'white' : color === 'red' ? colors.secondary : 'black')};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  border-radius: 12px;
  font-size: 18px;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.07);
  cursor: pointer;
  place-content: center;
  font-weight: 600;
  transition: transform 1s ease, background-color 0.3s ease;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
    background-color: ${({ color }) => (color === 'black' || color === 'white') && colors.secondary};
    color: ${colors.white};
  }
`
