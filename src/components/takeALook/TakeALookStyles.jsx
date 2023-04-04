import styled from "styled-components";
import { colors } from "../../lib/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 138px;
  div {
    display: flex;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 63px;
    color: ${colors.secondary};
  }
  h2 {
    font-size: 22px;
    margin-bottom: 11px;
  }
`;
export const Title = styled.div`
  font-size: 32px;
  margin-bottom: 63px;
`;
