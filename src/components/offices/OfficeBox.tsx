import React from 'react'
import img1 from '../../lib/images/img1.png'
import ContactInfo from '../agents/ContactInfo'
import { BoxContainer, Info, Line } from './OfficesStyles'

export default function OfficeBox({ number, location, title, about }: any) {
  return (
    <BoxContainer>
      <img src={img1} alt='img1' width='100%' height='336.56px' />
      <Info>
        <h2>{title}</h2>
        <p>{about}</p>
        <Line />
        <ContactInfo direction='row' number={number} location={location} />
      </Info>
    </BoxContainer>
  )
}
