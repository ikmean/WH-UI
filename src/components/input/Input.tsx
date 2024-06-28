import React, { useContext } from 'react'
import { InputStyles } from './InputStyles'
import { AppContext } from '../../context/createContext'

export const InputComponent = ({ placeholder, backgroundColor, selectedDealType, selectedPropertyCategory, selectedLocation }: any) => {
  const { context } = useContext(AppContext)
  const { searchInput, setSearchInput } = context

  return (
    <InputStyles backgroundColor={backgroundColor}>
      <input
        placeholder={placeholder}
        type='text'
        value={searchInput || ''}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) =>
          e.code === 'Enter' &&
          window.location.replace(
            `/properties?dealType=${selectedDealType}&propertyCategory=${selectedPropertyCategory}&location=${selectedLocation}`
          )
        }
      />
    </InputStyles>
  )
}
