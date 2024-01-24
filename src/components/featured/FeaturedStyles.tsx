import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export interface props {
  forSale?: boolean
  forRent?: boolean
  featured?: boolean
  main?: boolean
}

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 64px;

  ${media.sm`
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      h1{
        font-size: 1.75rem;
      }
    `}

  ${media.xs`
      h1{
        font-size: 1.5rem;
      }
    `}
`

export const BoxWrapper = styled.div<props>`
  z-index: 999;
  position: relative;
  background: white;
  border-radius: 26px;
  transition: transform 0.3s ease;
  display: ${({ featured }) => (featured ? 'flex' : '')};
  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
    img {
      transform: scale(1.03);
    }
    h2 {
      color: ${colors.secondary};
    }
  }
  a {
    border-radius: 26px;
    overflow: hidden;
    display: flex;
    flex-direction: ${({ featured }) => (featured ? '' : 'column')};
    justify-content: ${({ featured }) => (featured ? '' : 'space-between')};
    transition: box-shadow 0.3s, transform 0.3s;
    img {
      transition: transform 0.3s;
    }
    width: 100%;
  }
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  margin-bottom: 32px;
  width: ${({ featured }) => (featured ? '' : '100%')};
  margin-right: ${({ main }) => (main ? '' : '3.5%')};
  &:nth-child(3) {
    margin-right: 0;
  }
  img {
    border-top-left-radius: 26px;
    border-bottom-left-radius: ${({ featured }) => (featured ? '26px' : '')};
    border-top-right-radius: ${({ featured }) => (featured ? '' : '26px')};
  }

  ${media.lg`
    flex-direction: column;
  `}
`

export const ImgWrapper = styled.div<{ main: any; featured: any }>`
  position: relative;
  width: ${({ main }) => (main ? ' 53%' : '')};
  width: ${({ featured }) => (featured ? ' 100%' : '')};
  height: ${({ main, featured }) => (featured ? '' : main ? '375px' : '')};
  transform: translate(0);
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
  img {
    height: ${({ main, featured }) => (featured ? '375px' : main ? '375px' : '220px')};
  }

  ${media.lg`
    img{
      height: 100%;
    }
  `}
`

export const TextBox = styled.div<props>`
  display: flex;
  flex-direction: column;
  width: ${({ main }) => (main ? ' 48%' : '')};
  padding: ${({ featured }) => (featured ? '65px 54px 62px 56px' : '40px 32px 30px 32px')};
  h2 {
    margin-bottom: 8px;
    font-size: ${({ featured }) => (featured ? '22px' : '18px')};
  }
  p {
    color: ${colors.greyText};
  }

  ${media.lg`
    width: 100%;
  `}
`

export const LocationContainer = styled.div<props>`
  display: flex;
  align-items: center;
  color: ${colors.greyText};
  margin-top: 10px;
  span {
    padding-left: 11px;
    font-size: ${({ featured }) => (featured ? '18px' : '16px')};
  }
`

export const Top = styled.div<props>`
  display: flex;
  align-items: ${({ featured }) => (featured ? 'flex-start' : '')};
  flex-direction: ${({ featured }) => (featured ? 'row' : 'column-reverse')};
  justify-content: ${({ featured }) => (featured ? ' space-between' : '')};
  margin-bottom: 15px;

  ${media.sm`
    flex-direction: column;
  `}
`

export const Price = styled.span<props>`
  color: ${({ featured }) => (featured ? colors.secondary : 'black')};
  margin-bottom: ${({ featured }) => (featured ? '' : '13px')};
  font-weight: 700;
  font-size: 22px;
  padding: 10px 10px 0px 10px;
  color: ${({ featured }) => (featured ? colors.secondary : 'black')};
  margin-bottom: ${({ featured }) => (featured ? '' : '13px')};
  font-weight: 700;
  font-size: 22px;
`

export const CurrencyIcons = styled.div`
  align-items: center;
  background-color: grey;
  border-radius: 20px;
  padding: none !important;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
    border-radius: 20px;
    padding: 5px;
    /* background-color: ${colors.secondary}; */
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 36px 0;
`

export const InfoBoxWrapper = styled.div`
  display: flex;
  ${media.xs`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  `}
`
InfoBoxWrapper
export const InfoBox = styled.div<props>`
  display: flex;
  align-items: center;
  border-radius: 40px;
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  margin-right: 18px;
  background-color: ${({ forSale }) => (forSale ? colors.secondary : 'white')};
  background: ${({ forSale }) => (forSale ? colors.secondary : 'white')};
  color: ${({ forSale }) => forSale && 'white'};
  font-size: ${({ forRent }) => (forRent ? '16px' : '14px')};
  padding: ${({ forRent }) => (forRent ? '12px 22px' : '12px 22px')};
  span {
    color: black;
    padding-left: 7px;
  }

  ${media.xs`
    align-items: center;
    justify-content: center;
  `}
`

export const PropertiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  ${media.lg`
  grid-template-columns: repeat(2, 1fr);

  `}

  ${media.sm`
  grid-template-columns: repeat(1, 1fr);
  `}
`

export const PropertiesPageHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  h1 {
    font-size: 3rem;
    line-height: 60px;
    margin-bottom: 18px;
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    width: 40%;
    text-align: center;
    color: ${colors.greyText};
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
  }

  ${media.sm`
    h1{
      font-size: 2.5rem;
    }
    p{
      width: 100%;
    }
  `}

  ${media.xs`
    h1{
      font-size: 2.05rem
    }
  `}
`
export const PropertiesPageWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 80px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 1s forwards;

  ${media.lg`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.sm`
    grid-template-columns: auto ;
  `}
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
  .button {
    margin-right: 68px;
  }
`

export const NoProperties = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 50px;
  color: ${colors.greyText};
  font-size: 25px;
`
