import React from 'react'
import { useTranslation } from 'react-i18next'

import { Header } from '../aboutUs/AboutUsStyles'
import { Agents } from '../../components/agents/Agents'

function AboutAgents({ agents }: any) {
  const { t } = useTranslation()

  return (
    <div className='container'>
      <Header className='flex space-between center'>
        <h1>{t('MeetTheAgentsHeader')}</h1>
        <p>{t('MeetTheAgentsDesc')}</p>
      </Header>
      <Agents data={agents} />
    </div>
  )
}

export default AboutAgents
