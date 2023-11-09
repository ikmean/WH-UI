import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 113px;
    font-size: 48px;
  }
`
export const Images = styled.div`
  display: grid;
  grid-template-columns: 40% 40% 20%;
  gap: 20px;
`

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 52px;
  margin-bottom: 109px;
  gap: 40px;
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    width: 50%;
    color: ${colors.greyText};
  }
`
