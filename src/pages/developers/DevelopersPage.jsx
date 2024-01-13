import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'

import { AppContext } from '../../context/createContext'
import { colors } from '../../lib/colors'
import { Link } from 'react-router-dom'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'

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
          <DeveloperContainer key={key}>
            <DeveloperInfoContainer>
              <DeveloperLogoContainer>
                <Link to={`/developers/${developer.id.toString()}`}>
                  <DeveloperLogo src={developer.cover} alt='logo' />
                </Link>
              </DeveloperLogoContainer>

              <DeveloperTitleContainer>
                <a href={developer.url} target='_blank' rel='noreferrer'>
                  <DeveloperTitle> {developer.title} </DeveloperTitle>
                </a>
              </DeveloperTitleContainer>

              <div>
                <ProjectsHeader>{t('Projects')}</ProjectsHeader>
                {developer.projects.map((project, key) => (
                  <ProjectTitle key={key}> {project.title} </ProjectTitle>
                ))}
              </div>
            </DeveloperInfoContainer>
          </DeveloperContainer>
        ))}
      </DevelopersPageWrapper>
    </>
  )
}

export const DevelopersPageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 4rem;
`

export const DevelopersPageHeader = styled.h2`
  padding: 2rem;

  span {
    color: ${colors.greyText};
    font-size: 1rem;
  }
`

export const DeveloperContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1rem 1rem 1.5rem;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
    img {
      transform: scale(1.03);
    }
  }
`
export const DeveloperInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
`

export const DeveloperTitleContainer = styled.div``
export const DeveloperTitle = styled.h3`
  cursor: pointer;

  &:hover {
    color: ${colors.secondary};
  }
`
export const ProjectsHeader = styled.h5`
  color: ${colors.greyText};
  padding-bottom: 0.8rem;
`
export const ProjectTitle = styled.h4``
export const DeveloperLogoContainer = styled.div`
  height: 10rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const DeveloperLogo = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
`
