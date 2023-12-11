import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`
export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 50%;
  margin-right: 16px;
  &:hover {
    background-color: ${colors.secondary};
    cursor: pointer;
  }
`
