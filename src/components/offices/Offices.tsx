import React from 'react'
import OfficeBox from './OfficeBox'
import { Header, Wrapper, BoxWrapper } from './OfficesStyles'

export default function Offices() {
  return (
    <Wrapper>
      <Header>
        <h1>Come and visit one of our offices</h1>
      </Header>
      <BoxWrapper className='flex'>
        <OfficeBox />
        <OfficeBox />
        {/* <OfficeBox />
        <OfficeBox />
        <OfficeBox /> */}
      </BoxWrapper>
    </Wrapper>
  )
}
