import React from 'react'
import { SearchBox, SearchButton } from './SearchStyles'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'
import { Link } from 'react-router-dom'
import Button from '../button/Button'

export default function Search({ selectedDealType, selectedPropertyCategory, selectedLocation, searchInput }) {
  return (
    <SearchBox>
      <div>
        <GraySearch />
        <InputComponent
          placeholder='Search for properties'
          selectedDealType={selectedDealType}
          selectedPropertyCategory={selectedPropertyCategory}
          selectedLocation={selectedLocation}
        />
      </div>
      <Button
        text='Search'
        color='white'
        to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}&searchInput=${searchInput}`}
      />
    </SearchBox>
  )
}
