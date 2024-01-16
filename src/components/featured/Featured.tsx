import React from 'react'
import FeatureHeader from './Header'
import FeaturedBox from './FeturedBox'
import { useTranslation } from 'react-i18next'
import Loader from '../Loader/Loader'
import { Util } from '../../helpers/Util'

export default function Featured({ properties, innerRef }: any) {
  const { t } = useTranslation()

  return (
    <>
      {Util.isNull(properties) ? (
        <Loader />
      ) : (
        <div>
          <div ref={innerRef}>
            <FeatureHeader title={t('FeaturedProperties')} />
            {properties[0] && (
              <FeaturedBox
                data={{
                  ...properties[0],
                  featured: true,
                  main: true,
                  id: properties[0].id
                }}
              />
            )}
            {properties[1] && (
              <FeaturedBox
                data={{
                  ...properties[1],
                  featured: true,
                  main: true,
                  id: properties[1].id
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
