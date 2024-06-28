import React from 'react'
import { ReactComponent as Phone } from '../../lib/icons/phone.svg'
import { ReactComponent as LocationRed } from '../../lib/icons/locationRed.svg'
import { ReactComponent as MailRed } from '../../lib/icons/mailRed.svg'
import { ContactStyles } from './AgentsStyles'

interface props {
  email?: string
  direction?: string
  type?: string
  phoneNumber?: string
  location?: string
}

export default function ContactInfo({ direction, type, phoneNumber, location, email }: props) {
  return (
    <ContactStyles className={direction} type={type}>
      {location && (
        <div>
          <LocationRed />
          <span>{location}</span>
        </div>
      )}
      <div>
        <Phone />
        <span>{phoneNumber}</span>
      </div>
      {email && (
        <div>
          <div>
            <MailRed />
          </div>
          <div>
            <span>{email}</span>
          </div>
        </div>
      )}
    </ContactStyles>
  )
}
