<<<<<<< HEAD
import React, { useContext, useEffect } from "react";
import AgentBox from "../../components/agents/AgentBox";
import { Header } from "./AgentsStyles";
import { AppContext } from "../../context/createContext";
import { AgentsList } from "../../components/agents/AgentsStyles";
=======
import React, { useContext, useEffect } from 'react'
import AgentBox from '../../components/agents/AgentBox'
import { Header } from './AgentsStyles'
import { AppContext } from '../../context/createContext'
>>>>>>> 6735225 (added prettier)

function Agents() {
  const { context } = useContext(AppContext);
  const { agents, fetchAgentsData } = context;

  useEffect(() => {
    fetchAgentsData();
  }, [fetchAgentsData]);

  return (
    <div className='container'>
      <Header className='flex space-between center'>
        <h1>Our agents</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Header>
      {agents && (
<<<<<<< HEAD
        <AgentsList>
=======
        <div className='flex space-between'>
>>>>>>> 6735225 (added prettier)
          {agents.map((data: any, i: number) => (
            <AgentBox
              data={{
                ...data,
                id: data.id
              }}
              key={i}
            />
          ))}
        </AgentsList>
      )}
    </div>
  );
}

export default Agents;
