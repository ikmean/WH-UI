/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useState, useRef } from 'react'
import {
  AmenityContainer,
  BlackImage,
  BrowseMore,
  ButtonWrapper,
  ContentContainer,
  EyeStyles,
  GalleryContainer,
  GalleryStyles,
  InfoContainer,
  PropertiesInnerPageContainer,
  TextContent
} from './PropertiesStyles'
import RequestProperty from '../../components/request/RequestProperty'
import { ReactComponent as SQFT } from '../../lib/icons/sqft.svg'
import { Line } from '../../components/articles/ArticlesStyles'
import { InfoBox } from '../../components/featured/FeaturedStyles'
import { ReactComponent as Bed } from '../../lib/icons/bed.svg'
import { ReactComponent as Bath } from '../../lib/icons/bath.svg'
import { ReactComponent as ParkingSmall } from '../../lib/icons/parkingSmall.svg'
import { ReactComponent as Eye } from '../../lib/icons/Eye.svg'
import blackImage from '../../lib/images/blackImage.png'
import { Amenity } from './Amenity'
import Button from '../../components/button/Button'
import Properties from '../../components/properties/Properties'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'

function PropertiesInner() {
  const { context } = useContext(AppContext)
  const { propertyInner, fetchPropertyInnerData, properties, fetchPropertiesData, fetchAgentsInnerData, agentsInner } = context
  const [data, setData] = useState(propertyInner)
  const { id } = useParams()
  const galleryRef = useRef(null)

  useEffect(() => {
    if (propertyInner) {
      setData(propertyInner)

      if (propertyInner.agent) {
        fetchAgentsInnerData(propertyInner.agent)
        console.log(agentsInner)
      }
    }
  }, [propertyInner])

  useEffect(() => {
    if (id) {
      fetchPropertyInnerData(id)
    }
  }, [id, fetchPropertyInnerData])

  useEffect(() => {
    fetchPropertiesData()
  }, [fetchPropertiesData])

  const handleClick = function () {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }

  return (
    <PropertiesInnerPageContainer>
      {data && (
        <>
          <img src={data?.gallery[0]?.url} alt='' width='100%' height='515.05px' />
          <ButtonWrapper>
            <Button text={'Browse Gallery'} color={'white'} click={handleClick} />
          </ButtonWrapper>
          <ContentContainer className='container'>
            <RequestProperty rentOrSale={data.dealType} price={data.price} agent={agentsInner} />
            <TextContent>
              <h3>{data.streetAddress}</h3>
              <h1>{data.title}</h1>
              <InfoContainer className='flex'>
                <InfoBox>
                  <SQFT />
                  <span>{data.size} m²</span>
                </InfoBox>
                <InfoBox featured={true}>
                  <Bed />
                  <span>{data.bedRoomQuantity}</span>
                </InfoBox>
                <InfoBox>
                  <Bath />
                  <span>{data?.bathRoom}</span>
                </InfoBox>
                {data.parking && (
                  <InfoBox>
                    <ParkingSmall />
                    <span>{data.parking}</span>
                  </InfoBox>
                )}
              </InfoContainer>
              <p>{data?.description}</p>
              <Line />
              <h2>About the property</h2>
              <p>{data?.aboutProperty}</p>
              <br />
              <Line />
              <h2>Property amenities</h2>
              <AmenityContainer>
                {data.amenities.map((data, i) => (
                  <Amenity text={data.svg} key={i} />
                ))}
              </AmenityContainer>
            </TextContent>
            <Line />
            <div>
              <div ref={galleryRef} className='flex space-between center'>
                <h1>Property gallery</h1>
                <Button text='Request info' color='black' to='/' />
              </div>
              <GalleryContainer>
                {data.gallery.map((photo, i) => (
                  <GalleryStyles key={i}>
                    <img key={i} src={photo.url} alt='img' />
                    <BlackImage>
                      <img src={blackImage} alt='blackImage' />
                    </BlackImage>
                    <EyeStyles>
                      <Eye />
                    </EyeStyles>
                  </GalleryStyles>
                ))}
              </GalleryContainer>
            </div>
          </ContentContainer>
        </>
      )}
      <BrowseMore>
        <div className='container'>
          <Properties title='Browse more properties' properties={properties} />
        </div>
      </BrowseMore>
    </PropertiesInnerPageContainer>
  )
}

export default PropertiesInner
