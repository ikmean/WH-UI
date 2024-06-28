/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

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
import RequestProperty from '../../components/request/CustomerContactRequest'
import { ReactComponent as SQFT } from '../../lib/icons/sqft.svg'
import { Line } from '../../components/articles/ArticlesStyles'
import { InfoBox } from '../../components/featured/FeaturedStyles'
import { ImageModal } from './ImageModal'
import { ReactComponent as Bed } from '../../lib/icons/bed.svg'
import { ReactComponent as Bath } from '../../lib/icons/bath.svg'
import { ReactComponent as ParkingSmall } from '../../lib/icons/parkingSmall.svg'
import { ReactComponent as Eye } from '../../lib/icons/Eye.svg'
import { ReactComponent as Play } from '../../lib/icons/Play.svg'
import { ReactComponent as PhotoCamera } from '../../lib/icons/PhotoCamera.svg'
import blackImage from '../../lib/images/blackImage.jpg'
import { Amenity } from './Amenity'
import Button from '../../components/button/Button'
import Properties from '../../components/properties/Properties'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'
import MapComponent from '../../map component/MapComponent'
import SEO from '../../components/seo'

function PropertiesInner() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { propertyInner, fetchPropertyInnerData, properties, fetchPropertiesData, locale } = context
  const { id } = useParams()
  const galleryRef = useRef(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    if (id) {
      fetchPropertyInnerData(id)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [id, fetchPropertyInnerData])

  useEffect(() => {
    fetchPropertiesData({ locale })
  }, [fetchPropertiesData])

  const handleClick = function () {
    galleryRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = (e) => {
    e.preventDefault()

    setIsModalOpen(false)
  }

  return Util.isNull(propertyInner) ? (
    <>
      <SEO title={`Warm House, Real Estate Agency, Properties`} description={`Warm House, Real Estate Agency, Properties`} />
      <Loader />
    </>
  ) : (
    <>
      <PropertiesInnerPageContainer>
        {propertyInner && (
          <>
            <SEO title={`Warm House - ${propertyInner?.title}`} description={`${propertyInner?.description}`} />

            <ImgBtnStyles>
              <img src={propertyInner?.gallery[0].url} alt='' width='100%' height='500px' />
              <ButtonWrapper>
                <Button
                  text={
                    <>
                      <PhotoCamera />
                      <span className='margin'>{t('BrowseGallery')}</span>
                    </>
                  }
                  color={'white'}
                  borderRadius='50px'
                  click={handleClick}
                />
              </ButtonWrapper>
            </ImgBtnStyles>
            <ContentContainer className='container'>
              <TextContent>
                <h3>{propertyInner?.streetAddress}</h3>
                <span>ID: {propertyInner.id}</span>
                <h1>{propertyInner?.title}</h1>

                <InfoContainer className='flex'>
                  <InfoBox>
                    <SQFT />
                    <span>{propertyInner?.size} m²</span>
                  </InfoBox>
                  <InfoBox featured={true}>
                    <Bed />
                    <span>{propertyInner?.bedRoomQuantity}</span>
                  </InfoBox>
                  <InfoBox>
                    <Bath />
                    <span>{propertyInner?.bathroom}</span>
                  </InfoBox>
                  {propertyInner?.parking && (
                    <InfoBox>
                      <ParkingSmall />
                      <span>{propertyInner?.parking}</span>
                    </InfoBox>
                  )}
                </InfoContainer>
                <p>{propertyInner?.description}</p>
                <Line />
                <h2>{t('AboutTheProperty')}</h2>
                <p>{propertyInner?.aboutProperty}</p>
                <br />
                <Line />
                <h2>{t('PropertyAmenities')}</h2>
                <AmenityContainer>
                  {propertyInner?.amenities?.map((data, i) => (
                    <Amenity text={data?.svg} key={i} />
                  ))}
                </AmenityContainer>
              </TextContent>
              <Line />
              <RequestProperty
                rentOrSale={propertyInner?.dealType}
                price={propertyInner?.price}
                agent={propertyInner?.agent}
                property={id}
              />
              <Line />
              <div>
                <div ref={galleryRef} className='flex space-between center'>
                  <h1>{t('PropertyGallery')}</h1>
                </div>
                <GalleryContainer>
                  {propertyInner?.gallery?.map((el, i) => (
                    <GalleryStyles key={i} onClick={() => handleImageClick(i)}>
                      {el.type === 'photo' && <img key={i} src={el?.url} alt='img' />}
                      {el.type === 'video' && (
                        <img
                          key={i}
                          src={'https://res.cloudinary.com/ikameancloud/image/upload/v1718033593/warmHouse/hg0ed5abrcm2ef78omyy.png'}
                          alt='img'
                        />
                      )}
                      <BlackImage>
                        <img src={blackImage} alt='blackImage' />
                      </BlackImage>
                      <EyeStyles>
                        {el.type === 'photo' && <Eye />}
                        {el.type === 'video' && <Play />}
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
            <Properties title={t('BrowseProperties')} properties={properties} />
          </div>
        </BrowseMore>
        <ImageModal
          isModalOpen={isModalOpen}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          data={propertyInner}
          closeModal={closeModal}
        />
      </PropertiesInnerPageContainer>
      <MapComponent address={propertyInner.streetAddress} lat={propertyInner.lat} lng={propertyInner.lng} />
    </>
  )
}

export default PropertiesInner
