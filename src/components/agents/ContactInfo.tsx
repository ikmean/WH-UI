import React from "react"
import { ReactComponent as Phone } from "../../lib/icons/phone.svg"
import { ReactComponent as MailRed } from "../../lib/icons/mailRed.svg"
import { ContactStyles } from "./AgentsStyles"

interface props {
  direction?: string
}

export default function ContactInfo({ direction }: props) {
  return (
    <ContactStyles className={direction}>
      <div>
        <Phone />
        <span>(414) 325-427</span>
      </div>
      <div>
        <MailRed />
        <span>john@realtorx.com</span>
      </div>
    </ContactStyles>
  )
}
