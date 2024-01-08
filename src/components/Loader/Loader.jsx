import React from 'react'
import { LoaderContainer, LoaderAnimation } from './LoaderStyles'

const Loader = ({ type = 'BIG' }) => {
  return (
    <LoaderContainer type={type}>
      <LoaderAnimation type={type}></LoaderAnimation>
    </LoaderContainer>
  )
}

export default Loader
