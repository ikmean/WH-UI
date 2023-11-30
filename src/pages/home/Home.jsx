import React, { useContext, useEffect, useRef } from 'react'
import Explore from '../../components/explore/Explore'
import { AppContext } from '../../context/createContext'
import SearchContainer from '../../components/search/SearchContainer'
import Properties from '../../components/properties/Properties'
import FindHouse from '../../components/findHouse/FindHouse'
import Discovery from '../../components/discover/Discovery'
import Articles from '../../components/articles/Articles'
import Featured from '../../components/featured/Featured'

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

  const featuredListRef = useRef(null)

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
        <Explore featuredListRef={featuredListRef} />
        <SearchContainer location={location} propertyCategory={propertyCategory} dealType={dealType} />
        <Featured properties={properties} innerRef={featuredListRef} />
        <Properties title='All properties' properties={properties} />
        <FindHouse />
      </div>
      <Discovery />
      <Articles data={blogs} />
    </div>
  )
}

export default Home
