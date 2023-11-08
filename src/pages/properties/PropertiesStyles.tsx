import styled from 'styled-components'
import { colors } from '../../lib/colors'

export const PropertiesInnerPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
export const ContentContainer = styled.div`
  position: relative;
`
export const TextContent = styled.div`
  width: 60%;
  h3 {
    margin-top: 63px;
    margin-bottom: 5px;
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

export const BrowseMore = styled.div`
  background: ${colors.greyDarker};
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 128px;
`
