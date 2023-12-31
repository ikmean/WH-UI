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
  ImgBtnStyles,
  InfoContainer,
  PropertiesInnerPageContainer,
  TextContent
} from './PropertiesStyles'
import RequestProperty from '../../components/request/RequestProperty'
import { ReactComponent as SQFT } from '../../lib/icons/sqft.svg'
import { Line } from '../../components/articles/ArticlesStyles'
import { InfoBox } from '../../components/featured/FeaturedStyles'
import ImageModal from './ImageModal'
import { ReactComponent as Bed } from '../../lib/icons/bed.svg'
import { ReactComponent as Bath } from '../../lib/icons/bath.svg'
import { ReactComponent as ParkingSmall } from '../../lib/icons/parkingSmall.svg'
import { ReactComponent as Eye } from '../../lib/icons/Eye.svg'
import { ReactComponent as PhotoCamera } from '../../lib/icons/PhotoCamera.svg'
import blackImage from '../../lib/images/blackImage.png'
import { Amenity } from './Amenity'
import Button from '../../components/button/Button'
import Properties from '../../components/properties/Properties'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'

function PropertiesInner() {
  const { context } = useContext(AppContext)
  const { propertyInner, fetchPropertyInnerData, properties, fetchPropertiesData, fetchAgentsInnerData, agentsInner } = context
  const [data, setData] = useState(propertyInner)
  const { id } = useParams()
  const galleryRef = useRef(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (propertyInner) {
      setData(propertyInner)

      if (propertyInner.agent) {
        fetchAgentsInnerData(propertyInner.agent)
      }
    }
  }, [propertyInner])

  useEffect(() => {
    if (id) {
      fetchPropertyInnerData(id)
    }
  }, [id, fetchPropertyInnerData])

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchPropertiesData()
  }, [fetchPropertiesData])

  const handleClick = function () {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = (e) => {
    e.preventDefault()

    setIsModalOpen(false)
  }

  return Util.isNull(data) ? (
    <Loader />
  ) : (
    <PropertiesInnerPageContainer>
      {data && (
        <>
          <ImgBtnStyles>
            <img src={data?.gallery[0]?.url} alt='' width='100%' height='515.05px' />
            <ButtonWrapper>
              <Button
                text={
                  <>
                    <PhotoCamera />
                    <span className='margin'>Browse Gallery</span>
                  </>
                }
                color={'white'}
                borderRadius='50px'
                click={handleClick}
              />
            </ButtonWrapper>
          </ImgBtnStyles>
          <ContentContainer className='container'>
            <RequestProperty rentOrSale={data.dealType} price={data.price} agent={agentsInner} property={id} />
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
                  <span>{data?.bathroom}</span>
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
                  <GalleryStyles key={i} onClick={() => handleImageClick(i)}>
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
      <ImageModal
        isModalOpen={isModalOpen}
        selectedImageIndex={selectedImageIndex}
        setSelectedImageIndex={setSelectedImageIndex}
        data={data}
        closeModal={closeModal}
      />
    </PropertiesInnerPageContainer>
  )
}

export default PropertiesInner
