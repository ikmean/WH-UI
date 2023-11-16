import React from 'react'
import { ReactComponent as Phone } from '../../lib/icons/phone.svg'
import { ReactComponent as LocationRed } from '../../lib/icons/locationRed.svg'
import { ReactComponent as MailRed } from '../../lib/icons/mailRed.svg'
import { ContactStyles } from './AgentsStyles'

interface props {
  email?: string
  direction?: string
  type?: string
  number?: string
  location?: string
}

export default function ContactInfo({ direction, type, number, location, email }: props) {
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
        <span>{number}</span>
      </div>
      {email && (
        <div>
          <MailRed />
          <span>{email}</span>
        </div>
      )}
    </ContactStyles>
  )
}
