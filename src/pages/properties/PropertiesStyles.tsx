import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'

export const PropertiesInnerPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  img {
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;
  }
`

export const ImgBtnStyles = styled.div`
  position: relative;
  width: 100%;
  height: 515.05px;
`

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 60px;
  bottom: 40px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
`

export const ContentContainer = styled.div`
  position: relative;
`

export const TextContent = styled.div`
  width: 60%;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 1s forwards;
  h3 {
    margin-top: 63px;
    margin-bottom: 5px;
    color: ${colors.greyText};
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
  h1 {
    font-size: 32px;
    margin-bottom: 21px;
  }
  h2 {
    font-size: 22px;
    margin-bottom: 18px;
    margin-top: 60px;
  }
  p,
  h3 {
    color: ${colors.greyText};
    font-size: 18px;
  }
  p {
    margin-bottom: 58px;
  }
`

export const InfoContainer = styled.div`
  margin-bottom: 30px;
`

export const AmenityContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr 1fr;
  margin-top: 46px;
`

export const AmenityStyles = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  margin-bottom: 46px;
  span {
    margin-left: 25px;
  }
`

export const EyeStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.grey};
  padding: 10px 15px;
  border-radius: 50%;
`

export const BlackImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 31px;
  grid-gap: 41px;
  margin-bottom: 160px;
  img {
    width: 298px;
    height: 307.49px;
  }
`

export const GalleryStyles = styled.div`
  position: relative;
  &:hover ${EyeStyles} {
    opacity: 100;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover ${BlackImage} {
    opacity: 0.6;
    transition: opacity 0.3s ease-in-out;
    cursor: pointer;
  }
  &:hover {
    img {
      opacity: 0.33;
      transition: opacity 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`

export const BrowseMore = styled.div`
  /* background: ${colors.greyDarker}; */
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 128px;
`

export const ButtonsStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Buttons = styled.button`
  z-index: 2000;
  display: flex;
  align-items: center;
  margin: auto;
  background-color: transparent;
  color: ${colors.greyDarker};
  border-radius: 12px;
  border: 1px solid var(--neutral-300);
  width: 56px;
  box-shadow: 0 2px 8px rgba(20, 20, 43, 0.06);
  cursor: pointer;
  width: fit-content;
  /* padding: 20px 15px; */
  svg {
    width: 45px;
    height: 45px;
    path {
      stroke: ${colors.greyText};
    }
  }
  &:hover {
    svg {
      path {
        stroke: ${colors.grey};
      }
    }
  }
`

export const ButtonClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  color: ${colors.greyDarker};
  border-radius: 12px;
  border: 1px solid var(--neutral-300);
  width: 56px;
  box-shadow: 0 2px 8px rgba(20, 20, 43, 0.06);
  cursor: pointer;
  width: fit-content;
  padding: 30px 30px;
  svg {
    width: 20px;
    height: 20px;
    path {
      stroke: ${colors.greyText};
      stroke-width: 5;
    }
  }
  &:hover {
    svg {
      path {
        stroke: ${colors.grey};
      }
    }
  }
`
