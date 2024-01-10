import React, { useContext, useEffect, useRef } from 'react'
import Explore from '../../components/explore/Explore'
import { AppContext } from '../../context/createContext'
import SearchContainer from '../../components/search/SearchContainer'
import Properties from '../../components/properties/Properties'
import FindHouse from '../../components/findHouse/FindHouse'
import Discovery from '../../components/discover/Discovery'
import Articles from '../../components/articles/Articles'
import Featured from '../../components/featured/Featured'
import Loader from '../../components/Loader/Loader'

function Home({ searchInput, setSearchInput }) {
  const { context } = useContext(AppContext)
  const {
    properties,
    blogs,
    fetchPropertiesData,
    fetchBlogsData,
    fetchLocationData,
    fetchPropertyCategoryData,
    fetchDealTypeData,
    loadingProperties,
    locale
  } = context

  const featuredListRef = useRef(null)

  useEffect(() => {
    fetchDealTypeData(locale)
    fetchLocationData(locale)
    fetchPropertyCategoryData(locale)
    fetchPropertiesData({ locale })
    fetchBlogsData(locale)
  }, [fetchDealTypeData])

  return (
    <div className='flex-column'>
      <div className='container'>
        <Explore featuredListRef={featuredListRef} />
        <SearchContainer searchInput={searchInput} setSearchInput={setSearchInput} />
        {loadingProperties ? <Loader /> : <Featured properties={properties} innerRef={featuredListRef} />}
        {loadingProperties ? <Loader /> : <Properties title='All properties' properties={properties} />}
        <FindHouse />
      </div>
      <Discovery />
      <Articles data={blogs} />
    </div>
  )
}

export default Home
