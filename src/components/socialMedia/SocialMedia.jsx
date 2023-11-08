import React from 'react'
import { SocialMediaWrapper, Social } from './SocialMediaStyles'
import { ReactComponent as Facebook } from '../../lib/icons/facebook.svg'
import { ReactComponent as Twitter } from '../../lib/icons/Twitter.svg'
import { ReactComponent as Linkedin } from '../../lib/icons/linkedin.svg'
import { ReactComponent as Youtube } from '../../lib/icons/youtube.svg'
import { ReactComponent as Whatsapp } from '../../lib/icons/whatsapp.svg'

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Facebook />
        </a>
      </Social>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Twitter />
        </a>
      </Social>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Linkedin />
        </a>
      </Social>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Youtube />
        </a>
      </Social>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Whatsapp />
        </a>
      </Social>
    </SocialMediaWrapper>
  )
}
