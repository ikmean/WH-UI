import React from 'react'
import OfficeBox from './OfficeBox'
import { Header, Wrapper, BoxWrapper } from './OfficesStyles'

export default function Offices({ offices }: any) {
  console.log(offices)
  return (
    <Wrapper>
      <Header>
        <h1>Come and visit one of our offices</h1>
      </Header>
      <BoxWrapper className='flex'>
        {offices?.map((office: any, i: number) => (
          <OfficeBox
            key={i}
            title={office.title}
            about={office.about}
            number={office.phone}
            location={office.address}
            gallery={office.gallery}
          />
        ))}
      </BoxWrapper>
    </Wrapper>
  )
}
