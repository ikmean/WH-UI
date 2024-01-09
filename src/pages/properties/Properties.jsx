/* eslint-disable @typescript-eslint/no-extra-semi */
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { NoProperties, PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import PropertiesHeader from '../../components/properties/Header'
import SearchContainer from '../../components/search/SearchContainer'
import { AppContext } from '../../context/createContext'
import Button from '../../components/button/Button'
import { ButtonsStyles } from './PropertiesStyles'
import { useSearchParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'

function PropertiesPage() {
  const { context } = useContext(AppContext)
  const {
    properties,
    fetchPropertiesData,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    loadingProperties,
    setSelectedDealType,
    setSelectedPropertyCategory,
    setSelectedLocation,
    setSearchInput
  } = context
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchPropertiesData({
      dealType: searchParams.get('dealType'),
      location: searchParams.get('location'),
      category: searchParams.get('propertyCategory'),
      text: searchParams.get('searchInput')
    })
    fetchPropertyCategoryData()
    fetchLocationData()
    fetchDealTypeData()

    setSearchInput(searchParams.get('searchInput') !== 'null' ? searchParams.get('searchInput') : '')
    setSelectedDealType(
      searchParams
        .get('dealType')
        ?.split(',')
        ?.filter((el) => el !== '') || []
    )
    setSelectedLocation(
      searchParams
        .get('location')
        ?.split(',')
        ?.filter((el) => el !== '') || []
    )
    setSelectedPropertyCategory(
      searchParams
        .get('propertyCategory')
        ?.split(',')
        ?.filter((el) => el !== '') || []
    )
  }, [fetchPropertiesData])

  const propertiesPerPage = 6
  const indexOfLastProperty = currentPage * propertiesPerPage
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty)

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

  return (
    <div className='container'>
      <PropertiesHeader />
      <SearchContainer />
      <>
        {loadingProperties ? (
          <Loader />
        ) : properties.length > 0 ? (
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
          {indexOfLastProperty < properties.length && <Button color='white' text='Next page' click={nextPage} />}
        </ButtonsStyles>
      </>
    </div>
  )
}

export default PropertiesPage
