import styled from "styled-components"
import { colors } from "../../lib/colors"

export const InputStyles = styled.div`
  input {
    height: 64px;
    width: 100%;
    border-radius: 12px;
    background: ${colors.grey};
    border: none;
    padding: 17px 20px;
    margin-bottom: 15px;
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 500;
  }
`
