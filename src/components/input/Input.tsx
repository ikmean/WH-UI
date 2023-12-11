import React from 'react'
import { InputStyles } from './InputStyles'

export const InputComponent = ({ placeholder, backgroundColor }: any) => {
  return (
    <InputStyles backgroundColor={backgroundColor}>
      <input placeholder={placeholder}></input>
    </InputStyles>
  )
}
