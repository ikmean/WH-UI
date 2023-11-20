import React, { useContext } from 'react'
import { AboutBoxContainer, Text, ImgWrapper, InfoBox, props } from './AboutUsStyles'
import img1 from '../../lib/images/img1.png'
import { AppContext } from '../../context/createContext'

export const AboutUsBox = ({ reverse }: props) => {
  const { context } = useContext(AppContext)
  const { about } = context

  return (
    <AboutBoxContainer reverse={reverse}>
      <Text>
        <h1>{about.goalHeader}</h1>
        <p>{about.goalDescription}</p>
      </Text>
      <ImgWrapper>
        <img src={img1} alt='img1' width='622.72px' height='598px' />
        <InfoBox reverse={reverse}>
          <h2>{about.succesfulSales}</h2>
          <span>Successful sales</span>
        </InfoBox>
      </ImgWrapper>
    </AboutBoxContainer>
  )
}
