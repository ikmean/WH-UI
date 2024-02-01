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
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import MapComponent from '../../map component/MapComponent'

function Home({ searchInput, setSearchInput }) {
  const { t } = useTranslation()
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
  const [searchParams, setSearchParams] = useSearchParams()

  const featuredListRef = useRef(null)

  useEffect(() => {
    setSearchParams({ locale })
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
        {loadingProperties ? <Loader /> : <Properties title={t('AllProperties')} properties={properties} />}
        <FindHouse />
      </div>
      <Discovery />
      <Articles data={blogs} />
    </div>
  )
}

export default Home
