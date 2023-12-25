import React, { useState } from 'react'
import { BoxWrapper, TextBox, Price, LocationContainer, Line, InfoBox, ImgWrapper, Top, CurrencyIcons } from './FeaturedStyles'
import { ReactComponent as Location } from '../../lib/icons/location.svg'
import { ReactComponent as SQFT } from '../../lib/icons/sqft.svg'
import { ReactComponent as Bed } from '../../lib/icons/bed.svg'
import { ReactComponent as Bath } from '../../lib/icons/bath.svg'
import { ReactComponent as ParkingSmall } from '../../lib/icons/parkingSmall.svg'
import { ReactComponent as Gel } from '../../lib/icons/gel.svg'
import { ReactComponent as Usd } from '../../lib/icons/usd.svg'

import { Link } from 'react-router-dom'

export default function FeaturedBox({ data }: any) {
  const [selectedCurrency, setSelectedCurrency] = useState('gel')

  const handleCurrencySwitch = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault()

    setSelectedCurrency((prevCurrency) => (prevCurrency === 'gel' ? 'usd' : 'gel'))
  }

  return (
    <BoxWrapper featured={data.featured} main={data.main}>
      <Link to={`/properties/${data.id.toString()}`}>
        <ImgWrapper main={data.main} featured={data.featured}>
          <img src={data.gallery[0].url} alt='featuredImg1' />
          <div>
            {data.dealType && (
              <InfoBox forSale={data.dealType === 'Sale'} forRent={data.dealType === 'Rent'}>
                {data.dealType === 'Sale' ? 'For Sale' : 'For Rent'}
              </InfoBox>
            )}
          </div>
        </ImgWrapper>
        <TextBox featured={data.featured} main={data.main}>
          <Top featured={data.featured}>
            <LocationContainer featured={data.featured}>
              <Location />
              <span className='location'>
                {data.streetAddress}, {data.city}
              </span>
            </LocationContainer>
            <div onClick={handleCurrencySwitch}>
              <Price featured={data.featured}>{selectedCurrency === 'gel' ? `₾${data.price.gel}` : `$${data.price.usd}`}</Price>
              <CurrencyIcons>
                <Gel />
                <Usd />
              </CurrencyIcons>
            </div>
          </Top>
          <h2>{data.title}</h2>
          {data.featured && <p>{data.description}</p>}
          <Line />
          <div>
            <InfoBox featured={data.featured}>
              <SQFT />
              <span>{data.size} m2</span>
            </InfoBox>
            <InfoBox featured={data.featured}>
              <Bed />
              <span>{data.bedRoomQuantity}</span>
            </InfoBox>
            <InfoBox featured={data.featured}>
              <Bath />
              <span>9</span>
            </InfoBox>
            {data.featured && (
              <InfoBox featured={data.featured}>
                <ParkingSmall />
                <span>4</span>
              </InfoBox>
            )}
          </div>
        </TextBox>
      </Link>
    </BoxWrapper>
  )
}
