import React from 'react'
import Logo from '../header/Logo'
import { FooterText, FooterWrapper, Top, TopLeft } from './FooterStyles'
import SocialMedia from '../socialMedia/SocialMedia'
import Subscribe from '../subscribe/Subscribe'
import { useInView } from 'react-intersection-observer'
import { SlowLoader } from '../featured/FeaturedStyles'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-75px'
  })
  console.log('footer', inView)
  return (
    <FooterWrapper className='footer' ref={ref}>
      {inView && (
        <SlowLoader>
          <div className='container'>
            <Top>
              <TopLeft>
                <Logo />
                <FooterText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna sed tortor nullam vel velit quis enim et amet.
                </FooterText>
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
