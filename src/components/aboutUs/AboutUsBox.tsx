import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutBoxContainer, Text, ImgWrapper, InfoBox, props } from './AboutUsStyles'
import { AppContext } from '../../context/createContext'
import { Util } from '../../helpers/Util'
import Loader from '../Loader/Loader'

export const AboutUsBox = ({ reverse }: props) => {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { about } = context

  return (
    <AboutBoxContainer reverse={reverse}>
      <Text>
        <h1>{about.goalHeader}</h1>
        <p>{about.goalDescription}</p>
      </Text>
      <ImgWrapper>
        {Util.isNull(about.gallery) ? (
          <Loader />
        ) : (
          <img src={reverse ? about?.gallery[0]?.large : about?.gallery[1]?.large} alt='img1' width='622.72px' height='598px' />
        )}
        <InfoBox reverse={reverse}>
          <h2>{reverse ? about.succesfulSales : about.customerSatisfaction}</h2>
          <span>{reverse ? t('SuccessfulSales') : t('CustomerSatisfaction')}</span>
        </InfoBox>
      </ImgWrapper>
    </AboutBoxContainer>
  )
}
