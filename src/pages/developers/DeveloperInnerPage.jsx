import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../context/createContext'
import { colors } from '../../lib/colors'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'
import RequestProperty from '../../components/request/CustomerContactRequest'

export default function DeveloperInnerPage() {
  const { t } = useTranslation()
  const { id } = useParams()

  const { context } = useContext(AppContext)
  const { fetchDeveloperInnerData, developerInner } = context

  useEffect(() => {
    fetchDeveloperInnerData(id)

    console.log(developerInner?.projects?.length)
  }, [fetchDeveloperInnerData])

  return Util.isNull(developerInner) ? (
    <Loader />
  ) : (
    <DeveloperInnerPageWrapper>
      <DeveloperInfoWrapper>
        <RequestProperty developer={developerInner.id} project={developerInner?.projects[0]?.id} />
        <DeveloperLogo src={developerInner?.cover} />
        <DeveloperInfoDetailsContainer>
          <DeveloperTitle>{developerInner?.title} </DeveloperTitle>
          <DeveloperDescription>{developerInner?.description}</DeveloperDescription>
          <DeveloperUrl href={developerInner?.url} target='_blank' rel='noreferrer'>
            {developerInner?.url}
          </DeveloperUrl>
        </DeveloperInfoDetailsContainer>
      </DeveloperInfoWrapper>

      <ProjectsWrapper>
        <ProjectsGridHeader>
          {developerInner?.title} {t('OngoingProjects')}
        </ProjectsGridHeader>

        <ProjectsGrid>
          {developerInner?.projects?.map((project, key) => (
            <div key={key}>
              <img src={project?.cover} />
              {project?.title}
            </div>
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>
    </DeveloperInnerPageWrapper>
  )
}

export const DeveloperInnerPageWrapper = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`
export const DeveloperInfoWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  padding: 2rem;
`
export const DeveloperLogo = styled.img`
  width: auto;
  height: 15rem;
  padding: 1rem;
`
export const DeveloperInfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  width: 100%;
  padding: 1rem;
`
export const DeveloperTitle = styled.h3``
export const DeveloperDescription = styled.p``
export const DeveloperUrl = styled.a`
  cursor: pointer;
  &:hover {
    color: ${colors.secondary};
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5rem;
`

export const ProjectsGridHeader = styled.h2``
