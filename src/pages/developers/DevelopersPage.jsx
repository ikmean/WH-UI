import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { AppContext } from '../../context/createContext'
import { colors } from '../../lib/colors'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'
import Developer from './Developer'
import { media } from '../../helpers/device'

export default function DevelopersPage() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { fetchDevelopersData, developers, locale } = context

  useEffect(() => {
    fetchDevelopersData(locale)
  }, [fetchDevelopersData])

  return Util.isNull(developers) ? (
    <Loader />
  ) : (
    <>
      <DevelopersPageHeader>
        {t('ConstructionCompanies')}{' '}
        <span>
          {' '}
          - {developers.length} {t('Company')}
        </span>
      </DevelopersPageHeader>
      <DevelopersPageWrapper>
        {developers.map((developer, key) => (
          <Developer developer={developer} key={key} />
        ))}
      </DevelopersPageWrapper>
    </>
  )
}

export const DevelopersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 4rem;
  padding: 5rem;
  ${media.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.sm`
    grid-template-columns: auto;
    padding: 2rem;
  `}
`

export const DevelopersPageHeader = styled.h2`
  padding: 2rem;

  span {
    color: ${colors.greyText};
    font-size: 1rem;
  }
`
