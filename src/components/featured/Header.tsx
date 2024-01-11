import React from 'react'
import Button from '../button/Button'
import { HeaderStyles } from './FeaturedStyles'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FeatureHeader({ title }: any) {
  const { t } = useTranslation()

  return (
    <HeaderStyles>
      <h1> {title} </h1>
      <Button text={t('BrowseProperties')} color='white' to='/properties' />
    </HeaderStyles>
  )
}
