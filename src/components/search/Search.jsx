import React from 'react'
import { SearchBox, SearchButton } from './SearchStyles'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'
import { Link } from 'react-router-dom'

export default function Search({ selectedDealType, selectedPropertyCategory, selectedLocation }) {
  const keyDown = function (e) {
    console.log(e)
  }

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
      <Link to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}`}>
        <SearchButton onKeyDown={(e) => keyDown(e)}>Search</SearchButton>
      </Link>
    </SearchBox>
  )
}
