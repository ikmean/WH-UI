import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { AgentsWrapper, Header } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { Agents } from '../../components/agents/Agents'
import Loader from '../../components/Loader/Loader'
import { Util } from '../../helpers/Util'
import SEO from '../../components/seo'

function AgentsPage() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData, locale } = context

  useEffect(() => {
    fetchAgentsData(locale)

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [fetchAgentsData])

  return (
    <>
      {Util.isNull(agents) ? (
        <>
          <SEO title={`Warm House - Agents`} description={`Warm House - Best Real Estate Agents`} />
          <Loader />
        </>
      ) : (
        <AgentsWrapper>
          <SEO title={`Warm House Team`} description={t('AgentPageDesc')} />
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
