import React from 'react'
import FeatureHeader from '../featured/Header'
import FeaturedBox from '../featured/FeturedBox'
import { PropertiesWrapper, SlowLoader } from '../featured/FeaturedStyles'
import { useInView } from 'react-intersection-observer'

export default function Properties({ title, properties }: any) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-200px'
  })
  console.log('properties', inView)
  return (
    <div ref={ref}>
      {inView && (
        <SlowLoader>
          <FeatureHeader title={title} />
          {properties && (
            <PropertiesWrapper>
              {properties.map((data: any, i: number) => (
                <FeaturedBox
                  data={{
                    ...data,
                    featured: false,
                    main: false,
                    id: data.id
                  }}
                  key={i}
                />
              ))}
            </PropertiesWrapper>
          )}
        </SlowLoader>
      )}
    </div>
  )
}
