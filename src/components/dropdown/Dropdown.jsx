import React, { useEffect, useRef, useState } from 'react'
import { ArrowContainer, DropDownContainer, DropdownBox, DropdownList, Gap, ListItem } from './DropdownStyles'
import { ReactComponent as DownArrow } from '../../lib/icons/downArrow.svg'
import { Util } from '../../helpers/Util'
import Loader from '../Loader/Loader'

export default function Dropdown({ text, icon, data, onSelect }) {
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (item) => {
    onSelect(item.title, icon)
    setIsOpen(true)
  }

  const hasSelection = data.some((item) => item.selected)

  return (
    <DropDownContainer onClick={() => toggleOpen()} ref={ref}>
      <DropdownBox isSelected={hasSelection}>
        <Gap>
          {icon}
          <span>{text}</span>
        </Gap>
        <ArrowContainer>
          <DownArrow />
        </ArrowContainer>
        <DropdownList open={isOpen}>
          {Util.isNull(data) ? (
            <Loader type='small' />
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
