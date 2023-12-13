import React, { useContext } from 'react'
import Search from './Search.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'
import { ReactComponent as PropertyIcon } from '../../lib/icons/property.svg'
import { ReactComponent as TypeIcon } from '../../lib/icons/type.svg'
import { SearchContainerStyles } from './SearchStyles.jsx'
import { AppContext } from '../../context/createContext.js'

export default function SearchContainer() {
  const { context } = useContext(AppContext)
  const {
    location,
    propertyCategory,
    dealType,
    selectedDealType,
    setSelectedDealType,
    selectedPropertyCategory,
    setSelectedPropertyCategory,
    selectedLocation,
    setSelectedLocation
  } = context

  return (
    <SearchContainerStyles>
      <Dropdown text={selectedDealType || 'Type'} icon={<TypeIcon />} data={dealType} onSelect={(value) => setSelectedDealType(value)} />
      <Dropdown
        text={selectedPropertyCategory || 'Property'}
        icon={<PropertyIcon />}
        data={propertyCategory}
        onSelect={(value) => setSelectedPropertyCategory(value)}
      />
      <Dropdown
        text={selectedLocation || 'Location'}
        icon={<LocationIcon />}
        data={location}
        onSelect={(value) => setSelectedLocation(value)}
      />
      <Search selectedDealType={selectedDealType} selectedPropertyCategory={selectedPropertyCategory} selectedLocation={selectedLocation} />
    </SearchContainerStyles>
  )
}
