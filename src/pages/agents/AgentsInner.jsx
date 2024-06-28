import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { BrowseMore } from '../properties/PropertiesStyles'
import { ReactComponent as Phone } from '../../lib/icons/phone.svg'
import { ReactComponent as MailRed } from '../../lib/icons/mailRed.svg'
import { AgentBoxInfoContainer, AgentBoxWrapperPage, AgentInfo, AgentsInnerPageStyles, ContentBy } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'
import { PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'
import Articles from '../../components/articles/Articles'
import SEO from '../../components/seo'

function AgentsInner() {
  const { t } = useTranslation()

  const { context } = useContext(AppContext)
  const { agentsInner, fetchAgentsInnerData } = context
  const [data, setData] = useState(agentsInner)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchAgentsInnerData(id)
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [id, fetchAgentsInnerData])

  useEffect(() => {
    agentsInner && setData(agentsInner)
  }, [agentsInner])

  return Util.isNull(data) ? (
    <>
      <SEO title={`Warm House Team`} description={t('AgentPageDesc')} />
      <Loader />
    </>
  ) : (
    <AgentsInnerPageStyles>
      <SEO title={`Warm House - ${agentsInner.name} ${agentsInner.lastName}`} description={`${agentsInner.about}`} />
      <AgentBoxWrapperPage>
        <img src={agentsInner?.profilePicture.url} alt='agentImage' />
        <AgentBoxInfoContainer>
          <div>
            <h2>
              {agentsInner?.name} {agentsInner?.lastName}
            </h2>
            <p>{agentsInner?.about}</p>
          </div>
          <AgentInfo>
            <div className='flex gap-1rem'>
              <Phone />
              <span>{agentsInner?.phoneNumber}</span>
            </div>
            <div className='flex gap-1rem'>
              <MailRed />
              <span>{agentsInner?.email}</span>
            </div>
          </AgentInfo>
        </AgentBoxInfoContainer>
      </AgentBoxWrapperPage>

      <BrowseMore>
        <ContentBy className='container'>
          <div className='flex center space-between'>
            <h1>
              {data?.name} {data?.lastName}
              {t('PropertiesInChargeOf')}
            </h1>
          </div>
          <PropertiesPageWrapper>
            {data?.properties.map((data, i) => (
              <FeaturedBox
                data={{
                  ...data,
                  featured: false,
                  main: false,
                  id: data.id
                }}
                key={i}
              />
            ))}
          </PropertiesPageWrapper>
        </ContentBy>
      </BrowseMore>
      <Articles data={data.blogs} />
    </AgentsInnerPageStyles>
  )
}

export default AgentsInner
