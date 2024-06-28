import React from 'react'
import { AgentsList } from './AgentsStyles'
import AgentBox from './AgentBox'

export const Agents = ({ data }: any) => {
  return (
    <>
      {data && (
        <AgentsList>
          {data.map((agent: any, i: number) => (
            <AgentBox
              data={{
                ...agent,
                id: agent.id
              }}
              key={i}
            />
          ))}
        </AgentsList>
      )}
    </>
  )
}
