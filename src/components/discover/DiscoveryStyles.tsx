import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: ${colors.greyDarker};
  margin-top: 159px;
  padding: 159px 0 360px 0;
  width: 100%;
  img {
    border-radius: 12px;
  }
`
export const TextWrapper = styled.div`
  width: 45%;
  margin-right: 5%;
  h1 {
    line-height: 44px;
    margin-bottom: 26px;
    margin-top: 200px;
    margin-right: 20%;
    font-size: 32px;
  }
  p {
    line-height: 30px;
    font-size: 18px;
    color: ${colors.greyText};
    width: 75%;
    margin-bottom: 36px;
  }
`

export const ImgWrapper = styled.div`
  position: relative;

  img:nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
  }
`
