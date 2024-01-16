import React from 'react'
import { useTranslation } from 'react-i18next'

import Logo from '../header/Logo'
import { FooterText, FooterWrapper, Top, TopLeft } from './FooterStyles'
import SocialMedia from '../socialMedia/SocialMedia'
import Subscribe from '../subscribe/Subscribe'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <FooterWrapper>
      <Top>
        <TopLeft>
          <Logo />
          <FooterText>{t('FooterText')}</FooterText>
          <SocialMedia />
        </TopLeft>
        <Subscribe />
      </Top>
    </FooterWrapper>
  )
}
