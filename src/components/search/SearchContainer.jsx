import React, { useContext } from 'react'
import Search from './Search.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'
import { ReactComponent as PropertyIcon } from '../../lib/icons/property.svg'
import { ReactComponent as TypeIcon } from '../../lib/icons/type.svg'
import { DropDownWrapper, SearchContainerStyles } from './SearchStyles.jsx'
import { AppContext } from '../../context/createContext.js'
import { useTranslation } from 'react-i18next'

export default function SearchContainer() {
  const { t } = useTranslation()
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
      <DropDownWrapper>
        <Dropdown text={t('Type')} icon={<TypeIcon />} data={checkIfSelected(dealType, selectedDealType)} onSelect={handleSelectDealType} />
        <Dropdown
          text={t('Property')}
          icon={<PropertyIcon />}
          data={checkIfSelected(propertyCategory, selectedPropertyCategory)}
          onSelect={handleSelectPropertyCategory}
        />
        <Dropdown
          text={t('Location')}
          icon={<LocationIcon />}
          data={checkIfSelected(location, selectedLocation)}
          onSelect={handleSelectLocation}
        />
      </DropDownWrapper>
      <Search />
    </SearchContainerStyles>
  )
}
