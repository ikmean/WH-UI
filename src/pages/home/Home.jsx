import React, { lazy, useContext, useEffect } from 'react'
const Explore = lazy(() => import('../../components/explore/Explore'))
const SearchContainer = lazy(() => import('../../components/search/SearchContainer'))
const Properties = lazy(() => import('../../components/properties/Properties'))
const FindHouse = lazy(() => import('../../components/findHouse/FindHouse'))
const Discovery = lazy(() => import('../../components/discover/Discovery'))
const Articles = lazy(() => import('../../components/articles/Articles'))
import { AppContext } from '../../context/createContext'
const Featured = lazy(() => import('../../components/featured/Featured'))

function Home() {
  const { context } = useContext(AppContext)
  const {
    properties,
    blogs,
    fetchPropertiesData,
    fetchBlogsData,
    location,
    propertyCategory,
    dealType,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData
  } = context

  useEffect(() => {
    fetchLocationData()
  }, [fetchLocationData])

  useEffect(() => {
    fetchPropertyCategoryData()
  }, [fetchPropertyCategoryData])

  useEffect(() => {
    fetchDealTypeData()
  }, [fetchDealTypeData])

  useEffect(() => {
    fetchPropertiesData()
  }, [fetchPropertiesData])

  useEffect(() => {
    fetchBlogsData()
  }, [fetchBlogsData])

  return (
    <div className='flex-column'>
      <div className='container'>
        <Explore />
        <SearchContainer location={location} propertyCategory={propertyCategory} dealType={dealType} />
        <Featured properties={properties} />
        <Properties title='All properties' properties={properties} />
        <FindHouse />
      </div>
      <Discovery />
      <Articles data={blogs} />
    </div>
  )
}

export default Home
