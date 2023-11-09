import React from 'react'
import Box from './Box'
import { Container, Title } from './TakeALookStyles'

export const TakeALook = () => {
  return (
    <Container>
      <Title>Take a look at our numbers</Title>
      <div className='flex space-between'>
        <Box h1={'99%'} h2={'Customer satisfaction'} p={'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'} />
        <Box h1={'50M+'} h2={'In property sales'} p={'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'} />
        <Box h1={'2,400+'} h2={'Successful sales'} p={'Lorem ipsum dolor sit amet dolor sit consectetur adipiscing.'} />
      </div>
    </Container>
  )
}
