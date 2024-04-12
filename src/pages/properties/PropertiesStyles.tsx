import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { slideAnimation } from '../../styles'
import { media } from '../../helpers/device'

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
  img {
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  left: 60px;
  bottom: 40px;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;

  ${media.md`
    position: initial;
  `}
`

export const ContentContainer = styled.div`
  position: relative;

  ${media.md`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const TextContent = styled.div`
  width: 60%;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 1s forwards;
  span {
    color: ${colors.greyText};
    padding: 1rem 0;
  }
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

  ${media.xs`
    width: 90%;

    h3{
      margin-top: 2rem;
    }
  `}
`

export const InfoContainer = styled.div`
  margin-bottom: 30px;

  ${media.xs`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  `}
`

export const AmenityContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 2rem;
  margin-top: 46px;

  ${media.md`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 1rem;
  `}
`

export const AmenityStyles = styled.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  margin-bottom: 46px;

  span {
    margin-left: 25px;
  }
  ${media.xs`
    justify-content: flex-start;
    gap: 2rem;
    span{
      margin-left: 1rem;
    }
  `}
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
  max-width: 600px;
`

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 31px;
  grid-gap: 41px;
  margin-bottom: 160px;
  img {
    width: auto;
    height: 307.49px;
  }

  ${media.md`
    grid-template-columns: auto auto;
    img{
      width: 20rem;
      height: 10rem;
    }
  `}

  ${media.xs`
    grid-template-columns: auto;
    height: auto;
  `}
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

export const ModalImage = styled.img`
  height: 60%;
  width: 80%;

  ${media.md`
    height: auto;
  `}
`
