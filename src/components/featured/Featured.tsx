import React from 'react'
import FeatureHeader from './Header'
import FeaturedBox from './FeturedBox'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from './FeaturedStyles'

export default function Featured({ properties }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-100px'
  })
  console.log(inView)
  return (
    <div ref={ref}>
      {inView && (
        <SlowLoader>
          <div>
            <FeatureHeader title='Featured properties' />
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
  )
}
