import React from 'react'
import { ReactComponent as Phone } from '../../lib/icons/phone.svg'
import { ReactComponent as MailRed } from '../../lib/icons/mailRed.svg'
import { ContactStyles } from './AgentsStyles'

interface props {
  direction?: string
  type?: string
  number?: string
  email?: string
}

export default function ContactInfo({ direction, type, number, email }: props) {
  return (
    <ContactStyles className={direction} type={type}>
      <div>
        <Phone />
        <span>{number}</span>
      </div>
      <div>
        <MailRed />
        <span>{email}</span>
      </div>
    </ContactStyles>
  )
}
