import React from 'react'
import ContactInfo from '../agents/ContactInfo'
import { BoxContainer, Info, Line } from './OfficesStyles'

export default function OfficeBox({ phoneNumber, location, title, about, gallery }: any) {
  return (
    <BoxContainer>
      <img src={gallery[0].medium} />
      <Info>
        <h2>{title}</h2>
        <p>{about}</p>
        <Line />
        <ContactInfo direction='row' phoneNumber={phoneNumber} location={location} />
      </Info>
    </BoxContainer>
  )
}
