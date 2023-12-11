import React from 'react'
import Search from './Search.jsx'
import Dropdown from '../dropdown/Dropdown.jsx'
import { SearchContainerStyles } from './SearchStyles.jsx'

export default function SearchContainer({ location, propertyCategory, dealType }) {
  return (
    <SearchContainerStyles>
      <Dropdown text='Type' data={dealType} />
      <Dropdown text='Property' data={propertyCategory} />
      <Dropdown text='Location' data={location} />
      <Search />
    </SearchContainerStyles>
  )
}
