import React from 'react'
import FeatureHeader from './Header'
import FeaturedBox from './FeturedBox'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { SlowLoader } from './FeaturedStyles'
import Loader from '../Loader/Loader'
import { Util } from '../../helpers/Util'

export default function Featured({ properties }: any) {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  })

  return (
    <>
      {Util.isNull(properties) ? (
        <Loader />
      ) : (
        <div ref={ref}>
          {inView && (
            <SlowLoader>
              <div>
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
            </SlowLoader>
          )}
        </div>
      )}
    </>
  )
}
