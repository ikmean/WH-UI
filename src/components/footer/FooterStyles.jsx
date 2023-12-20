import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 82px;
  margin-top: 60px;
  margin-left: 100px;
  border-top: 1px solid ${colors.border};
  width: 100%;
`

export const Top = styled.div`
  display: flex;
  gap: 170px;
  padding-bottom: 80px;
  border-bottom: 1px solid ${colors.border};
`
export const TopLeft = styled.div`
  width: 50%;
  p {
    margin-top: 26px;
  }
`

export const FooterText = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  width: 80%;
  color: ${colors.greyText};
`
