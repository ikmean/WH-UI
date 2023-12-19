import React from 'react'
import { ArrowContainer, DropDownContainer, DropdownBox, DropdownList, Gap, ListItem } from './DropdownStyles'
import { ReactComponent as DownArrow } from '../../lib/icons/downArrow.svg'
import Loader from '../Loader/Loader'

export default function Dropdown({ text, icon, data, onSelect }) {
  const handleSelect = (item) => {
    onSelect(item.title, icon)
  }

  return (
    <DropDownContainer>
      <DropdownBox>
        <Gap>
          {icon}
          <span>{text}</span>
        </Gap>
        <ArrowContainer>
          <DownArrow />
        </ArrowContainer>
        <DropdownList>
          {!data ? (
            <Loader />
          ) : (
            data.map((item) => (
              <ListItem key={item.id} selected={item.selected}>
                <input type='checkbox' checked={item.selected} onChange={() => handleSelect(item)} />
                {item.title}
              </ListItem>
            ))
          )}
        </DropdownList>
      </DropdownBox>
    </DropDownContainer>
  )
}
