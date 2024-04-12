import React from 'react'
import { SocialMediaWrapper, Social } from './SocialMediaStyles'
import { ReactComponent as Facebook } from '../../lib/icons/facebook.svg'
import { ReactComponent as Instagram } from '../../lib/icons/instagram.svg'
import { ReactComponent as Linkedin } from '../../lib/icons/linkedin.svg'
import { ReactComponent as TikTok } from '../../lib/icons/tiktok.svg'

import { ReactComponent as Whatsapp } from '../../lib/icons/whatsapp.svg'

export default function SocialMedia() {
  return (
    <SocialMediaWrapper>
      <Social>
        <a href='https://www.facebook.com/YourWarmHouse' rel='noreferrer' target='_blank'>
          <Facebook />
        </a>
      </Social>
      <Social>
        <a href='https://www.linkedin.com/company/warm-house-თბილი-სახლი' rel='noreferrer' target='_blank'>
          <Linkedin />
        </a>
      </Social>
      <Social>
        <a href='https://www.facebook.com/' rel='noreferrer' target='_blank'>
          <Whatsapp />
        </a>
      </Social>
      <Social>
        <a href='https://www.instagram.com/warm.ge' rel='noreferrer' target='_blank'>
          <Instagram />
        </a>
      </Social>
      <Social>
        <a href='https://www.tiktok.com/@warm.ge' rel='noreferrer' target='_blank'>
          <TikTok />
        </a>
      </Social>
    </SocialMediaWrapper>
  )
}
