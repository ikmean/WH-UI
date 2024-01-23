import styled, { css } from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

const hoverTransition = (transitionType, transitionValue, transitionSeconds) =>
  css`
    transition: ${transitionType} ${transitionSeconds} ease-out;
    &:hover {
      cursor: pointer;
      ${transitionType}: ${transitionValue};
    }
  `

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 113.5px;
`

export const HeaderLink = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;

  ${media.lg`
      font-size: 2rem;
    `}

  ${media.lg`
      font-size: 1.5rem;
  `}
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  ${hoverTransition('transform', 'scale(0.9)', '0.6s')}

  h1 {
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-left: 13.3px;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  ${hoverTransition('transform', 'scale(0.9)', '0.4s')}
  svg {
    stroke: ${colors.primary};
    ${hoverTransition('stroke', `${colors.secondary}`, '0.4s')}
  }
`

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-right: 200px;
  margin-left: 100px;
  li {
    a {
      ${hoverTransition('color', `${colors.secondary}`, '0.4s')}
    }
  }

  ${media.lg`
      display: ${({ open }) => (open ? 'flex' : 'none')};
      position: fixed;
      flex-direction: column;
      justify-content: flex-start;
      margin-left:  0;
      left: 0;
      right: 0;
      top: 12vh;
      padding: 6rem 0 0 4rem;
      gap: 3rem;
      background-color: ${colors.white};
      z-index: 10000;
      width: 100%;
      height: 88vh;
  `}
`

export const BurgerMenuButton = styled.div`
  display: none;

  ${media.lg`
    display: block;
    div{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ open }) => (open ? colors.primary : colors.secondary)};
      padding: 0.4rem;
      border-radius: 0.3rem;
      transition: background-color 1s;
      margin-left: 1rem;
    }
    
  `}
`

export const LocaleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`

export const WorldWrapper = styled.div`
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey};
    svg {
      path {
        fill: ${colors.secondary};
      }
    }
  }
`

export const SelectionStyles = styled.div`
  opacity: 80;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.grey};
  border: 1px solid ${colors.greyText};
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  z-index: 1000;
  width: 40%;
  height: 40%;

  ${media.md`
    width: 60%
  `}

  ${media.sm`
    width: 70%
  `}

  ${media.xs`
    width: 100%
  `}
`

export const Selection = styled.div`
  span {
    font-size: 24px;
    font-weight: 500;
    padding: 30px;
  }

  ${media.xs`
   span { 
    padding: 5px  
    }
  `}
`

export const Option = styled.div`
  color: ${({ selected }) => (selected ? colors.secondary : '')};
  margin-top: 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: ${colors.secondary};
  }
`

export const BtnClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  color: ${colors.greyDarker};
  border-radius: 12px;
  border: 1px solid transparent;
  cursor: pointer;
  width: fit-content;
  padding: 20px;
  svg {
    width: 18px;
    height: 18px;
    path {
      stroke: ${colors.greyText};
      stroke-width: 4;
    }
  }
  &:hover {
    svg {
      path {
        stroke: ${colors.secondary};
      }
    }
  }
`
