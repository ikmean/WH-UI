import styled from "styled-components";
import { colors } from "../../lib/colors";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 82px;
  margin-top: 140px;
  border-top: 1px solid ${colors.border};
  width:100%;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom:80px;
  border-bottom: 1px solid ${colors.border};
`;
export const TopLeft = styled.div`
  width: 50%;
  p {
    margin-top: 26px;
  }
`;
