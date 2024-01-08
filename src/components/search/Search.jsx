import React from 'react'
import { SearchBox, SearchButton } from './SearchStyles'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'
import { Link } from 'react-router-dom'

export default function Search({
  searchParams,
  fetchPropertiesData,
  selectedDealType,
  selectedPropertyCategory,
  selectedLocation,
  searchInput
}) {
  const handleClick = () => {
    let dealType = selectedDealType
    let location = selectedLocation
    let category = selectedPropertyCategory
    let text = searchInput

    if (selectedDealType?.length === 0) dealType = searchParams.get('dealType')
    if (selectedLocation?.length === 0) location = searchParams.get('location')
    if (selectedPropertyCategory?.length === 0) category = searchParams.get('propertyCategory')
    if (searchInput?.length === 0) text = searchInput.get('searchInput')

    fetchPropertiesData({ dealType, location, category, text })
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
      <Link
        to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}&searchInput=${searchInput}`}
      >
        <SearchButton onClick={(e) => handleClick(e)}>Search</SearchButton>
      </Link>
    </SearchBox>
  )
}
