import styled from "styled-components"
import { colors } from "../../lib/colors"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BoxStyles = styled.div`
  padding: 85px 108px 92px 65px;
  width: 48%;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  transition: background-color 0.5s ease;
  cursor: pointer;
  h1 {
    font-size: 32px;
    margin-bottom: 14px;
  }
  p {
    margin-bottom: 34px;
    color: ${colors.greyText};
  }
  &:hover {
    background: black;
    h1 {
      color: white;
    }

    .button {
      background: ${colors.secondary};
    }
  }
`
