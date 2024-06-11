import React, { useContext, useEffect, useState } from 'react'
import { UploadContainer, UploadHeader, UploadForm, Label, Amenities } from './UploadStyles'
import { useTranslation } from 'react-i18next'
import UploadWidget from './Cloudinary'
import Button from '../../components/button/Button'
import { AppContext } from '../../context/createContext'

export default function UploadPage() {
  const { t } = useTranslation()
  const { context } = useContext(AppContext)
  const { fetchLocationData, fetchPropertyCategoryData, fetchDealTypeData, fetchAgentsData, agents, location, propertyCategory, dealType } =
    context
  const [formData, setFormData] = useState({
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
    pinned: true,
    city: '',
    district: '',
    aboutProperty: '',
    bathroom: 0,
    parking: 0,
    gallery: '',
    locale: 'ka'
  })

  useEffect(function () {
    fetchLocationData()
    fetchPropertyCategoryData()
    fetchDealTypeData()
    fetchAgentsData()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    console.log(formData)
    console.log('Agents', agents)
    console.log('Location', location)
    console.log('Property Category', propertyCategory)
    console.log('Deal Type', dealType)
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
              <select name='Select'>
                {dealType.map((type) => (
                  <option key={type.id} value={type.title} onSelect={() => setFormData({ ...formData, dealType: type.id })}>
                    {type.title}
                  </option>
                ))}
                <option value='rent'>Rent</option>
                <option value='sale'>Sale</option>
              </select>
            </div>
            <div>
              <Label>{t('Listing type')}</Label>
              <select name='Select'>
                <option value='houses'>Houses</option>
                <option value='apartments'>Apartments</option>
                <option value='offices'>Offices</option>
              </select>
            </div>
            <div>
              <Label>{t('Location')}</Label>
              <input type='text' placeholder={t('ex. Tbilisi')} />
            </div>
            <div>
              <Label>{t('Address')}</Label>
              <input
                type='text'
                placeholder={t('5 Kedia st.')}
                onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
              />
            </div>
            <div>
              <Label>{t('Listing price')}</Label>
              <input
                type='number'
                placeholder={t('ex. $10 000')}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
              />
            </div>
            <div>
              <Label>{t('Bedrooms')}</Label>
              <input type='number' placeholder='1' />
            </div>
            <div>
              <Label>{t('Bathrooms')}</Label>
              <input type='number' placeholder='1' />
            </div>
            <div>
              <Label>{t('Parking lots')}</Label>
              <input type='number' placeholder='1' />
            </div>
            <div>
              <Label>{t('Area')}</Label>
              <input type='number' placeholder='1000 m2' onChange={(e) => setFormData({ ...formData, size: Number(e.target.value) })} />
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
                <input type='checkbox' />
                Security cameras
                <input type='checkbox' />
                Laundry
                <input type='checkbox' />
                Internet
                <input type='checkbox' />
                Pool
                <input type='checkbox' />
                Video surveillance
                <input type='checkbox' />
                Jacuzzi
                <input type='checkbox' />
                Elevator
                <input type='checkbox' />
                Vigilance
                <input type='checkbox' />
                Dish washer
                <input type='checkbox' />
                Solar panel
                <input type='checkbox' />
                Garage
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
