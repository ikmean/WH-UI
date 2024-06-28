import React from 'react'
import { AboutUsBox } from './AboutUsBox'
import { Wrapper } from './AboutUsStyles'

export const AboutUs = () => {
  return (
    <Wrapper>
      <AboutUsBox />
      <AboutUsBox reverse={true} />
    </Wrapper>
  )
}
