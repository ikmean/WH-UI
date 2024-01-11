import React, { useContext } from 'react'
import { SearchBox, SearchButton } from './SearchStyles'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'
import { Link, useSearchParams } from 'react-router-dom'
import { AppContext } from '../../context/createContext'
import { useTranslation } from 'react-i18next'

export default function Search() {
  const { t } = useTranslation()
  const { context } = useContext(AppContext)
  const { selectedDealType, selectedPropertyCategory, selectedLocation, searchInput, fetchPropertiesData, locale } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = () => {
    let dealType = selectedDealType
    let location = selectedLocation
    let category = selectedPropertyCategory
    let text = searchInput

    if (selectedDealType?.length === 0) dealType = searchParams.get('dealType')
    if (selectedLocation?.length === 0) location = searchParams.get('location')
    if (selectedPropertyCategory?.length === 0) category = searchParams.get('propertyCategory')
    if (searchInput?.length === 0) text = searchInput.get('searchInput')

    fetchPropertiesData({ dealType, location, category, text, locale })
  }

  return (
    <SearchBox>
      <div>
        <GraySearch />
        <InputComponent
          placeholder={t('SearchForProperties')}
          selectedDealType={selectedDealType}
          selectedPropertyCategory={selectedPropertyCategory}
          selectedLocation={selectedLocation}
        />
      </div>
      <Link
        to={`/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}&searchInput=${searchInput}&locale=${locale}`}
      >
        <SearchButton onClick={() => handleClick()}> {t('Search')}</SearchButton>
      </Link>
    </SearchBox>
  )
}
