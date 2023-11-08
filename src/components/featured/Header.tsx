import React from 'react'
import Button from '../button/Button'
import { HeaderStyles } from './FeaturedStyles'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FeatureHeader({ title }: any) {
  return (
    <HeaderStyles>
      <h1> {title} </h1>
      <Button text='Browse all properties' color='white' to='/properties' />
    </HeaderStyles>
  )
}
