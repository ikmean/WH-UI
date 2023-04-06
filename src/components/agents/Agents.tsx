import React from "react"
import AgentBox from "./AgentBox"
import { Wrapper, AgentWrapper } from "./AgentsStyles"

export const Agents = () => {
  return (
    <Wrapper className="container">
      <div>
        <h1>Meet the agents in our real estate firm</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis
          gravida ornare leo in at in egestas.
        </p>
      </div>
      <AgentWrapper>
        <AgentBox />
        <AgentBox />
        <AgentBox />
      </AgentWrapper>
    </Wrapper>
  )
}
