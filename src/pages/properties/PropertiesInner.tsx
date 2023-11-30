/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useState } from 'react'
import cover from '../../lib/images/cover.png'
import {
  AmenityContainer,
  BrowseMore,
  ContentContainer,
  GalleryContainer,
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
import { Amenity } from './Amenity'
import Button from '../../components/button/Button'
import Properties from '../../components/properties/Properties'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'

function PropertiesInner() {
  const { context } = useContext(AppContext)
  const { propertyInner, fetchPropertyInnerData, properties, fetchPropertiesData, fetchAgentsInnerData, agentsInner } = context
  const [data, setData] = useState(propertyInner)
  const [isHovering, setIsHovering] = useState(false)
  const { id } = useParams()

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

  return (
    <PropertiesInnerPageContainer>
      <img src={cover} alt='' width='100%' height='515.05px' />
      {data && (
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
              <InfoBox>
                <SQFT />
                <span>{data.size}</span>
              </InfoBox>
              <InfoBox featured={true}>
                <Bed />
                <span>{data.bedRoomQuantity}</span>
              </InfoBox>
              <InfoBox>
                <Bath />
                <span>9</span>
              </InfoBox>
              <InfoBox>
                <ParkingSmall />
                <span>4</span>
              </InfoBox>
            </InfoContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit etiam cras tellus sit tempor amet, nascetur quam ornare proin platea
              diam amet sed fringilla eget pretium id sagittis in porttitor pharetra dui. A venenatis molestie vitae rutrum eu leo gravida
              odio arcu neque nulla etiam adipiscing amet. Diam sit tempor ut quis sodales tellus aliquam aliquam quis a nisl sapien nunc id
              etiam penatibus.
            </p>
            <Line />
            <h2>About the property</h2>
            <p>{data.description}</p>
            <br />
            <Line />
            <h2>Property amenities</h2>
            <AmenityContainer>
              {data.amenities.map((data: any, i: number) => (
                <Amenity text={data} key={i} />
              ))}
            </AmenityContainer>
          </TextContent>
          <Line />
          <div>
            <div className='flex space-between center'>
              <h1>Property gallery</h1>
              <Button text='Request info' color='black' to='/' />
            </div>
            <GalleryContainer>
              {data.gallery.map((photo: any, i: number) => (
                <img key={i} src={photo.url} alt='img' />
              ))}

              {/* if(isHovering){
  <Eye/>
}else{
  <img
} */}

              <Eye />
            </GalleryContainer>
          </div>
        </ContentContainer>
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
