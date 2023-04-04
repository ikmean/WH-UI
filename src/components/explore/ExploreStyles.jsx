import styled from "styled-components";

export const ExploreWrapper = styled.div`
  display: flex;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-right: 120px;
  h1 {
    margin-bottom: 14px;
    margin-top: 115px;
  }
`;

export const Right = styled.div`
  display: flex;
  width: 50%;
  img {
    margin-bottom: 20px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  div:nth-child(1) {
    margin-top: 30px;
  }
  div:nth-child(2) {
    position: absolute;
    right: 5%;
  }
`;
