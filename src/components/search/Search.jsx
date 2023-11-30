import React from 'react'
import { SearchBox } from './SearchStyles'
import Button from '../button/Button'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import { InputComponent } from '../input/Input'

export default function Search() {
  return (
    <SearchBox>
      <div>
        <GraySearch />
        <InputComponent placeholder='Search for properties' />
      </div>
      <Button text='Search' color='red' />
    </SearchBox>
  )
}
