import React from 'react'
import { ArrowContainer, DropDownContainer, DropdownBox, DropdownList, Gap, ListItem } from './DropdownStyles'
import { ReactComponent as DownArrow } from '../../lib/icons/downArrow.svg'
import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'
import { ReactComponent as PropertyIcon } from '../../lib/icons/property.svg'
import { ReactComponent as TypeIcon } from '../../lib/icons/type.svg'
import Loader from '../Loader/Loader'

export default function Dropdown({ text, data }) {
  return (
    <DropDownContainer>
      <DropdownBox>
        <Gap>
          {text === 'Location' && <LocationIcon />}
          {text === 'Property' && <PropertyIcon />}
          {text === 'Type' && <TypeIcon />}
          <span>{text}</span>
        </Gap>
        <ArrowContainer>
          <DownArrow />
        </ArrowContainer>
        <DropdownList>{!data ? <Loader /> : data.map((item) => <ListItem key={item.id}>{item.title}</ListItem>)}</DropdownList>
      </DropdownBox>
    </DropDownContainer>
  )
}
