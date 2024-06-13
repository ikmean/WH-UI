import React, { useContext, useEffect, useState } from 'react'
import { UploadContainer, UploadHeader, UploadForm, Label, Amenities } from './UploadStyles'
import { useTranslation } from 'react-i18next'
import UploadWidget from './Cloudinary'
import Button from '../../components/button/Button'
import { AppContext } from '../../context/createContext'

export default function UploadPage() {
  const { t } = useTranslation()
  const { context } = useContext(AppContext)
  const {
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    fetchAgentsData,
    fetchDistrictsData,
    fetchAmenitiesData,
    fetchDevelopersData,
    agents,
    location,
    propertyCategory,
    dealType,
    districts,
    developers,
    amenities,
    locale,
    uploadProperty
  } = context

  const initialData = {
    title: '',
    description: '',
    size: 0,
    bedroomQuantity: 0,
    price: 0,
    streetAddress: '',
    propertyAmenities: [],
    propertyCategory: '',
    dealType: '',
    developer: '',
    agent: '',
    pinned: false,
    city: '',
    district: '',
    aboutProperty: '',
    bathroom: 0,
    parking: 0,
    gallery: '',
    locale: 'ka'
  }

  const [formData, setFormData] = useState(initialData)

  useEffect(() => {
    fetchLocationData(locale)
    fetchPropertyCategoryData(locale)
    fetchDealTypeData(locale)
    fetchAgentsData(locale)
    fetchDistrictsData(locale)
    fetchAmenitiesData(locale)
    fetchDevelopersData(locale)
  }, [
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    fetchAgentsData,
    fetchDistrictsData,
    fetchAmenitiesData,
    fetchDevelopersData,
    locale
  ])

  function clear() {
    setFormData(initialData)
    window.localStorage.setItem('uploadedMediaUrls', JSON.stringify([]))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mediaUrls = JSON.stringify(window.localStorage.getItem('uploadedMediaUrls'))
    console.log(mediaUrls)
    setFormData({ ...formData, gallery: mediaUrls })
    uploadProperty(formData)

    // clear()
  }

  function handleAmenityChange(e) {
    const value = e.target.value
    setFormData((prevFormData) => {
      if (prevFormData.propertyAmenities.includes(value)) {
        return {
          ...prevFormData,
          propertyAmenities: prevFormData.propertyAmenities.filter((amenity) => amenity !== value)
        }
      } else {
        return {
          ...prevFormData,
          propertyAmenities: [...prevFormData.propertyAmenities, value]
        }
      }
    })
  }

  return (
    <UploadContainer>
      <UploadHeader>
        <h1>{t('Post a property for sale or rent')}</h1>
        <p>
          {t('loreLorem ipsum dolor sit amet consectetur adipiscing elit eleifend nullam eros, nulla erat magnis inceptos aptent hac odi.')}
        </p>
      </UploadHeader>
      <UploadForm>
        <form onSubmit={handleSubmit}>
          <section>
            <div>
              <Label>{t('Lising title')}</Label>
              <input
                type='text'
                placeholder={t('Property listing title')}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('Property Deal type')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, dealType: e.target.value })}>
                <option value='' disabled>
                  Select deal type
                </option>
                {dealType.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>{t('Listing type')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, propertyCategory: e.target.value })}>
                <option value='' disabled>
                  Select listing type
                </option>
                {propertyCategory.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>{t('About property')}</Label>
              <input
                type='text'
                maxLength={400}
                placeholder={t('Please enter up to 400 characters')}
                id='shortDesc'
                onChange={(e) => setFormData({ ...formData, aboutProperty: e.target.value })}
              />
            </div>
            <br />
            <div></div>
            <div>
              <Label>{t('City')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, city: e.target.value })}>
                <option value='' disabled>
                  Select city
                </option>
                {location && location.length > 0 ? (
                  location.map((location) => (
                    <option key={location.id} value={location.title}>
                      {location.title}
                    </option>
                  ))
                ) : (
                  <option disabled>{t('No city available')}</option>
                )}
              </select>
            </div>
            <div>
              <Label>{t('District')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, district: e.target.value })}>
                <option value='' disabled>
                  Select district
                </option>
                {districts && districts.length > 0 ? (
                  districts.map((district) => (
                    <option key={district.id} value={district.title}>
                      {district.title}
                    </option>
                  ))
                ) : (
                  <option disabled>{t('No districts available')}</option>
                )}
              </select>
            </div>
            <div>
              <Label>{t('Address')}</Label>
              <input
                type='text'
                placeholder={t('ex. 5 Kedia st.')}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('Bedrooms')}</Label>
              <input
                type='number'
                placeholder='ex. 1'
                onChange={(e) => setFormData({ ...formData, bedroomQuantity: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Bathrooms')}</Label>
              <input type='number' placeholder='ex. 1' onChange={(e) => setFormData({ ...formData, bathroom: Number(e.target.value) })} />
            </div>
            <div>
              <Label>{t('Parking lots')}</Label>
              <input type='number' placeholder='ex. 1' onChange={(e) => setFormData({ ...formData, parking: Number(e.target.value) })} />
            </div>
            <div>
              <Label>{t('Listing price in USD')}</Label>
              <input
                type='number'
                placeholder={t('ex. $10 000')}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Area in m2')}</Label>
              <input type='number' placeholder='ex. 1000' onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })} />
            </div>
            <div>
              <Label>{t('Developer')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, developer: e.target.value })}>
                <option value='' disabled>
                  Select developer
                </option>
                {developers && developers.length > 0 ? (
                  developers.map((developer) => (
                    <option key={developer.id} value={developer.id}>
                      {developer.title}
                    </option>
                  ))
                ) : (
                  <option disabled>{t('No developers available')}</option>
                )}
              </select>
            </div>
            <div>
              <Label>{t('Agent')}</Label>
              <select name='Select' defaultValue='' onChange={(e) => setFormData({ ...formData, agent: e.target.value })}>
                <option value='' disabled>
                  Select agent
                </option>
                {agents && agents.length > 0 ? (
                  agents.map((agent) => (
                    <option key={agent.id} value={agent.id}>
                      {agent.name} {agent.lastName}
                    </option>
                  ))
                ) : (
                  <option disabled>{t('No agents available')}</option>
                )}
              </select>
            </div>
          </section>
          <>
            <div>
              <Label>{t('Lising description')}</Label>
              <input
                type='text'
                maxLength={4000}
                placeholder={t('Please enter up to 4000 characters')}
                id='longDesc'
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('Property amenities')}</Label>
              <Amenities>
                {amenities &&
                  amenities.map((amenity) => (
                    <label key={amenity.id}>
                      <input type='checkbox' value={amenity.id} onChange={handleAmenityChange} />
                      {amenity.title}
                    </label>
                  ))}
              </Amenities>
            </div>
            <div id='listing-imgs'>
              <div>
                <label>Listing images</label>
                <p>Please upload your listing images</p>
              </div>
              <UploadWidget />
            </div>
          </>
          <div id='submit-btn'>
            <Button text={'Submit'} color={'black'} click={handleSubmit} />
          </div>
        </form>
      </UploadForm>
    </UploadContainer>
  )
}
