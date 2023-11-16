import React, { useContext } from 'react'
import Box from './Box'
import { Container, Title } from './TakeALookStyles'
import { AppContext } from '../../context/createContext'

export const TakeALook = () => {
  const { context } = useContext(AppContext)
  const { about } = context

  return (
    <Container>
      <Title>Take a look at our numbers</Title>
      <div className='flex space-between'>
        <Box h1={about.customerSatisfaction} h2={'Customer satisfaction'} p={about.customerSatisfactionDescription} />
        <Box h1={about.inPropertySales} h2={'In property sales'} p={about.inPropertySalesDescription} />
        <Box h1={about.succesfulSales} h2={'Successful sales'} p={about.succesfullSalesDescription} />
      </div>
    </Container>
  )
}
