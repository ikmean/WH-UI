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
  background-color: #ffffff;
  box-shadow: ${(props) => (props.isFixed ? '0 2px 4px rgba(0, 0, 0, 0.1)' : '')};
  padding: 0px 40px;
  width: 100%;
  z-index: 10000;
  position: ${(props) => (props.isFixed ? 'fixed' : 'relative')};
  top: ${(props) => (props.isFixed ? '0' : 'auto')};
  left: 0;

  ${media.sm`
    height:60px;
  `}
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

  svg {
    ${media.sm`
        width: 40px;
        height: 40px  `}
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
    display: flex;
    justify-content: center;
    align-items: center;
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

  ${media.sm`
     div{ width: 35px;
      height: 35px;
    }
  `}
`

export const LocaleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
`

export const WorldWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 5px 5px ${colors.grey};
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    svg {
      path {
        fill: ${colors.secondary};
      }
    }
  }

  ${media.md`
    width: 50px;
    height: 50px;
  `}
`

export const SelectionStyles = styled.div`
  opacity: 80;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 99%;
  right: 0;
  background-color: ${colors.grey};
  border: 1px solid ${colors.greyText};
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 10000;
  width: 9rem;

  /* ${media.lg`
    right: 10%;
  `} */
`

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h4 {
    font-size: 1.25rem;
    font-weight: 800;
  }
`

export const Option = styled.div`
  color: ${({ selected }) => (selected ? colors.secondary : '')};
  font-size: 1rem;
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
  border: none;
  outline: none;
  cursor: pointer;
  width: fit-content;
  padding: 0.5rem;
  svg {
    width: 1rem;
    height: 1rem;
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
