import React from 'react'
import { useTranslation } from 'react-i18next'
import { Wrapper, BoxWrapper } from './FindHouseStyles'
import Box from './Box'
import Button from '../button/Button'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from '../featured/FeaturedStyles'

export default function FindHouse() {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  return (
    <div ref={ref}>
      {inView && (
        <SlowLoader>
          <Wrapper>
            <h1>{t('FindHouseHeader')}</h1>
            <BoxWrapper>
              <Box icon='findHouse' title={t('FindHouseText1')} description={t('FindHouseDesc1')} />
              <Box icon='calendar' title={t('FindHouseText2')} description={t('FindHouseDesc2')} />
              <Box icon='house' title={t('FindHouseText3')} description={t('FindHouseDesc3')} />
            </BoxWrapper>
            <Button text={t('SearchForProperties')} color='black' to='/properties' />
          </Wrapper>
        </SlowLoader>
      )}
    </div>
  )
}
