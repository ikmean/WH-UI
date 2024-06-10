import React, { useContext, useEffect } from 'react'
import { AboutContainer, Description, HeaderAndDescription, Images } from './AboutStyles'
import { TakeALook } from '../../components/takeALook/TakeALook'
import { AboutUs } from '../../components/aboutUs/AboutUs'
import { Values } from '../../components/values/Values'
import Offices from '../../components/offices/Offices'
import { AppContext } from '../../context/createContext'
import AboutAgents from '../../components/aboutUs/AboutAgents'
import Loader from '../../components/Loader/Loader'
import { Util } from '../../helpers/Util'
import SEO from '../../components/seo'

function About() {
  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData, about, fetchAboutData, offices, fetchOfficesData, locale } = context

  useEffect(() => {
    fetchAgentsData(locale)
    fetchAboutData(locale)
    fetchOfficesData(locale)

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [fetchAgentsData])

  return Util.isNull(about) ? (
    <>
      <SEO title={`Warm House, About Us`} description={`Warm House, Best Real Estate Agency in Georgia`} />

      <Loader />
    </>
  ) : (
    <AboutContainer>
      <SEO title={`${about?.header}`} description={`${about.descriptionFirst},${about.descriptionSecond}`} />

      <div>
        <HeaderAndDescription>
          <h1>{about?.header}</h1>
          <Description>
            <p>{about?.descriptionFirst}</p>
            <p>{about?.descriptionSecond}</p>
          </Description>
        </HeaderAndDescription>
        <Images>
          {about?.gallery?.map((image, i) => (
            <img key={i} src={image.large} alt='aboutimg' />
          ))}
        </Images>
      </div>
      <TakeALook />
      <AboutUs />
      {Util.isNull(agents) ? <Loader /> : <AboutAgents agents={agents} />}

      <Values />
      {Util.isNull(offices) ? <Loader /> : <Offices offices={offices} />}
    </AboutContainer>
  )
}

export default About
