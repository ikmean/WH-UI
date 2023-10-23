import styled from "styled-components"
import { colors } from "@colors"

export const Wrapper = styled.div`
  margin-top: 168px;
  width: 100%;
  padding-left: 10%;
  h1 {
    font-size: 32px;
  }
`
export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
  font-size: 32px;
`

export const BoxContainer = styled.div`
  width: 40%;
  margin-right: 40px;
  h2 {
    font-size: 22px;
    line-height: 30px;
  }
`

export const Info = styled.div`
  margin-top: 44px;
  padding-right: 20px;
  h2 {
    margin-bottom: 8px;
  }
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 35px 0;
`

export const BoxWrapper = styled.div`
  display: flex;
  overflow: hidden;
`
