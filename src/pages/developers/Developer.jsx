import React from 'react'
import { useTranslation } from 'react-i18next'

import styled from 'styled-components'
import { colors } from '../../lib/colors'
import { Link } from 'react-router-dom'

export default function Developer({ developer }) {
  const { t } = useTranslation()

  return (
    <DeveloperContainer>
      <DeveloperLogoContainer>
        <Link to={`/developers/${developer.id.toString()}`}>
          <DeveloperLogo src={developer.cover} alt='logo' />
        </Link>
      </DeveloperLogoContainer>
      <DeveloperInfoContainer>
        <div>
          <h3> {developer.title} </h3>
        </div>

        <div>
          <ProjectsHeader>{t('Projects')}</ProjectsHeader>
          {developer.projects.map((project, key) => (
            <ProjectTitle key={key}> {project.title} </ProjectTitle>
          ))}
        </div>
      </DeveloperInfoContainer>
    </DeveloperContainer>
  )
}

export const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 0 1rem 0;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
    img {
      transform: scale(1);
    }
  }
`
export const DeveloperInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem;
`

export const ProjectsHeader = styled.h5`
  color: ${colors.greyText};
  padding-bottom: 0.8rem;
`
export const ProjectTitle = styled.h4``
export const DeveloperLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  width: 100%;
`
export const DeveloperLogo = styled.img`
  cursor: pointer;
  width: 100%;
  height: 8rem;
`
