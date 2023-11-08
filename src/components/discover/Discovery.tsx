import React from 'react'
import Button from '../button/Button'
import { Wrapper, TextWrapper, ImgWrapper } from './DiscoveryStyles'
import discoveryImg1 from '../../lib/images/discoveryImg1.png'
import discoveryImg2 from '../../lib/images/discoveryImg2.png'

export default function Discovery() {
  return (
    <Wrapper>
      <div className='container flex'>
        <TextWrapper>
          <h1>The best place to discover amazing properties at great prices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit odio massa eget posuere at proin lectus proin morbi euismod itae purus
            donec cursus neque adipiscing maecenas proin eu viverra commodo felis risus at amet ornare pellentesque nulla ipsu.
          </p>
          <Button text='About our company' color='black' to='/' />
        </TextWrapper>
        <ImgWrapper>
          <img src={discoveryImg1} alt='discoveryImg1' />
          <img src={discoveryImg2} alt='discoveryImg2' />
        </ImgWrapper>
      </div>
    </Wrapper>
  )
}
