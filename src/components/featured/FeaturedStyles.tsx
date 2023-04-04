import styled from "styled-components"
import { colors } from "../../lib/colors"

export interface props {
  forSale?: boolean
  saleRent?: boolean
}

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 64px;
`
export const BoxWrapper = styled.div`
  display: flex;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  margin-bottom: 32px;
  img {
    border-top-left-radius: 26px;
    border-bottom-left-radius: 26px;
  }
`
export const ImgWrapper = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
`
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 65px 54px 62px 56px;
  h2 {
    margin-bottom: 8px;
  }
  div {
    display: flex;
    align-items: center;
  }
  span {
    padding-left: 11px;
    font-size: 18px;
  }
  p,
  span {
    color: ${colors.greyText};
  }
  p {
    line-height: 30px;
  }
`

export const LocationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`
export const Price = styled.span`
  color: ${colors.secondary} !important;
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
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  border-radius: 40px;
  margin-right: 18px;
  background: ${({ forSale }) => (forSale ? colors.secondary : "white")};
  color: ${({ forSale }) => forSale && "white"};
  font-size: ${({ saleRent }) => (saleRent ? "16px" : "14px")};
  padding: ${({ saleRent }) => (saleRent ? "12px 22px" : "10px 14px")};
  span {
    color: black;
  }
`
