import styled, { css } from 'styled-components'
import { colors } from '../../lib/colors'

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
`

export const LocaleButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`

export const LocaleButton = styled.div`
  border: 1px solid ${colors.grey};
  padding: 5px;
  cursor: pointer;
  border: 1px solid ${({ selected }) => (selected ? colors.secondary : 'transparent')};
  border-radius: 2px;
  &:hover {
    /* background-color: ${colors.secondary}; */
    color: ${({ selected }) => (selected ? colors.primary : colors.secondary)};
  }
`
