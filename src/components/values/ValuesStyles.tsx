import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  gap: 3rem;
  background: ${colors.grey};
  width: 100%;
  margin-top: 160px;
  h1 {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 13px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
  }
  ${media.md`
    flex-direction: column;
    gap: 0;
    padding-left: 2rem;
    padding-right: 2rem;
  `}
`

export const Left = styled.div`
  width: 45%;

  ${media.md`
    width: 100%;   
  `}
`

export const Right = styled.div`
  width: 45%;
  padding-top: 160px;
  padding-bottom: 124px;

  ${media.md`
    width: 100%;
    padding-top: 1rem;
  `}
`

export const Header = styled.div`
  margin-bottom: 70px;
  margin-top: 164px;
  width: 70%;
  font-size: 32px;
  font-weight: 700;
  line-height: 44px;
  p {
    width: 100%;
  }

  ${media.md`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    text-align: center;
    padding: 1rem;

    h1{
      margin-top: 2rem;
    }
  `}
`

export const ValueBoxWrapper = styled.div`
  display: flex;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  background: white;
  padding: 49px 60px 70px 38px;
  margin-bottom: 36px;
  transition: transform 0.3s ease;
  h2 {
    text-transform: capitalize;
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 10px;
  }
  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
  }

  ${media.xs`
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  `}
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 107.09px;
  height: 107.09px;
  background: rgba(252, 239, 222);
  border-radius: 50%;
  margin-right: 22px;
  flex-shrink: 0;

  ${media.xs`
    width: 5rem;
    height: 5rem;
  `}
`
