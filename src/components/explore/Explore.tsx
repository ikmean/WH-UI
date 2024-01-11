import React from 'react'
import PostButton from '../button/PostButton'
import { ExploreButton, ExploreHeader, ExploreText, ExploreWrapper, Left, Right } from './ExploreStyles'
import img1 from '../../lib/images/img1.png'
import img2 from '../../lib/images/img2.png'
import img3 from '../../lib/images/img3.png'
import img4 from '../../lib/images/img4.png'
import { useTranslation } from 'react-i18next'

function Explore({ featuredListRef }: any) {
  const { t } = useTranslation()

  const handleClick = () => {
    featuredListRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
  }

  return (
    <ExploreWrapper>
      <Left>
        <ExploreHeader> {t('ExploreHeader')} </ExploreHeader>
        <ExploreText> {t('ExploreText')} </ExploreText>
        <ExploreButton>
          <PostButton text={t('StartExploring')} margin='40px 0 0 0' onClick={() => handleClick()} />
        </ExploreButton>
      </Left>
      <Right>
        <div>
          <img src={img1} alt='img1' />
          <img src={img3} alt='img3' />
        </div>
        <div>
          <img src={img2} alt='img2' />
          <img src={img4} alt='img4' />
        </div>
      </Right>
    </ExploreWrapper>
  )
}

export default Explore
