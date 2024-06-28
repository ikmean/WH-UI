import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { AppContext } from '../../context/createContext'
import { colors } from '../../lib/colors'

import { ReactComponent as LocationIcon } from '../../lib/icons/location.svg'

import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'
import RequestProperty from '../../components/request/CustomerContactRequest'
import Developer from './Developer'
import { media } from '../../helpers/device'
import SEO from '../../components/seo'

export default function DeveloperInnerPage() {
  const { t } = useTranslation()
  const { id } = useParams()

  const { context } = useContext(AppContext)
  const { fetchDeveloperInnerData, developerInner, fetchDevelopersData, developers, locale } = context

  useEffect(() => {
    if (id) {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      fetchDeveloperInnerData(id)
    }

    fetchDevelopersData(locale)
  }, [id, fetchDeveloperInnerData])

  return Util.isNull(developerInner) ? (
    <>
      <SEO title={`${developerInner?.title}`} description={`${developerInner?.description}`} />
      <Loader />
    </>
  ) : (
    <DeveloperInnerPageWrapper>
      <SEO title={`${developerInner?.title}`} description={`${developerInner?.description}`} />
      <DeveloperInfoWrapper>
        <DeveloperLogo src={developerInner?.cover} />
        <DeveloperInfoDetailsContainer>
          <DeveloperTitle>{developerInner?.title} </DeveloperTitle>
          <div>12 Projects in Progress</div>
          <div>6 Projects completed</div>
          <DeveloperDescription>{developerInner?.description}</DeveloperDescription>
          <span>{developerInner?.url}</span>
        </DeveloperInfoDetailsContainer>
        <RequestProperty developer={developerInner.id.toString()} project={developerInner?.projects[0]?.id.toString()} />
      </DeveloperInfoWrapper>

      <FlexWrapper>
        <GridHeader>
          {developerInner?.title}{' '}
          <span>
            {' '}
            - {developerInner.projects.length} {t('OngoingProjects')}
          </span>
        </GridHeader>

        <Grid>
          {developerInner?.projects?.map((project, key) => (
            <ProjectContainer key={key}>
              <img src={project?.cover} />
              <ProjectDetailsContainer>
                <h4>
                  {project?.title}
                  <span>
                    {' '}
                    - {t('PricesFrom')} {project?.pricesFrom} GEL{' '}
                  </span>
                </h4>
                <ProjectLocationWrapper>
                  {' '}
                  <LocationIcon />{' '}
                  <span>
                    {' '}
                    {project?.city}, {project?.address}{' '}
                  </span>{' '}
                </ProjectLocationWrapper>
                <p></p>
              </ProjectDetailsContainer>
            </ProjectContainer>
          ))}
        </Grid>
      </FlexWrapper>

      <FlexWrapper>
        <GridHeader>
          {t('SeeMoreDevelopers')}{' '}
          <span>
            {' '}
            - {developers.length} {t('OfThem')}{' '}
          </span>
        </GridHeader>
        <DevelopersGridGrid column={5}>
          {developers.map((developer, key) => (
            <Developer developer={developer} key={key} />
          ))}
        </DevelopersGridGrid>
      </FlexWrapper>
    </DeveloperInnerPageWrapper>
  )
}

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5rem;

  ${media.md`
    grid-template-columns: repeat(2, 1fr);
    
  `}

  ${media.sm`
    grid-template-columns: repeat(1, 1fr);
    padding: 5rem 4rem;
  `}

  ${media.xs`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`
export const DevelopersGridGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 5rem;

  ${media.lg`
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  `}

  ${media.md`
  grid-template-columns: repeat(2, 1fr);
    
  `}

  ${media.sm`
  grid-template-columns: repeat(1, 1fr);
    
  `}
`
export const GridHeader = styled.h2`
  span {
    color: ${colors.greyText};
    font-size: 1.1rem;
  }

  ${media.md`
    text-align: center;
  `}

  ${media.sm`
    font-size: 1rem;
    span{
      font-size: 0.95rem;
    }
  `}
`
export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${media.lg`
    align-items: center;
  `}
`

export const DeveloperInnerPageWrapper = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`
export const DeveloperInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  padding: 2rem;

  ${media.lg`
    align-items: center;
  `}
`
export const DeveloperLogo = styled.img`
  width: 50rem;
  height: auto;
  padding: 1rem;

  ${media.lg`
    width: 45rem;
  `}
  ${media.sm`
    width: 80vw;
  `}
`
export const DeveloperInfoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);
  width: 100%;
  padding: 1rem;

  ${media.sm`
    width: 80%;
  `}
  ${media.xs`
    width: 60%;
    padding: 2rem;
  `}
`
export const DeveloperTitle = styled.h3``
export const DeveloperDescription = styled.p``

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 0 1rem 0;
  box-shadow: 0px 3px 20px rgba(8, 15, 52, 0.06);

  img {
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  span {
    color: ${colors.greyText};
  }

  p {
    color: ${colors.greyText};
  }

  &:hover {
    transition: transform 0.3s ease;
    transform: translateY(-10px);
    img {
      transform: scale(1);
    }
  }

  ${media.xs`
    justify-content: center;
    width: 80vw;
  `}
`

export const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-left: 1rem;
`
export const ProjectLocationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
