import React, { useContext, useState, useEffect } from 'react'
import { Header } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
import { Agents } from '../../components/agents/Agents'
import Loader from '../../components/Loader/Loader'

function AgentsPage() {
  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData } = context

  useEffect(() => {
    fetchAgentsData()
  }, [fetchAgentsData])

  return (
    <>
      {!agents ? (
        <Loader />
      ) : (
        <div className='container'>
          <Header className='flex space-between center'>
            <h1>Our agents</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Header>
          <Agents data={agents} />
        </div>
      )}
    </>
  )
}

export default AgentsPage
