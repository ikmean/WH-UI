import React, { useContext, useEffect, useState } from 'react'
import AgentBox from '../../components/agents/AgentBox'
import { BrowseMore } from '../properties/PropertiesStyles'
import Properties from '../../components/properties/Properties'
import ArticleBox from '../../components/articles/ArticleBox'
import Button from '../../components/button/Button'
import { AgentsInnerPageStyles, ArticleBy, ArticleWrapper } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { useParams } from 'react-router-dom'

function AgentsInner() {
  const { context } = useContext(AppContext)
  const { agentsInner, fetchAgentsInnerData } = context
  const [data, setData] = useState(agentsInner)
  const { id } = useParams()

  useEffect(() => {
    agentsInner && setData(agentsInner)
  }, [agentsInner])

  useEffect(() => {
    if (id) {
      fetchAgentsInnerData(id)
    }
  }, [id, fetchAgentsInnerData])

  return (
    <AgentsInnerPageStyles>
      <div className='container'>{data && <AgentBox type='page' data={{ ...data, id: agentsInner.id }} />}</div>
      <BrowseMore>
        <div className='container'>
          {/* {data && data.properties && (
            <Properties
              title={`Properties in charge of ${data.name} ${data.lastName}`}
              properties={data.properties.data}
            />
          )} */}
        </div>
      </BrowseMore>
      {data && (
        <ArticleBy className='container'>
          <div className='flex center space-between'>
            <h1>
              Articles by {data.name}
              {data.lastName}
            </h1>
            <Button color='white' text='Browse all posts' to='/'></Button>
          </div>
          <ArticleWrapper>
            {data.blogs.data.map((data: any, i: number) => (
              <ArticleBox
                data={{
                  ...data,
                  id: data.id
                }}
                key={i}
              />
            ))}
          </ArticleWrapper>
        </ArticleBy>
      )}
    </AgentsInnerPageStyles>
  )
}

export default AgentsInner
