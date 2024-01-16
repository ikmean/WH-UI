import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const SearchContainerStyles = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  margin-top: 44px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
  padding-left: 30px;
  opacity: 0;
  border-radius: 14px;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;

  ${media.lg`
    flex-direction: column;
  `}
`
export const DropDownWrapper = styled.div`
  display: flex;

  ${media.lg`
    width: 100%;
    align-items: center;
    justify-content: center;
  `}

  ${media.md`
    flex-direction: column;
  `}
`

export const SearchBox = styled.div`
  width: 30rem;
  height: 83px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border: 1px solid white;
  border-radius: 14px;
  padding: 16px 17px 21px 16px;
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
  &:hover {
    border: 1px solid ${colors.secondary};
  }
  div {
    display: flex;
    align-items: center;
  }

  ${media.lg`
    width: 100%;
  `}

  ${media.xs`
    position: relative;
  `}
`

export const SearchButton = styled.div`
  margin-top: 4px;
  display: flex;
  align-items: center;
  width: 110px;
  max-width: fit-content;
  height: 55px;
  max-height: fit-content;
  padding: 20px 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: white;
  background: ${colors.secondary};
  border-radius: 12px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  box-shadow: 0px 2px 12px rgba(20, 20, 43, 0.07);
  cursor: pointer;
  place-content: center;
  transition: transform 0.5s ease, background-color 0.3s ease;
  &:hover {
    transform: scale(0.95);
  }

  ${media.xs`
    position: absolute;
    left: 0;
    bottom: -4.8rem;
    width: 100%;
    max-width: 100%;
  `}
`
