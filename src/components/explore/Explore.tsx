import React from 'react'
import PostButton from '../button/PostButton'
import { ExploreHeader, ExploreWrapper, Left, Right } from './ExploreStyles'
import img1 from '../../lib/images/img1.png'
import img2 from '../../lib/images/img2.png'
import img3 from '../../lib/images/img3.png'
import img4 from '../../lib/images/img4.png'

function Explore() {
  return (
    <ExploreWrapper>
      <Left>
        <ExploreHeader>The best place to find your dream house</ExploreHeader>
        <span>Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat purus suscipit turpis sed vitae.</span>
        <PostButton text='Start exploring' margin='40px 0 0 0' />
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
