import React, { useContext, useEffect } from 'react'
import { AboutContainer, Description, Images } from './AboutStyles'
import { TakeALook } from '../../components/takeALook/TakeALook'
import { AboutUs } from '../../components/aboutUs/AboutUs'
import { Values } from '../../components/values/Values'
import Offices from '../../components/offices/Offices'
import { AppContext } from '../../context/createContext'
import AboutAgents from '../../components/aboutUs/AboutAgents'

function About() {
  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData, about, fetchAboutData, offices, fetchOfficesData } = context

  useEffect(() => {
    fetchAgentsData()
  }, [fetchAgentsData])

  useEffect(() => {
    fetchAboutData()
  }, [fetchAboutData])

  useEffect(() => {
    fetchOfficesData()
  }, [fetchOfficesData])

  return (
    <AboutContainer>
      <div className='container'>
        <h1>{about?.header}</h1>
        <Description>
          <p>{about?.descriptionFirst}</p>
          <p>{about?.descriptionSecond}</p>
        </Description>
        <Images>
          {about?.gallery?.map((image: any, i: number) => (
            <img key={i} src={image.large} alt='aboutimg' />
          ))}
        </Images>
      </div>
      <TakeALook />
      <AboutUs />
      <AboutAgents agents={agents} />
      <Values />
      <Offices offices={offices} />
    </AboutContainer>
  )
}

export default About
