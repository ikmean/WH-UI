import styled from "styled-components";
import { colors } from "../../lib/colors";

export const DropDownContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 20px;
`;

export const Gap = styled.div`
  display: flex;
  gap: 10px;
`;

export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  height: 83px;
  width: 223.43px;
  padding: 32px 38px 38px 22px;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  color: ${colors.greyText};
  border-radius: 14px;
  &:hover {
    border: 1px solid ${colors.secondary};
    color: ${colors.secondary};
  }
  @media only screen and (max-width: 1024px) {
    width: 19%;
  }
`;

export const DropdownList = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  gap: 10px;
  padding: 32px;
  width: 223.43px;
  background-color: ${colors.white};
  color: ${colors.greyText};
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 14px;
  @media only screen and (max-width: 1024px) {
    width: 19%;
  }
  opacity: 100%;
`;
