import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const Wrapper = styled.div`
  margin-top: 168px;
  width: 100%;
  padding-left: 10%;
  h1 {
    font-size: 32px;
  }
`
export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
`

export const BoxContainer = styled.div`
  width: 50%;
  margin-right: 40px;
  h2 {
    font-size: 22px;
    line-height: 30px;
  }
  img {
    width: 598.33px;
    height: 50%;
    top: 5996.08px;
  }
  p {
    color: ${colors.greyText};
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
  }
`

export const Info = styled.div`
  margin-top: 44px;
  padding-right: 20px;
  h2 {
    margin-bottom: 8px;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 35px 0;
`

export const BoxWrapper = styled.div`
  display: flex;
  overflow: hidden;
`
