import React from 'react'
import { UploadContainer, UploadHeader, UploadForm, Label, Amenities } from './UploadStyles'
import { useTranslation } from 'react-i18next'

export default function Developer() {
  const { t } = useTranslation()

  return (
    <UploadContainer>
      <UploadHeader>
        <h1>{t('Post a property for sale or rent')}</h1>
        <p>
          {t('loreLorem ipsum dolor sit amet consectetur adipiscing elit eleifend nullam eros, nulla erat magnis inceptos aptent hac odi.')}
        </p>
      </UploadHeader>
      <UploadForm>
        <form>
          <section>
            <div>
              <Label>{t('Full name')}</Label>
              <input type='text' placeholder={t('John Carter')} />
            </div>
            <div>
              <Label>{t('Email')}</Label>
              <input type='email' placeholder='example@email.com' />
            </div>
            <div>
              <Label>{t('Phone')}</Label>
              <input type='number' placeholder='(+995) 123456789' />
            </div>
          </section>
          <br />
          <section>
            <div>
              <Label>{t('Lising title')}</Label>
              <input type='text' placeholder={t('Property listing title')} />
            </div>
            <div>
              <Label>{t('Property type')}</Label>
              <select name='Select'>
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
              <input type='text' placeholder={t('5 Kedia st.')} />
            </div>
            <div>
              <Label>{t('Listing price')}</Label>
              <input type='number' placeholder={t('ex. $10 000')} />
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
              <Label>{t('Construqtion sqm.')}</Label>
              <input type='number' placeholder='470 m2' />
            </div>
            <div>
              <Label>{t('Land sqm.')}</Label>
              <input type='number' placeholder='1000 m2' />
            </div>
          </section>
          <>
            <div>
              <Label>{t('Lising short description')}</Label>
              <input type='text' maxLength={240} placeholder={t('Please enter up to 240 characters')} id='shortDesc' />
            </div>
            <div>
              <Label>{t('Lising long description')}</Label>
              <input type='text' maxLength={4000} placeholder={t('Please enter up to 4000 characters')} id='longDesc' />
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
            <div>
              <Label>{t('Listing Images')}</Label>
              <p>Please share a Google Drive or Imgur link of your listing images</p>
              <input type='link' placeholder='ex. drive.google.com/...' />
            </div>
          </>
        </form>
      </UploadForm>
    </UploadContainer>
  )
}
