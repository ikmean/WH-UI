import React from 'react'
import Logo from '../header/Logo'
import { FooterText, FooterWrapper, Top, TopLeft } from './FooterStyles'
import SocialMedia from '../socialMedia/SocialMedia'
import Subscribe from '../subscribe/Subscribe'

export default function Footer() {
  return (
    <FooterWrapper className='footer'>
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
    </FooterWrapper>
  )
}
