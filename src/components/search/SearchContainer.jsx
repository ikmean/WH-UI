import React, { useContext, useEffect } from 'react'
import Search from './Search.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'
import { ReactComponent as PropertyIcon } from '../../lib/icons/property.svg'
import { ReactComponent as TypeIcon } from '../../lib/icons/type.svg'
import { SearchContainerStyles } from './SearchStyles.jsx'
import { AppContext } from '../../context/createContext.js'
import { useSearchParams } from 'react-router-dom'

export default function SearchContainer() {
  const [searchParams, setSearchParams] = useSearchParams()
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

  const onDealTypeSelect = (type) => {
    setSelectedDealType(type)
  }

  const setDealTypeText = () => {
    console.log(Object.keys(searchParams))
    console.log('Selected Deal Type ->>>>>>>>', selectedDealType)
    console.log('Quuery Param Deal Type ->>>>>', searchParams.get('dealType'))
    if (selectedDealType === null && Object.keys(searchParams).length === 0) return 'Type'

    if (searchParams.get('dealType') && !selectedDealType === null) return selectedDealType

    return selectedDealType
  }

  return (
    <SearchContainerStyles>
      <Dropdown text={setDealTypeText()} icon={<TypeIcon />} data={dealType} onSelect={(value) => onDealTypeSelect(value)} />
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
