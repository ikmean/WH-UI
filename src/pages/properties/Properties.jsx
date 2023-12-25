/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useContext, useEffect, useState } from 'react'
import { PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import PropertiesHeader from '../../components/properties/Header'
import SearchContainer from '../../components/search/SearchContainer'
import { AppContext } from '../../context/createContext'
import Button from '../../components/button/Button'
import { ButtonsStyles } from './PropertiesStyles'

function Properties() {
  const { context } = useContext(AppContext)
  const {
    properties,
    fetchPropertiesData,
    location,
    propertyCategory,
    dealType,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData
  } = context

  const [currentPage, setCurrentPage] = useState(1)
  const propertiesPerPage = 6

  useEffect(() => {
    fetchPropertiesData()
  }, [fetchPropertiesData])

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
  const currentProperties = properties?.slice(indexOfFirstProperty, indexOfLastProperty)

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
      <SearchContainer location={location} propertyCategory={propertyCategory} dealType={dealType} />
      {properties.length && (
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

export default Properties
