import React from 'react'
import { AboutContainer, Description, Images } from './AboutStyles'
import aboutimg from '../../lib/images/aboutimg.png'
import { TakeALook } from '../../components/takeALook/TakeALook'
import { AboutUs } from '../../components/aboutUs/AboutUs'
import { Agents } from '../../components/agents/Agents'
import { Values } from '../../components/values/Values'
import Offices from '../../components/offices/Offices'

function About() {
  return (
    <AboutContainer>
      <div className='container'>
        <h1>About our real estate firm</h1>
        <Description>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli quis sed ac curabitur bibendum blandit nisl morbi tellus tincidunt
            condimentum facilisi rhoncus ut cursus placerat facilisis dui posuere.
          </p>
          <p>
            Blandit massa enim nec dui morbi enim nunc faucibus a pellentesque sit amet porttitor eget non enim praesent elementum facilisis
            aliquet enim tortor at auctor urna ullamcorper a lacus.
          </p>
        </Description>
        <Images>
          <img src={aboutimg} alt='aboutimg' />
          <img src={aboutimg} alt='aboutimg' />
          <img src={aboutimg} alt='aboutimg' />
        </Images>
      </div>
      <TakeALook />
      <AboutUs />
      <Agents />
      <Values />
      <Offices />
    </AboutContainer>
  )
}

export default About
