import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 138px;
`

export const TakeALookContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.md`
    flex-direction: column;
    align-items: center;
  `}
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
    /* font-size: 63px; */
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

  ${media.md`
    width: 80%;

    h1{
      font-size: 3.3rem;
    }
  `}

  ${media.sm`
    h1{
      font-size: 2.75rem;
    }

    h2{
      font-size: 1.25rem;
    }
  `}

  ${media.xs`
    width: 60%;
    h1{
      font-size: 2.25rem;
    }
  `}
`

export const Title = styled.div`
  font-size: 2rem;
  line-height: 44px;

  ${media.sm`
    font-size: 1.45rem;
  `}
`
