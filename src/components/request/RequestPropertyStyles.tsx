import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const RequestPropertyStyles = styled.div`
  z-index: 1000;
  position: absolute;
  right: 0;
  top: -100px;
  width: 459px;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 16px;
  padding: 46px 48px 50px 48px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
  h1 {
    font-size: 32px;
    margin-top: 14px;
    margin-bottom: 24px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 18px;
  }
  h3 {
    color: ${colors.greyText};
    font-size: 18px;
  }
  .button {
    margin-top: 9px;
    margin-bottom: 65px;
  }

  ${media.md`
    position: initial;
  `}

  ${media.xs`
    width: 23rem;
  `}
`

export const SubmittedMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  color: ${colors.secondary};
  height: 330px;
  width: 360px;
  font-size: 20px;

  ${media.md`
    font-size: 1rem;
  `}

  ${media.xs`
    width: 20rem;
  `}
`
