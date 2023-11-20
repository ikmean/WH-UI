import React from 'react'
import FeatureHeader from './Header'
import FeaturedBox from './FeturedBox'

export default function Featured({ properties, innerRef }: any) {
  return (
    <div ref={innerRef}>
      <FeatureHeader title='Featured properties' />
      <div>
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
  )
}
