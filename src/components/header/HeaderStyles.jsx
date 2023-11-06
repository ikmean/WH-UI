import styled, { css } from "styled-components";
import { colors } from "../../lib/colors";

const hoverTransition = (transitionType, transitionValue, transitionSeconds) =>
  css`
    transition: ${transitionType} ${transitionSeconds} ease-out;
    &:hover {
      cursor: pointer;
      ${transitionType}: ${transitionValue};
    }
  `;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 113.5px;
`;

export const HeaderLink = styled.div`
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  line-height: 20px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  ${hoverTransition("transform", "scale(0.9)", "0.6s")}

  h1 {
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-left: 13.3px;
  }
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  ${hoverTransition("transform", "scale(0.9)", "0.4s")}
  svg {
    stroke: ${colors.primary};
    ${hoverTransition("stroke", `${colors.secondary}`, "0.4s")}
  }
`;

export const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding-right: 200px;
  li {
    a {
      ${hoverTransition("color", `${colors.secondary}`, "0.4s")}
    }
  }
`;
