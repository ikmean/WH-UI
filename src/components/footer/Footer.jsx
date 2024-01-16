import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from '../header/Logo'
import { FooterText, FooterWrapper, Top, TopLeft } from './FooterStyles'
import SocialMedia from '../socialMedia/SocialMedia'
import Subscribe from '../subscribe/Subscribe'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from '../featured/FeaturedStyles'
import { Left } from '../header/HeaderStyles'

export default function Footer() {
  const { t } = useTranslation()

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-80px'
  })

  return (
    <FooterWrapper className='footer' ref={ref}>
      {inView && (
        <SlowLoader>
          <div className='container'>
            <Top>
              <TopLeft>
                <Left>
                  <Logo />
                  <h1>Warm House</h1>
                </Left>
                <FooterText>{t('FooterText')}</FooterText>
                <SocialMedia />
              </TopLeft>
              <Subscribe />
            </Top>
          </div>
        </SlowLoader>
      )}
    </FooterWrapper>
  )
}
