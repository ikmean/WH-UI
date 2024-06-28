import React from 'react'
import { useTranslation } from 'react-i18next'

import { PropertiesPageHeader } from '../featured/FeaturedStyles'

function PropertiesHeader() {
  const { t } = useTranslation()

  return (
    <PropertiesPageHeader>
      <h1>{t('PropertiesPageHeader')}</h1>
      <p>{t('PropertiesPageDescription')}</p>
    </PropertiesPageHeader>
  )
}

export default PropertiesHeader
