import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 82px;
  padding: 3rem 1rem 2rem 3rem;
  border-top: 1px solid ${colors.border};
  width: 100%;
`

export const Top = styled.div`
  display: flex;
  gap: 170px;
  padding-bottom: 80px;
  border-bottom: 1px solid ${colors.border};

  ${media.md`
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 2rem;
  `}

  ${media.xs`
    padding-left: 2rem;
  `}
`
export const TopLeft = styled.div`
  width: 50%;
  p {
    margin-top: 26px;
  }

  ${media.md`
    width: 100%;
  `}
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
