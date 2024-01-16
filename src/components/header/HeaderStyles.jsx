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
  width: 60%;
  padding-right: 200px;
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
      left: 0;
      right: 0;
      top: 10vh;
      padding: 6rem 0 0 4rem;
      gap: 5rem;
      background-color: ${colors.white};
      z-index: 10000;
      width: 100%;
      height: 90vh;
      `}

  ${media.lg`
        top: 12vh;
        height: 88vh;
        gap: 3rem;
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
  align-items: center;
  gap: 10px;
`

export const LocaleButton = styled.div`
  border: 1px solid ${colors.grey};
  padding: 5px;
  cursor: pointer;
  border: 1px solid ${({ selected }) => (selected ? colors.secondary : 'transparent')};
  border-radius: 2px;
  &:hover {
    color: ${({ selected }) => (selected ? colors.primary : colors.secondary)};
  }
`
