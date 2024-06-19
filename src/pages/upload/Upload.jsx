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
    size: '',
    bedroomQuantity: null,
    price: null,
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
    bathroom: null,
    parking: null,
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
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await uploadProperty(formData)
    clear()
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
        <h1>{t('PostAProperty')}</h1>
        <p>{t('UploadPageDesc')}</p>
      </UploadHeader>
      <UploadForm>
        <form onSubmit={handleSubmit}>
          <section>
            <div>
              <Label>{t('ListingTitle')}</Label>
              <input
                type='text'
                placeholder={t('PropertyListing')}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('DealType')}</Label>
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, dealType: e.target.value })}
                value={formData.dealType}
              >
                <option value='' disabled>
                  {t('Selectdealtype')}
                </option>
                {dealType.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>{t('ListingType')}</Label>
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, propertyCategory: e.target.value })}
                value={formData.propertyCategory}
              >
                <option value='' disabled>
                  {t('Selectlistingtype')}
                </option>
                {propertyCategory.map((category) => (
                  <option key={category.id} value={category.title}>
                    {category.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>{t('AboutTheProperty')}</Label>
              <input
                type='text'
                maxLength={400}
                placeholder={t('Numcharacters')}
                value={formData.aboutProperty}
                id='shortDesc'
                onChange={(e) => setFormData({ ...formData, aboutProperty: e.target.value })}
              />
            </div>
            <br />
            <div></div>
            <div>
              <Label>{t('City')}</Label>
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                value={formData.location}
              >
                <option value='' disabled>
                  {t('Selectcity')}
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
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                value={formData.district}
              >
                <option value='' disabled>
                  {t('Selectdistrict')}
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
                value={formData.streetAddress}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('Bedrooms')}</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.bedroomQuantity}
                onChange={(e) => setFormData({ ...formData, bedroomQuantity: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Bathrooms')}</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.bathroom}
                onChange={(e) => setFormData({ ...formData, bathroom: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Parking')}</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.parking}
                onChange={(e) => setFormData({ ...formData, parking: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Price')}</Label>
              <input
                type='number'
                placeholder={t('ex10000')}
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Area')}</Label>
              <input
                type='number'
                placeholder={t('ex100')}
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Developer')}</Label>
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, developer: e.target.value })}
                value={formData.developer}
              >
                <option value='' disabled>
                  {t('Selectdeveloper')}
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
              <select
                name='Select'
                defaultValue=''
                onChange={(e) => setFormData({ ...formData, agent: e.target.value })}
                value={formData.agent}
              >
                <option value='' disabled>
                  {t('Selectagent')}
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
              <Label>{t('Lisingdescription')}</Label>
              <input
                type='text'
                maxLength={4000}
                placeholder={t('BigNumcharacters')}
                value={formData.description}
                id='longDesc'
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('PropertyAmenities')}</Label>
              <Amenities>
                {amenities &&
                  amenities.map((amenity) => (
                    <label key={amenity.id}>
                      <input
                        type='checkbox'
                        // value={formData.amenities}
                        value={amenity.id}
                        onChange={handleAmenityChange}
                      />
                      {amenity.title}
                    </label>
                  ))}
              </Amenities>
            </div>
            <div id='listing-imgs'>
              <div>
                <label>{t('Listingimages')}</label>
                <p>{t('Pleaseupload')}</p>
              </div>
              <UploadWidget setFormData={setFormData} />
            </div>
          </>
          <div id='submit-btn'>
            <Button text={t('Submit')} color={'black'} click={handleSubmit} />
          </div>
        </form>
      </UploadForm>
    </UploadContainer>
  )
}
