import React from 'react'
import { Margin, SearchBox, SearchButton } from './SearchStyles'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'
import { Link } from 'react-router-dom'

export default function Search({ selectedDealType, selectedPropertyCategory, selectedLocation }) {
  return (
    <SearchBox>
      <div>
        <GraySearch />
        <InputComponent placeholder='Search for properties' />
      </div>
      <Margin>
        <SearchButton>
          <Link to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}`}>
            Search
          </Link>
        </SearchButton>
      </Margin>
    </SearchBox>
  )
}
