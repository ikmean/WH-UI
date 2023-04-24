import styled from "styled-components"
import { colors } from "../../lib/colors"

// export interface props {}

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
  }
`
export const AgentBoxStyles = styled.div<{ type: string }>`
  width: ${({ type }) =>
    type === "small" || type === "page" ? "100%" : "32%"};
  box-shadow: ${({ type }) =>
    type !== "small" && "0px 3px 20px rgba(8, 15, 52, 0.06)"};
  border-radius: 26px;
  img {
    border-top-left-radius: ${({ type }) => (type === "small" ? "" : "26px")};
    border-top-right-radius: ${({ type }) => (type === "small" ? "" : "26px")};
    border-radius: ${({ type }) => type === "small" && "50%"};
    width: ${({ type }) => (type === "small" ? "96.27px" : "100%")};
    height: ${({ type }) =>
      type === "small" ? "96.27px" : type === "page" ? "100%" : "367px"};
  }
  a {
    display: ${({ type }) => type !== "regular" && "flex"};
  }
`
export const ImgWrapper = styled.div<{ type: any }>`
  position: relative;
  width: ${({ type }) => type === "page" && "40%"};
  height: ${({ type }) => type === "page" && "580px"};
  flex-shrink: 0;
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  border-radius: 60px;
  padding: 12px 22px;
  margin-right: 18px;
  background: ${colors.secondary};
  color: white;
`

export const TextBox = styled.div<{ type: any }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ type }) => type === "page" && "center"};
  margin-bottom: ${({ type }) => (type === "small" ? "" : "15px")};
  margin-top: ${({ type }) => (type === "small" ? "" : "36px")};
  text-align: left;
  padding: ${({ type }) =>
    type === "small"
      ? "0 22px"
      : type === "page"
      ? "0 7% 0 8%"
      : "0 40px 30px 40px"};
  h2 {
    margin-bottom: 8px;
    font-size: ${({ type }) => (type === "small" ? "20px" : "22px")};
  }
  div {
    margin-bottom: ${({ type }) => (type === "small" ? "" : "20px")};
  }
`
export const AgentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 67px;
`
export const ContactStyles = styled.div<{ type: any }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  div {
    display: flex;
    align-items: center;
    margin-right: 35px;
    margin-bottom: ${({ type }) => type === "small" && "14px"};
    svg {
      width: ${({ type }) => (type === "small" ? "18px" : "")};
      height: ${({ type }) => (type === "small" ? "18px" : "")};
    }
    span {
      margin-left: ${({ type }) => (type === "small" ? "11px" : "16.7px")};
    }
  }
`
