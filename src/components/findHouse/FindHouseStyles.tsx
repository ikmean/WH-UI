import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 160px;
  h1 {
    font-size: 32px;
    line-height: 44px;
    width: 40%;
    width: 25%;
    text-align: center;
    margin-bottom: 63px;
  }
`

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
`
export const BoxStyles = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 27%;
  text-align: center;
  transition: transform 0.3s ease;
  h2 {
    font-size: 22px;
    margin-bottom: 16px;
    margin-top: 39px;
    line-height: 30px;
  }
  span {
    font-size: 18px;
    line-height: 30px;
  }
  &:hover {
    transition: transform 0.3s ease;
    transform: scale(1.03);
  }
`
