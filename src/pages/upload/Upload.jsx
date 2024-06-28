import React, { useContext, useEffect, useState } from 'react'
import { UploadContainer, UploadHeader, UploadForm, Label, Amenities, UploadGallery, SectionTwo } from './UploadStyles'
import { useTranslation } from 'react-i18next'
import UploadWidget from './Cloudinary'
import Button from '../../components/button/Button'
import { AppContext } from '../../context/createContext'

export default function UploadPage() {
  const { t } = useTranslation()
  const [formErrors, setFormErrors] = useState({})
  const [submitMessage, setSubmitMessage] = useState('')
  const { context } = useContext(AppContext)
  const {
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    fetchAgentsData,
    fetchDistrictsData,
    fetchAmenitiesData,
    fetchDevelopersData,
    fetchParkingTypes,
    fetchHeatingTypes,
    fetchConditionTypes,
    fetchStatusTypes,
    agents,
    location,
    propertyCategory,
    dealType,
    districts,
    developers,
    amenities,
    locale,
    uploadProperty,
    parkingTypes,
    heatingTypes,
    conditionTypes,
    statusTypes
  } = context

  const initialData = {
    title: '',
    description: '',
    size: '',
    roomQuantity: '',
    bedroomQuantity: '',
    price: '',
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
    bathroom: '',
    parking: '',
    gallery: '[]',
    locale: 'ka',
    parkingType: '',
    heating: '',
    condition: '',
    status: '',
    story: '',
    ceilingHeight: '',
    floor: '',
    totalFloor: ''
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
    fetchParkingTypes(locale)
    fetchHeatingTypes(locale)
    fetchConditionTypes(locale)
    fetchStatusTypes(locale)
  }, [
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    fetchAgentsData,
    fetchDistrictsData,
    fetchAmenitiesData,
    fetchDevelopersData,
    fetchParkingTypes,
    fetchHeatingTypes,
    fetchConditionTypes,
    fetchStatusTypes,
    locale
  ])

  function clear() {
    setFormData(initialData)
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitMessage(t('PleaseuploadMsg'))
      return
    }

    await uploadProperty(formData)
    setSubmitMessage(t('SuccessfuluploadMsg'))
    clear()
  }

  function handleAmenityChange(e) {
    const amenityId = e.target.value

    setFormData((data) => {
      const includes = data.propertyAmenities.includes(amenityId)

      if (!includes) {
        return { ...data, propertyAmenities: [...data.propertyAmenities, amenityId] }
      }

      if (includes) {
        return { ...data, propertyAmenities: data.propertyAmenities.filter((amenity) => amenity !== amenityId) }
      }
    })
  }

  const handleRemove = (url) => {
    const uploadedMediaUrls = JSON.parse(window.localStorage.getItem('uploadedMediaUrls'))
    const updatedMediaUrls = uploadedMediaUrls.filter((img) => img.url !== url)
    window.localStorage.setItem('uploadedMediaUrls', JSON.stringify(updatedMediaUrls))
    setFormData((data) => {
      return { ...data, gallery: JSON.stringify(updatedMediaUrls) }
    })
  }

  function validateForm() {
    const errors = {}

    if (!formData.title) errors.title = true
    if (!formData.dealType) errors.dealType = true
    if (!formData.propertyCategory) errors.propertyCategory = true
    if (!formData.aboutProperty) errors.aboutProperty = true
    if (!formData.city) errors.city = true
    if (!formData.district) errors.district = true
    if (!formData.streetAddress) errors.streetAddress = true
    if (!formData.bedroomQuantity && formData.bedroomQuantity !== 0) errors.bedroomQuantity = true
    if (!formData.bathroom && formData.bathroom !== 0) errors.bathroom = true
    if (!formData.parking && formData.parking !== 0) errors.parking = true
    if (!formData.parkingType) errors.parkingType = true
    if (!formData.heating) errors.heatingType = true
    if (!formData.condition) errors.conditionType = true
    if (!formData.status) errors.statusType = true
    if (!formData.price) errors.price = true
    if (!formData.size) errors.size = true
    if (!formData.agent) errors.agent = true
    if (!formData.description) errors.description = true
    if (!formData.developer) errors.developer = true
    if (formData.propertyAmenities.length === 0) errors.amenities = true
    if (JSON.parse(formData.gallery).length === 0) errors.gallery = true

    setFormErrors(errors)

    return Object.keys(errors).length === 0
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
              <Label style={{ color: formErrors.title ? '#fb8722' : 'inherit' }}>{t('ListingTitle')} *</Label>
              <input
                type='text'
                placeholder={t('PropertyListing')}
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.dealType ? '#fb8722' : 'inherit' }}>{t('DealType')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, dealType: e.target.value })} value={formData.dealType}>
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
              <Label style={{ color: formErrors.propertyCategory ? '#fb8722' : 'inherit' }}>{t('ListingType')} *</Label>
              <select
                name='Select'
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
              <Label style={{ color: formErrors.aboutProperty ? '#fb8722' : 'inherit' }}>{t('AboutTheProperty')} *</Label>
              <input
                type='text'
                placeholder='11.13.78.001.013.05.728'
                value={formData.aboutProperty}
                onChange={(e) => setFormData({ ...formData, aboutProperty: e.target.value })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.city ? '#fb8722' : 'inherit' }}>{t('City')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, city: e.target.value })} value={formData.location}>
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
                  <option disabled>{t('Nocities')}</option>
                )}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.district ? '#fb8722' : 'inherit' }}>{t('District')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, district: e.target.value })} value={formData.district}>
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
                  <option disabled>{t('Nodistricts')}</option>
                )}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.streetAddress ? '#fb8722' : 'inherit' }}>{t('Address')} *</Label>
              <input
                type='text'
                placeholder={t('ex. 5 Kedia st.')}
                value={formData.streetAddress}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.roomQuantity ? '#fb8722' : 'inherit' }}>{t('Rooms')} *</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.roomQuantity}
                onChange={(e) => setFormData({ ...formData, roomQuantity: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.bedroomQuantity ? '#fb8722' : 'inherit' }}>{t('Bedrooms')} *</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.bedroomQuantity}
                onChange={(e) => setFormData({ ...formData, bedroomQuantity: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.bathroom ? '#fb8722' : 'inherit' }}>{t('Bathrooms')} *</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.bathroom}
                onChange={(e) => setFormData({ ...formData, bathroom: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.parking ? '#fb8722' : 'inherit' }}>{t('Parking')} *</Label>
              <input
                type='number'
                placeholder={t('ex1')}
                value={formData.parking}
                onChange={(e) => setFormData({ ...formData, parking: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.parkingType ? '#fb8722' : 'inherit' }}>{t('Parkingtype')} *</Label>
              <select
                name='Select'
                onChange={(e) => setFormData({ ...formData, parkingType: e.target.value })}
                value={formData.parkingType}
              >
                <option value='' disabled>
                  {t('Selectparkingtype')}
                </option>
                {parkingTypes.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.heatingType ? '#fb8722' : 'inherit' }}>{t('Heatingtype')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, heating: e.target.value })} value={formData.heating}>
                <option value='' disabled>
                  {t('Selectheatingtype')}
                </option>
                {heatingTypes.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.conditionType ? '#fb8722' : 'inherit' }}>{t('Condition')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, condition: e.target.value })} value={formData.condition}>
                <option value='' disabled>
                  {t('Selectcondition')}
                </option>
                {conditionTypes.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.statusType ? '#fb8722' : 'inherit' }}>{t('Status')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, status: e.target.value })} value={formData.status}>
                <option value='' disabled>
                  {t('Selectstatus')}
                </option>
                {statusTypes.map((type) => (
                  <option key={type.id} value={type.title}>
                    {type.title}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <Label>{t('NumStories')}</Label>
              <input
                type='number'
                placeholder={t('ex25')}
                value={formData.totalFloor}
                onChange={(e) => setFormData({ ...formData, totalFloor: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Story')}</Label>
              <input
                type='number'
                placeholder={t('ex3')}
                value={formData.floor}
                onChange={(e) => setFormData({ ...formData, floor: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Ceilingheight')}</Label>
              <input
                type='number'
                placeholder={t('ex3')}
                value={formData.ceilingHeight}
                onChange={(e) => setFormData({ ...formData, ceilingHeight: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.price ? '#fb8722' : 'inherit' }}>{t('Price')} *</Label>
              <input
                type='number'
                placeholder={t('ex10000')}
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.size ? '#fb8722' : 'inherit' }}>{t('Area')} *</Label>
              <input
                type='number'
                placeholder={t('ex100')}
                value={formData.size}
                onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label style={{ color: formErrors.developer ? '#fb8722' : 'inherit' }}>{t('Developer')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, developer: e.target.value })} value={formData.developer}>
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
                  <option disabled>{t('Nodevelopers')}</option>
                )}
              </select>
            </div>
            <div>
              <Label style={{ color: formErrors.agent ? '#fb8722' : 'inherit' }}>{t('Agent')} *</Label>
              <select name='Select' onChange={(e) => setFormData({ ...formData, agent: e.target.value })} value={formData.agent}>
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
                  <option disabled>{t('Noagents')}</option>
                )}
              </select>
            </div>
          </section>
          <SectionTwo>
            <div>
              <Label style={{ color: formErrors.description ? '#fb8722' : 'inherit' }}>{t('Lisingdescription')} *</Label>
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
              <Label style={{ color: formErrors.amenities ? '#fb8722' : 'inherit' }}>{t('PropertyAmenities')} *</Label>
              <Amenities>
                {amenities && amenities.length > 0 ? (
                  amenities.map((amenity) => (
                    <div key={amenity.id}>
                      <input
                        type='checkbox'
                        value={amenity.id.toString()}
                        checked={formData.propertyAmenities.includes(amenity.id.toString())}
                        onChange={(e) => handleAmenityChange(e)}
                      />
                      <label htmlFor={`${amenity.title}`}>{amenity.title}</label>
                    </div>
                  ))
                ) : (
                  <p>{t('Noamenities')}</p>
                )}
              </Amenities>
            </div>
            <div id='listing-imgs'>
              <div>
                <label style={{ color: formErrors.gallery ? '#fb8722' : 'inherit' }}>{t('Listingimages')} *</label>
                {JSON.parse(formData.gallery).length > 0 ? (
                  <p style={{ color: '#fb8722' }}>{t('Successfullyuploaded')}</p>
                ) : (
                  <p>{t('Pleaseupload')}</p>
                )}
              </div>
              <UploadWidget setFormData={setFormData} />
            </div>
            {JSON.parse(formData.gallery).length > 0 ? (
              <UploadGallery>
                {JSON.parse(formData.gallery).map((img) => {
                  return (
                    <div className='img-container' key={img.url}>
                      <img src={img.url} alt='picture of a home' />
                      <Button text='x' color='white' width='1px' className='closebtn' click={() => handleRemove(img.url)} />
                    </div>
                  )
                })}
              </UploadGallery>
            ) : (
              ''
            )}
          </SectionTwo>
          <div id='submit-btn'>
            <Button text={t('Submit')} color={'black'} click={handleSubmit} />
            {submitMessage && <p style={{ color: '#fb8722' }}>{submitMessage}</p>}
          </div>
        </form>
      </UploadForm>
    </UploadContainer>
  )
}
