import React, { useContext, useEffect } from "react"
import AgentBox from "../../components/agents/AgentBox"
import { Header } from "./AgentsStyles"
import { AppContext } from "../../context/createContext"

function Agents() {
  const { context } = useContext(AppContext)
  const { agents, fetchAgentsData } = context

  useEffect(() => {
    fetchAgentsData()
  }, [fetchAgentsData])

  return (
    <div className="container">
      <Header className="flex space-between center">
        <h1>Our agents</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Header>
      {agents && (
        <div className="flex space-between">
          {agents.map((data: any, i: number) => (
            <AgentBox
              data={{
                ...data.attributes,
                id: data.id,
              }}
              key={i}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Agents
