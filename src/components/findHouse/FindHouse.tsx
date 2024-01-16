import React from 'react'
import { useTranslation } from 'react-i18next'
import { Wrapper, BoxWrapper } from './FindHouseStyles'
import Box from './Box'
import Button from '../button/Button'

export default function FindHouse() {
  const { t } = useTranslation()

  return (
    <div>
      <Wrapper>
        <h1>{t('FindHouseHeader')}</h1>
        <BoxWrapper>
          <Box icon='findHouse' title={t('FindHouseText1')} description={t('FindHouseDesc1')} />
          <Box icon='calendar' title={t('FindHouseText2')} description={t('FindHouseDesc2')} />
          <Box icon='house' title={t('FindHouseText3')} description={t('FindHouseDesc3')} />
        </BoxWrapper>
        <Button text={t('SearchForProperties')} color='black' to='/properties' />
      </Wrapper>
    </div>
  )
}
