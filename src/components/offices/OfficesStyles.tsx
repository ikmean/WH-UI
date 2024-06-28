import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const Wrapper = styled.div`
  margin-top: 168px;
  width: 100%;
  padding-left: 10%;
  h1 {
    font-size: 32px;
  }

  ${media.sm`
    padding: 2rem;
  `}
`
export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;

  ${media.xs`
    h1{
      font-size: 1.5rem;
    }
    
  `}
`

export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-size: 22px;
    line-height: 30px;
  }

  p {
    color: ${colors.greyText};
    padding-top: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
  }

  ${media.md`
      padding-bottom: 2rem;
    `}
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${media.lg`
  grid-template-columns: repeat(2, 1fr);
  `}

  ${media.sm`
  grid-template-columns: repeat(1, 1fr);
  `}
`
