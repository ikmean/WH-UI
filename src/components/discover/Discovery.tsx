import React from 'react'
import { useTranslation } from 'react-i18next'

import Button from '../button/Button'
import { Wrapper, TextWrapper, ImgWrapper } from './DiscoveryStyles'
import discoveryImg1 from '../../lib/images/discoveryImg1.png'
import discoveryImg2 from '../../lib/images/discoveryImg2.png'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from '../featured/FeaturedStyles'

export default function Discovery() {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-390px'
  })
  return (
    <div ref={ref}>
      {inView && (
        <SlowLoader>
          <Wrapper>
            <TextWrapper>
              <h1>{t('DiscoveryHeader')}</h1>
              <p>{t('DiscoveryDescription')}</p>
              <Button text={t('AboutOurCompany')} color='black' to='/about' />
            </TextWrapper>
            <ImgWrapper>
              <img src={discoveryImg1} alt='discoveryImg1' />
              <img src={discoveryImg2} alt='discoveryImg2' />
            </ImgWrapper>
          </Wrapper>
        </SlowLoader>
      )}
    </div>
  )
}
