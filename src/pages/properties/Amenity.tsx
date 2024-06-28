import React from 'react'
import { ReactComponent as Checked } from '../../lib/icons/checked.svg'
import { AmenityStyles } from './PropertiesStyles'

export const Amenity = ({ text }: any) => {
  return (
    <AmenityStyles>
      <Checked />
      <span>{text}</span>
    </AmenityStyles>
  )
}
