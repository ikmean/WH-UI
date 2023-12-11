import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const InputStyles = styled.div`
  input {
    display: flex;
    border: none;
    border-radius: 12px;
    border: 1px solid transparent;
    background: ${colors.grey};
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 400;
    outline: none;
    width: 360.27px;
    height: 30px;
    top: 130.38px;
    left: 895.05px;
    padding: 30px 20px;
    margin-top: 15px;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
    :focus::placeholder {
      color: transparent;
    }
    &:hover {
      border-color: ${colors.secondary};
      transition: transform 0.3s ease;
    }
  }
`
