import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { media } from '../../helpers/device'

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`

export const BoxStyles = styled.div`
  background: ${colors.grey};
  border-radius: 12px;
  margin-top: 22px;
  margin-bottom: 12px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding-right: 20px;
  border: 1px solid transparent;
  transition: transform 0.3s ease;
  &:hover {
    border-color: ${colors.secondary};
    transition: transform 0.3s ease;
  }

  ${media.md`
    justify-content: space-between;
    width: 80%;
  `}
`

export const H1 = styled.p`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
`

//subscribe input
export const SubscribeInputStyles = styled.div`
  input {
    display: flex;
    border: none;
    border-radius: 12px;
    border: 1px solid transparent;
    background: ${colors.grey};
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 400;
    outline: none;
    width: 360.27px;
    height: 30px;
    top: 130.38px;
    left: 895.05px;
    padding: 30px 20px;
    transition: transform 0.3s ease;
    :focus::placeholder {
      color: transparent;
    }
  }

  ${media.md`
    justify-content: space-between;
   
    input{
      width: 80%;
    } 
  `}
`

export const SuccessMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${colors.secondary};
  background-color: ${colors.pink};
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  height: 150px;
  width: 460px;
  padding-left: 30px;
  font-size: 20px;
`
