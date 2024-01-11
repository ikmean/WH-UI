import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { Header } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { Agents } from '../../components/agents/Agents'
import Loader from '../../components/Loader/Loader'
import { Util } from '../../helpers/Util'

function AgentsPage() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData, locale } = context

  useEffect(() => {
    fetchAgentsData(locale)
  }, [fetchAgentsData])

  return (
    <>
      {Util.isNull(agents) ? (
        <Loader />
      ) : (
        <div className='container'>
          <Header className='flex space-between center'>
            <h1>{t('OurAgents')}</h1>
            <p>{t('AgentPageDesc')}</p>
          </Header>
          <Agents data={agents} />
        </div>
      )}
    </>
  )
}

export default AgentsPage
