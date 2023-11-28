import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'

export const SearchContainerStyles = styled.div`
  display: flex;
  margin-top: 44px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding-left: 30px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
`

export const SearchBox = styled.div`
  width: 498.625px;
  height: 83px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border: 1px solid white;
  border-radius: 14px;
  padding: 16px 17px 21px 16px;
  &:hover {
    border: 1px solid ${colors.secondary};
  }

  input {
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    padding-left: 20px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${colors.greyText};
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
  }
  @media only screen and (max-width: 1024px) {
    width: 40%;
  }
`
