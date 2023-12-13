/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useContext, useEffect, useState } from 'react'
import { PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import PropertiesHeader from '../../components/properties/Header'
import SearchContainer from '../../components/search/SearchContainer'
import { AppContext } from '../../context/createContext'
import Button from '../../components/button/Button'
import { ButtonsStyles } from './PropertiesStyles'
import { useSearchParams } from 'react-router-dom'

function FilteredProperties() {
  const { context } = useContext(AppContext)
  const {
    properties,
    fetchPropertiesData,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    selectedDealType,
    selectedPropertyCategory,
    selectedLocation
  } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const [currentPage, setCurrentPage] = useState(1)
  const [filteredPropertyList, setFilteredPropertyList] = useState([])

  const propertiesPerPage = 6

  useEffect(() => {
    fetchPropertiesData()
  }, [fetchPropertiesData])

  useEffect(() => {
    const filteredProperties = properties.filter((property) => {
      if (searchParams.get('dealType') && searchParams.get('dealType') === property.dealType) return true
      //   if (selectedLocation && selectedLocation === property.city) return true
      //   if (selectedPropertyCategory && selectedPropertyCategory === property.category) return true

      return false
    })

    setFilteredPropertyList(filteredProperties)
  }, [searchParams])

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
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='container'>
      <PropertiesHeader />
      <SearchContainer />
      {filteredPropertyList.length > 0 && (
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
      )}
      <ButtonsStyles>
        {currentPage > 1 && <Button color='white' text='Previous page' click={prevPage} />}
        {indexOfLastProperty < properties.length && <Button color='white' text='Next page' click={nextPage} />}
      </ButtonsStyles>
    </div>
  )
}

export default FilteredProperties
