import React from 'react'
import { useTranslation } from 'react-i18next'

import { AboutAgentsWrapper, Header } from '../aboutUs/AboutUsStyles'
import { Agents } from '../../components/agents/Agents'

function AboutAgents({ agents }: any) {
  const { t } = useTranslation()

  return (
    <AboutAgentsWrapper>
      <Header>
        <h1>{t('MeetTheAgentsHeader')}</h1>
        <p>{t('MeetTheAgentsDesc')}</p>
      </Header>
      <Agents data={agents} />
    </AboutAgentsWrapper>
  )
}

export default AboutAgents
