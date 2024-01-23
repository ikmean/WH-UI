import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { AgentsWrapper, Header } from './AgentsStyles'
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
        <AgentsWrapper>
          <Header>
            <h1>{t('OurAgents')}</h1>
            <p>{t('AgentPageDesc')}</p>
          </Header>
          <Agents data={agents} />
        </AgentsWrapper>
      )}
    </>
  )
}

export default AgentsPage
