import styled, { css } from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  min-width: 200px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  width: 223.43px;
  height: 83px;
  padding: 32px 38px 38px 22px;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  color: ${colors.greyText};
  border-radius: 14px;
  position: relative;
  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${colors.secondary};
      color: ${colors.secondary};
      svg {
        path {
          stroke: ${colors.secondary};
        }
      }
    `}

  ${media.lg`
      width: 100%;
      justify-content: space-between;
    `}
`

export const ArrowContainer = styled.div`
  display: flex;
`

export const DropdownList = styled.div`
  display: none;
  align-items: left;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
  width: 223.43px;
  background-color: ${colors.white};
  color: ${colors.greyText};
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 14px;
  position: absolute;
  top: 100px;
  left: 0px;
  z-index: 1000;

  ${media.lg`
      width: 100%;
  `}
`

export const Gap = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  &:hover ${DropdownList} {
    display: flex;
  }
  &:hover ${DropdownBox} {
    border: 1px solid ${colors.secondary};
    color: ${colors.secondary};
  }
  &:hover ${Gap} {
    svg {
      path {
        stroke: ${colors.secondary};
      }
    }
  }
  &:hover ${ArrowContainer} {
    svg {
      transition: transform 0.2s ease-in-out;
      transform: translate(2px, -2px) rotate(180deg);
      path {
        stroke: ${colors.secondary};
      }
    }
  }
  ${ArrowContainer} {
    svg {
      transition: transform 0.2s ease-in-out;
    }
  }

  ${media.lg`
      width: 100%;
  `}
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover {
    color: ${colors.secondary};
  }

  input[type='checkbox'] {
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid ${colors.greyText};
    border-radius: 4px;
    outline: none;
    margin-right: 10px;
    &:checked {
      background-color: ${colors.secondary};
      border-color: ${colors.secondary};
    }
    &:checked::before {
      content: '\u2713';
      display: block;
      text-align: center;
      line-height: 18px;
      color: white;
    }
  }
`
