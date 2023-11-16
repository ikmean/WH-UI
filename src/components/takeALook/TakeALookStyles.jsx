import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 138px;
`

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 30%;
  margin-left: 50px;
  margin-right: 50px;
  h1 {
    font-size: 63px;
    color: ${colors.secondary};
    font-weight: 500;
    padding-bottom: 20px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 11px;
  }
  p {
    color: ${colors.greyText};
    line-height: 30px;
  }
`

export const Title = styled.div`
  font-size: 32px;
  line-height: 44px;
`
