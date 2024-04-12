import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    line-height: 30px;
    color: ${colors.greyText};
  }
`

export const AgentsList = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 25px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.sm`
    grid-template-columns: auto ;
  `}
`

export const AgentBoxStyles = styled.div<{ type: string }>`
  box-shadow: ${({ type }) => type !== 'small' && '0px 3px 20px rgba(8, 15, 52, 0.06)'};
  border-radius: 26px;
  overflow: hidden;
  transition: transform 0.3s ease;

  img {
    border-top-left-radius: 26px;
    border-top-right-radius: 26px;
    border-radius: 12px;
    border-radius: ${({ type }) => type === 'small' && '50%'};
    width: 100%;
    height: ${({ type }) => type !== 'small' && '400px'};
    transition: transform 0.3s;
  }
  a {
    display: 'flex';
  }
  box-shadow: ${({ type }) => type !== 'small' && '0 10px 30px 0 ${colors.grey}'};
  &:hover {
    transition: transform 0.3s ease;
    transform: ${({ type }) => type !== 'small' && ' translateY(-8px)'};
    h2 {
      color: ${colors.secondary};
    }
    img {
      transform: scale(1.03);
    }
  }
  span {
    &:hover {
      color: ${({ type }) => type === 'small' && 'red'};
    }
  }
`

export const ImgWrapper = styled.div<{ type: any }>`
  position: relative;
  width: ${({ type }) => type === 'page' && '40%'};
  width: ${({ type }) => type === 'small' && '25%'};
  height: ${({ type }) => type === 'page' && '580px'};
  flex-shrink: 0;
  div {
    position: absolute;
    top: 20px;
    right: 0;
    width: max-content;
  }
`

export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 1px 6px rgba(20, 20, 43, 0.09);
  border-radius: 60px;
  padding: 12px 22px;
  margin-right: 18px;
  background: ${colors.secondary};
  color: white;
`

export const TextBox = styled.div<{ type: any }>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ type }) => type === 'page' && 'center'};
  margin-bottom: ${({ type }) => (type === 'small' ? '' : '15px')};
  margin-top: ${({ type }) => (type === 'small' ? '' : '36px')};
  text-align: left;
  padding: ${({ type }) => (type === 'small' ? '0 22px' : type === 'page' ? '0 7% 0 8%' : '0 40px 30px 40px')};
  h2 {
    margin-bottom: 8px;
    font-size: ${({ type }) => (type === 'small' ? '20px' : '22px')};
  }
  div {
    margin-bottom: ${({ type }) => (type === 'small' ? '' : '20px')};
  }

  ${media.xs`
    padding: 0.5rem;
  `}
`

export const AgentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 67px;
`

export const ContactStyles = styled.div<{ type: any }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  word-break: break-all;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: ${({ type }) => type === 'small' && '14px'};
    svg {
      width: ${({ type }) => (type === 'small' ? '18px' : '')};
      height: ${({ type }) => (type === 'small' ? '18px' : '')};
    }
    span {
      margin-left: ${({ type }) => (type === 'small' ? '11px' : '16.7px')};
    }
  }
`
