import React, { useContext } from 'react'
import { BoxWrapper, TextBox, Price, LocationContainer, Line, InfoBox, ImgWrapper, Top, InfoBoxWrapper } from './FeaturedStyles'
import { ReactComponent as Location } from '../../lib/icons/location.svg'
import { ReactComponent as SQFT } from '../../lib/icons/sqft.svg'
import { ReactComponent as Bed } from '../../lib/icons/bed.svg'
import { ReactComponent as Bath } from '../../lib/icons/bath.svg'
import { ReactComponent as ParkingSmall } from '../../lib/icons/parkingSmall.svg'

import { Link } from 'react-router-dom'
import { AppContext } from '../../context/createContext'

export default function FeaturedBox({ data }: any) {
  const { context } = useContext(AppContext)
  const { currency } = context
  console.log(data)
  return (
    <BoxWrapper featured={data?.featured} main={data?.main}>
      <Link to={`/properties/${data?.id?.toString()}`} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <ImgWrapper main={data?.main} featured={data?.featured}>
          <img src={data?.gallery && data?.gallery[0].url} alt='featuredImg1' />
          <div>
            {data?.dealType && (
              <InfoBox
                forSale={data?.dealType === 'For sale' || data?.dealType === 'იყიდება'}
                forRent={data?.dealType === 'For rent' || data?.dealType === 'ქირავდება'}
              >
                {data?.dealType}
              </InfoBox>
            )}
          </div>
        </ImgWrapper>
      </Link>
      <TextBox featured={data?.featured} main={data?.main}>
        <Top featured={data?.featured}>
          <LocationContainer featured={data?.featured}>
            <div>
              <Location />
              <span className='location'>
                {data?.streetAddress}, {data?.city}
              </span>
            </div>
            <div>ID: {data.id}</div>
          </LocationContainer>
          <div>
            <Price featured={data?.featured}>{currency === 'GEL' ? `₾ ${data?.price?.gel}` : `$ ${data?.price?.usd}`}</Price>
          </div>
        </Top>
        <h2>{data?.title}</h2>
        {data?.featured && <p>{data?.description}</p>}
        <Line />
        <InfoBoxWrapper>
          <InfoBox featured={data?.featured}>
            <SQFT />
            <span>{data?.size} m2</span>
          </InfoBox>
          <InfoBox featured={data?.featured}>
            <Bed />
            <span>{data?.bedRoomQuantity}</span>
          </InfoBox>
          <InfoBox featured={data?.featured}>
            <Bath />
            <span>{data.bathroom}</span>
          </InfoBox>
          {data?.featured && (
            <InfoBox featured={data?.featured}>
              <ParkingSmall />
              <span>{data.parking}</span>
            </InfoBox>
          )}
        </InfoBoxWrapper>
      </TextBox>
    </BoxWrapper>
  )
}
