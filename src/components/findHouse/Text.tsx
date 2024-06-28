import React from 'react'
import { TextWrapper } from './FindHouseStyles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Text({ title, description }: any) {
  return (
    <TextWrapper>
      <h2>{title}</h2>
      <span>{description}</span>
    </TextWrapper>
  )
}
