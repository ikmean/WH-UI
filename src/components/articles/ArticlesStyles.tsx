import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const Wrapper = styled.div`
  margin-top: 166px;
  padding-bottom: 100px;
  width: 100%;
  padding-left: 5%;
  h1 {
    font-size: 32px;
  }
`

export const Header = styled.div`
  width: 100%;
  margin-bottom: 41px;
  display: flex;
  justify-content: space-between;
`

export const BoxContainer = styled.div<{ type: string }>`
  display: flex;
  flex-direction: column;
  margin-right: ${({ type }) => (type === 'default' ? '0' : '30px')};
  height: ${({ type }) => type === 'readMoreSmall' && '179px'};
  width: ${({ type }) => type === 'description' && '50%'};
  width: ${({ type }) => type === 'readMoreSmall' && '100%'};
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  border-radius: 26px;
  :nth-child(3) {
    margin-right: 0;
  }
  img {
    object-fit: cover;
    border-top-left-radius: 26px;
    border-top-right-radius: ${({ type }) => type !== 'readMoreSmall' && '26px'};
    border-bottom-left-radius: ${({ type }) => type === 'readMoreSmall' && '26px'};
    width: ${({ type }) => type === 'readMoreSmall' && '232.91px'};
    height: ${({ type }) => type === 'readMoreSmall' && '179.28px'};
    height: ${({ type }) => type === 'description' && '377px'};
    max-height: 60%;
    transition: transform 0.3s;
  }
  h2 {
    font-size: 22px;
    line-height: 30px;
  }
  p {
    color: ${colors.greyText};
    font-size: 18px;
    margin-top: 16px;
    padding-bottom: 56px;
  }
  span {
    display: inline-block;
    /* color: red; */ //TODO
    margin-right: 13px;
    margin-top: 21px;
    font-size: 18px;
  }
  &:hover {
    box-shadow: 0 10px 30px 0 ${colors.grey};
    transform: translate(0, -3px);
    img {
      transform: scale(1.03);
    }
    h2 {
      color: ${colors.secondary};
    }
    svg {
      transition: transform 0.2s ease-in-out;
      transform: translate(5px, -5px);
    }
  }
`

export const Info = styled.div`
  margin-top: 31px;
  padding: 0 25px;
  flex-grow: 1;
`

export const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.greyText};
  padding-bottom: 33px;
  margin-top: 31px;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: ${colors.border};
  margin: 25px 0;
`

export const BoxWrapper = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: 15px;
  gap: 30px;
`

export const ArticleButtonWrapper = styled.div`
  display: flex;
  padding-right: 24px;
  gap: 20px;
`

export const ArticleButton = styled.button`
  display: flex;
  align-items: center;
  margin: auto;
  background-color: ${colors.white};
  border-radius: 12px;
  border: 1px solid var(--neutral-300);
  width: 56px;
  max-height: 56px;
  min-height: 56px;
  min-width: 56px;
  font-size: 19px;
  box-shadow: 0 2px 8px rgba(20, 20, 43, 0.06);
  cursor: pointer;
  width: fit-content;
  padding: 20px 15px;
  &:hover {
    background-color: ${colors.primary};
  }
`

export const ArticleList = styled.div`
  display: flex;
  flex-direction: row;
  grid-template-rows: 50% 50%;
  grid-template-columns: 1fr;
  gap: 20px;
  height: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`

export const ArticleBoxList = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 643.5px;
  overflow-y: auto;
  width: 100%;
  gap: 50px;
`

export const ArticleBoxSmall = styled.div<{ type: string }>`
  display: ${({ type }) => type === 'readMoreSmall' && 'flex'};
  flex-direction: ${({ type }) => type === 'readMoreSmall' && 'row'};
`

export const ReadMore = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  color: ${colors.secondary};
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  display: inline-block;
  /* &:hover {
    transition: transform 0.2s ease-in-out;
    transform: translate(2px, -2px);
  } */
`
