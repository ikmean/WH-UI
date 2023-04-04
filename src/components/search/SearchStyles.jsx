import styled from "styled-components";

export const SearchContainerStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 84px;
`;

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 83px;
  width: 500px;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 14px;
  padding: 16px 17px 21px 16px;
  span {
    padding-left: 20px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
