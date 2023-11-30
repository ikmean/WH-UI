import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'

export interface props {
  forSale?: boolean
  forRent?: boolean
  featured?: boolean
  main?: boolean
}

export interface data {
  data: any
}

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 64px;
`
export const BoxWrapper = styled.div<props>`
  z-index: 999;
  position: relative;
  background: white;
  border-radius: 26px;
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
    &:hover {
      border-radius: 26px;
      box-shadow: 0 10px 30px 0 ${colors.grey};
      transform: translate(0, -3px);
      img {
        transform: scale(1.03);
      }
      h2 {
        color: ${colors.secondary};
      }
    }
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
`

export const ImgWrapper = styled.div<{ main: any; featured: any }>`
  position: relative;
  width: ${({ main }) => (main ? ' 53%' : '')};
  height: ${({ main, featured }) => (featured ? '' : main ? '375px' : '')};
  transform: translate(0);
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
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
  div {
    display: flex;
  }
  p {
    color: ${colors.greyText};
  }
`

export const LocationContainer = styled.div<props>`
  display: flex;
  align-items: center;
  color: ${colors.greyText};
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
`

export const Price = styled.span<props>`
  color: ${({ featured }) => (featured ? colors.secondary : 'black')};
  margin-bottom: ${({ featured }) => (featured ? '' : '13px')};
  font-weight: 700;
  font-size: 22px;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 36px 0;
`

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
`

export const PropertiesWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
`

export const PropertiesPageHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  h1 {
    font-size: 48px;
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
`
export const PropertiesPageWrapper = styled.div`
  position: relative;
  z-index: 0;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 30px;
  margin-top: 80px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 1s forwards;
`

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 33px;
  .button {
    margin-right: 68px;
  }
`
