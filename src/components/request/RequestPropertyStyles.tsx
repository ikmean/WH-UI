import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const RequestPropertyStyles = styled.div`
  position: absolute;
  right: 0;
  top: -100px;
  width: 459px;
  height: 839px;
  background: #ffffff;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 16px;
  padding: 46px 48px 50px 48px;
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
`
