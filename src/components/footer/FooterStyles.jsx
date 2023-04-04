import styled from "styled-components";
import { colors } from "../../lib/colors";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 82px;
  border-top: 1px solid ${colors.border};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const TopLeft = styled.div`
  width: 50%;
  p {
    margin-top: 26px;
  }
`;
