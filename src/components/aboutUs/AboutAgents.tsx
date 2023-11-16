import React from 'react'
import { Header } from '../aboutUs/AboutUsStyles'
import { Agents } from '../../components/agents/Agents'

function AboutAgents({ agents }: any) {
  return (
    <div className='container'>
      <Header className='flex space-between center'>
        <h1>Meet the agents in our real estate firm</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida ornare leo in at in egestas.</p>
      </Header>
      <Agents data={agents} />
    </div>
  )
}

export default AboutAgents
