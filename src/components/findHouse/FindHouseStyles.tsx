import styled from 'styled-components'
import { media } from '../../helpers/device'
import { colors } from '../../lib/colors'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  h1 {
    font-size: 32px;
    line-height: 44px;
    width: 30%;
    text-align: center;
    margin-bottom: 63px;

    ${media.lg`
      line-height: 20px;
    `}
  }

  ${media.md`
    h1{
      width: 50%;
    }
  `}

  ${media.sm`
    h1{
      width: 45%;
      font-size: 1.75rem;
    }
  `}

  ${media.xs`
    h1{
      width: 45%;
      font-size: 1.5rem;
    }
  `}
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
  ${media.lg`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  `}
`
export const BoxStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 27%;
  text-align: center;
  transition: transform 0.3s ease;
  h2 {
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: 39px;
    line-height: 30px;
  }
  span {
    font-size: 18px;
    line-height: 30px;
  }
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.03);
  }

  ${media.lg`
    width: 100%;
  `}
`

export const TextWrapper = styled.div`
  span {
    color: ${colors.greyText};
  }
`
