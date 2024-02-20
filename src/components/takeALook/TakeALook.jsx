import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import Box from './Box'
import { Container, TakeALookContainer, Title } from './TakeALookStyles'
import { AppContext } from '../../context/createContext'

export const TakeALook = () => {
  const { t } = useTranslation()
  const { context } = useContext(AppContext)
  const { about } = context

  return (
    <Container>
      <Title>{t('TakeALookHeader')}</Title>
      <TakeALookContainer>
        <Box h1={about.inPropertySales} h2={t('InPropertySales')} p={about.inPropertySalesDescription} />
        <Box h1={about.customerSatisfaction} h2={t('CustomerSatisfaction')} p={about.customerSatisfactionDescription} />
        <Box h1={about.succesfulSales} h2={t('SuccessfulSales')} p={about.succesfullSalesDescription} />
      </TakeALookContainer>
    </Container>
  )
}
