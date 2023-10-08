import styled from "styled-components";

export const DropdownBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 83px;
  width: 15.5%;
  padding: 32px 38px 38px 22px;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 14px;
  @media only screen and (max-width:1024px){
    width: 19%;
  }
`;