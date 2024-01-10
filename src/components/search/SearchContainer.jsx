import React, { useContext } from 'react'
import Search from './Search.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'
import { ReactComponent as PropertyIcon } from '../../lib/icons/property.svg'
import { ReactComponent as TypeIcon } from '../../lib/icons/type.svg'
import { SearchContainerStyles } from './SearchStyles.jsx'
import { AppContext } from '../../context/createContext.js'
import { useSearchParams } from 'react-router-dom'

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
    setSelectedLocation,
    searchInput,
    fetchPropertiesData,
    locale
  } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const handleSelectDealType = (value) => {
    const updatedSelectedDealType = toggleSelection(selectedDealType, value)
    setSelectedDealType(updatedSelectedDealType)
  }

  const handleSelectPropertyCategory = (value) => {
    const updatedSelectedPropertyCategory = toggleSelection(selectedPropertyCategory, value)
    setSelectedPropertyCategory(updatedSelectedPropertyCategory)
  }

  const handleSelectLocation = (value) => {
    const updatedSelectedLocation = toggleSelection(selectedLocation, value)
    setSelectedLocation(updatedSelectedLocation)
  }

  const toggleSelection = (selectedItems, value) => {
    const itemIndex = selectedItems.indexOf(value)
    const newSelectedItems = [...selectedItems]

    if (itemIndex === -1) {
      newSelectedItems.push(value)
    } else {
      newSelectedItems.splice(itemIndex, 1)
    }

    return newSelectedItems
  }

  const checkIfSelected = function (type, selectedType) {
    return type.map((type) => {
      return { ...type, selected: !!selectedType.includes(type.title) }
    })
  }

  return (
    <SearchContainerStyles>
      <Dropdown text={'Type'} icon={<TypeIcon />} data={checkIfSelected(dealType, selectedDealType)} onSelect={handleSelectDealType} />
      <Dropdown
        text={'Property'}
        icon={<PropertyIcon />}
        data={checkIfSelected(propertyCategory, selectedPropertyCategory)}
        onSelect={handleSelectPropertyCategory}
      />
      <Dropdown
        text={'Location'}
        icon={<LocationIcon />}
        data={checkIfSelected(location, selectedLocation)}
        onSelect={handleSelectLocation}
      />
      <Search
        searchParams={searchParams}
        fetchPropertiesData={fetchPropertiesData}
        selectedDealType={selectedDealType}
        selectedPropertyCategory={selectedPropertyCategory}
        selectedLocation={selectedLocation}
        searchInput={searchInput}
        locale={locale}
      />
    </SearchContainerStyles>
  )
}
