import styled from 'styled-components'
import { colors } from '../../lib/colors'

export interface props {
  backgroundColor?: string
}
//footer
export const InputStyles = styled.div<props>`
  input {
    display: flex;
    border: none;
    border-radius: 12px;
    border: 1px solid transparent;
    background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : 'transparent')};
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 400;
    outline: none;
    width: 100%;
    height: 30px;
    top: 130.38px;
    left: 895.05px;
    padding: 30px 20px;
    transition: transform 0.3s ease;
    :focus::placeholder {
      color: transparent;
    }
    &:hover {
      border-color: ${({ backgroundColor }) => (backgroundColor ? colors.secondary : '')};
      transition: transform 0.3s ease;
    }
  }
`
