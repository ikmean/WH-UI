/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useContext, useEffect, useState } from 'react'
import { NoProperties, PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import PropertiesHeader from '../../components/properties/Header'
import SearchContainer from '../../components/search/SearchContainer'
import { AppContext } from '../../context/createContext'
import Button from '../../components/button/Button'
import { ButtonsStyles } from './PropertiesStyles'
import { useSearchParams } from 'react-router-dom'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'

function PropertiesPage() {
  const { context } = useContext(AppContext)
  const {
    properties,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    selectedDealType,
    selectedPropertyCategory,
    selectedLocation,
    searchInput
  } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPropertyList, setFilteredPropertyList] = useState([])

  const propertiesPerPage = 6

  useEffect(() => {
    const filteredProperties = properties.filter((property) => {
      const dealTypeMatch = selectedDealType.length === 0 || selectedDealType.includes(property.dealType)
      const locationMatch = selectedLocation.length === 0 || selectedLocation.includes(property.city)
      const categoryMatch = selectedPropertyCategory.length === 0 || selectedPropertyCategory.includes(property.category)

      const searchMatch =
        searchInput === null ||
        [property.title, property.streetAddress, property.city, property.district, property.description, property.aboutProperty].some(
          (field) => field.toLowerCase().includes(searchInput?.trim().toLowerCase())
        )

      return dealTypeMatch && locationMatch && categoryMatch && searchMatch
    })

    setFilteredPropertyList(filteredProperties)
  }, [properties, selectedDealType, selectedLocation, selectedPropertyCategory, searchInput, searchParams])

  useEffect(() => {
    fetchLocationData()
  }, [fetchLocationData])

  useEffect(() => {
    fetchPropertyCategoryData()
  }, [fetchPropertyCategoryData])

  useEffect(() => {
    fetchDealTypeData()
  }, [fetchDealTypeData])

  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = filteredPropertyList.slice(indexOfFirstProperty, indexOfLastProperty)

  const nextPage = () => {
    if (indexOfLastProperty < properties.length) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }

  return Util.isNull(properties) ? (
    <Loader />
  ) : (
    <div className='container'>
      <PropertiesHeader />
      <SearchContainer />
      {filteredPropertyList.length > 0 ? (
        <PropertiesPageWrapper>
          {currentProperties.map((data, i) => (
            <FeaturedBox
              data={{
                ...data,
                featured: false,
                main: false,
                id: data.id
              }}
              key={i}
            />
          ))}
        </PropertiesPageWrapper>
      ) : (
        <NoProperties>No properties found</NoProperties>
      )}
      <ButtonsStyles>
        {currentPage > 1 && <Button color='white' text='Previous page' click={prevPage} />}
        {indexOfLastProperty < filteredPropertyList.length && <Button color='white' text='Next page' click={nextPage} />}
      </ButtonsStyles>
    </div>
  )
}

export default PropertiesPage
