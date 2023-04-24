import React from "react"
import AgentBox from "../../components/agents/AgentBox"
import { Header } from "./AgentsStyles"

function Agents() {
  return (
    <div className="container">
      <Header className="flex space-between center">
        <h1>Our agents</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Header>
      <div className="flex space-between">
        <AgentBox />
        <AgentBox />
        <AgentBox />
      </div>
    </div>
  )
}

export default Agents
