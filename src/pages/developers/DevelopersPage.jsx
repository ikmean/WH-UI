import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { slideAnimation } from '../../styles'

import styled from 'styled-components'

import { AppContext } from '../../context/createContext'
import { colors } from '../../lib/colors'
import Loader from '../../components/Loader/Loader'
import { ReactComponent as GraySearch } from '../../lib/icons/graySearch.svg'
import Developer from './Developer'
import { media } from '../../helpers/device'
import { SearchBox, SearchButton } from '../../components/search/SearchStyles'
import { NoProperties } from '../../components/featured/FeaturedStyles'

export default function DevelopersPage() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { fetchDevelopersData, developers, locale, loadingDevelopers } = context
  const [title, setTitle] = useState('')

  useEffect(() => {
    fetchDevelopersData(locale)
  }, [fetchDevelopersData])

  return (
    <>
      <DevelopersPageHeader>
        <DevelopersPageTitle>{t('ConstructionCompanies')}</DevelopersPageTitle>
        <span>
          - {developers.length} {t('Company')}
        </span>
        <SearchBox>
          <div>
            <GraySearch />
            <input
              placeholder={t('SearchForDevelopers')}
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.code === 'Enter' && fetchDevelopersData(locale, title)}
            />
          </div>
          <SearchButton onClick={() => fetchDevelopersData(locale, title)}> {t('Search')}</SearchButton>
        </SearchBox>
      </DevelopersPageHeader>
      {loadingDevelopers ? (
        <Loader />
      ) : developers.length > 0 ? (
        <DevelopersPageWrapper>
          {developers.map((developer, key) => (
            <Developer developer={developer} key={key} />
          ))}
        </DevelopersPageWrapper>
      ) : (
        <NoProperties>{t('NoDevelopersFound')}</NoProperties>
      )}
    </>
  )
}

export const DevelopersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 4rem;
  padding: 5rem;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.9s forwards;

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.sm`
    grid-template-columns: auto;
    padding: 2rem;
  `}

  ${media.xs`
    margin-top: 30px;
  `}
`

export const DevelopersPageHeader = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 2rem;
  opacity: 0;
  animation: ${slideAnimation('100px')} 1s ease 0.5s forwards;

  ${SearchBox} {
    opacity: 0;
    animation: ${slideAnimation('100px')} 1s ease 0.7s forwards;
    margin-top: 20px;
  }

  span {
    color: ${colors.greyText};
    font-size: 1rem;
  }
`

export const DevelopersPageTitle = styled.div`
  font-size: 32px;
  line-height: 30px;

  ${media.sm`
      font-size: 22px;
      line-height: 15px;
  `}
`
