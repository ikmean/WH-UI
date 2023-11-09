import React from 'react'
import { BoxWrapper } from './TakeALookStyles'

const Box = ({ h1, h2, p }: any) => {
  return (
    <BoxWrapper>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
      <p>{p}</p>
    </BoxWrapper>
  )
}

export default Box

{
  /* <h1>99%</h1>
    <h2>Customer satisfaction</h2>
    <p>Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.</p> */
}
