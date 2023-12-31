import React, { useContext, useEffect, useState } from 'react'
import { BrowseMore } from '../properties/PropertiesStyles'
import { ReactComponent as Phone } from '../../lib/icons/phone.svg'
import { ReactComponent as MailRed } from '../../lib/icons/mailRed.svg'
import ArticleBox from '../../components/articles/ArticleBox'
import Button from '../../components/button/Button'
import { AgentBoxWrapperPage, AgentInfo, AgentsInnerPageStyles, ArticleWrapper, ContentBy } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'
import { PropertiesPageWrapper } from '../../components/featured/FeaturedStyles'
import FeaturedBox from '../../components/featured/FeturedBox'
import { Util } from '../../helpers/Util'
import Loader from '../../components/Loader/Loader'

function AgentsInner() {
  const { context } = useContext(AppContext)
  const { agentsInner, fetchAgentsInnerData } = context
  const [data, setData] = useState(agentsInner)

  const { id } = useParams()

  useEffect(() => {
    if (id) {
      fetchAgentsInnerData(id)
    }
    window.scrollTo(0,0)
  }, [id, fetchAgentsInnerData])

  useEffect(() => {
    agentsInner && setData(agentsInner)
  }, [agentsInner])

  return (
    Util.isNull(data) ? 
    <Loader /> :
    <AgentsInnerPageStyles>
      <AgentBoxWrapperPage>
        <img src={agentsInner?.profilePicture.url} alt='img2' />
        <div className={'column'}>
          <div>
            <h2>
              {agentsInner?.name} {agentsInner?.lastName}
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper
              lorem eu cursus vel ndrerit.
            </p>
          </div>
          <hr style={{ marginLeft: '90px', color: '#E9E9E9', borderWidth: '1px' }} />
          <AgentInfo>
            <div className={'row'}>
              <Phone />
              <span>{agentsInner?.phoneNumber}</span>
            </div>
            <div className={'row'}>
              <MailRed />
              <span>{agentsInner?.email}</span>
            </div>
          </AgentInfo>
        </div>
      </AgentBoxWrapperPage>

      <BrowseMore>
        <ContentBy className='container'>
          <div className='flex center space-between'>
            <h1>
              Properties in charge of {data?.name} {data?.lastName}
            </h1>
            <Button color='white' text='Browse all properties' to='/properties'></Button>
          </div>
          <PropertiesPageWrapper>
            {data?.properties.map((data: any, i: number) => (
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

      {data && (
        <ContentBy className='container'>
          <div className='flex center space-between'>
            <h1>
              Articles by {data?.name} {data?.lastName}
            </h1>
            <Button color='white' text='Browse all posts' to='/blogs'></Button>
          </div>
          <ArticleWrapper>
            {data?.blogs
              .map(
                (data: any, i: number) =>
                  data && (
                    <ArticleBox
                      data={{
                        ...data,
                        id: data?.id
                      }}
                      key={i}
                    />
                  )
              )
              .slice(0, 3)}
          </ArticleWrapper>
        </ContentBy>
      )}
    </AgentsInnerPageStyles>
  )
}

export default AgentsInner
