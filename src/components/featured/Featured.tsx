import React from 'react'
import FeatureHeader from './Header'
import FeaturedBox from './FeturedBox'
// import { useInView } from 'react-intersection-observer'

export default function Featured({ properties, innerRef }: any) {
  // const [ref, inView] = useScrollFadeIn()

  // function useScrollFadeIn(delay = 500) {
  //   const [ref, inView] = useInView({
  //     triggerOnce: true,
  //     delay
  //   })

  //   return [ref, inView]
  // }

  return (
    <div ref={innerRef}>
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
    </div>
  )
}
