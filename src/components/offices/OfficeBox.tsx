import React from 'react'
import img1 from '../../lib/images/img1.png'
import ContactInfo from '../agents/ContactInfo'
import { BoxContainer, Info, Line } from './OfficesStyles'

export default function OfficeBox() {
  return (
    <BoxContainer>
      <img src={img1} alt='img1' width='100%' height='336.56px' />
      <Info>
        <h2>San Francisco Office</h2>
        <p>Lorem ipsum dolor sit amet conse ctetur adipiscing elit ipsum at iaculis nulla nulla justo vestibulum faucibus nec.</p>
        <Line />
        <ContactInfo direction='row' />
      </Info>
    </BoxContainer>
  )
}
