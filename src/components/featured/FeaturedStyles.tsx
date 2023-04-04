import styled from "styled-components"
import { colors } from "../../lib/colors"

export interface props {
  forSale?: boolean
  saleRent?: boolean
  featured?: boolean
}

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 160px;
  margin-bottom: 64px;
`
export const BoxWrapper = styled.div<props>`
  display: flex;
  flex-direction: ${({ featured }) => (featured ? "" : "column")};
  justify-content: ${({ featured }) => (featured ? "" : "space-between")};
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  margin-bottom: 32px;
  width: ${({ featured }) => (featured ? "" : "32%")};
  img {
    border-top-left-radius: 26px;
    border-bottom-left-radius: ${({ featured }) => (featured ? "26px" : "")};
    border-top-right-radius: ${({ featured }) => (featured ? "" : "26px")};
    width: ${({ featured }) => (featured ? "" : "100%")};
    height: ${({ featured }) => (featured ? "" : "228.38px")};
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
export const TextBox = styled.div<props>`
  display: flex;
  flex-direction: column;
  padding: ${({ featured }) =>
    featured ? "65px 54px 62px 56px" : "40px 32px 30px 32px"};
  h2 {
    margin-bottom: 8px;
    font-size: ${({ featured }) => (featured ? "22px" : "18px")};
  }
  div {
    display: flex;
  }
`

export const LocationContainer = styled.div<props>`
  display: flex;
  align-items: center;
  span {
    padding-left: 11px;
    font-size: ${({ featured }) => (featured ? "18px" : "16px")};
  }
`
export const Top = styled.div<props>`
  display: flex;
  align-items: ${({ featured }) => (featured ? "flex-start" : "")};
  flex-direction: ${({ featured }) => (featured ? "row" : "column-reverse")};
  justify-content: ${({ featured }) => (featured ? " space-between" : "")};
  margin-bottom: 15px;
`
export const Price = styled.span<props>`
  color: ${({ featured }) => (featured ? colors.secondary : "black")};
  margin-bottom: ${({ featured }) => (featured ? "" : "13px")};
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
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  border-radius: 40px;
  margin-right: 18px;
  background: ${({ forSale }) => (forSale ? colors.secondary : "white")};
  color: ${({ forSale }) => forSale && "white"};
  font-size: ${({ saleRent }) => (saleRent ? "16px" : "14px")};
  padding: ${({ saleRent }) => (saleRent ? "12px 22px" : "10px 14px")};
  span {
    color: black;
    padding-left: 7px;
  }
`

export const PropertiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
