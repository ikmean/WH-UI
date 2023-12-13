import React from 'react'
import { Margin, SearchBox } from './SearchStyles'
import Button from '../button/Button'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'

export default function Search({ selectedDealType, selectedPropertyCategory, selectedLocation }) {
  return (
    <SearchBox>
      <div>
        <GraySearch />
        <InputComponent placeholder='Search for properties' />
      </div>
      <Margin>
        <Button
          text='Search'
          color='red'
          to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}`}
        />
      </Margin>
    </SearchBox>
  )
}
