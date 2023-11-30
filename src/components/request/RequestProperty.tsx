import React from 'react'
import { RequestPropertyStyles } from './RequestPropertyStyles'
import { Line } from '../articles/ArticlesStyles'
import { InputComponent } from '../input/Input'
import Button from '../button/Button'
import AgentBox from '../agents/AgentBox'

function RequestProperty({ rentOrSale, price, agent }: any) {
  return (
    <RequestPropertyStyles>
      <h3>Property for {rentOrSale}</h3>
      <h1>${price}</h1>
      <Line />
      <h2>Get in touch to receive more info</h2>
      <InputComponent placeholder='Full name' />
      <InputComponent placeholder='Email address' />
      <InputComponent placeholder='Phone number' />
      <div style={{ marginBottom: '60px' }}>
        <Button color='red' text='Request info' width='100%' to='/' />
      </div>
      <Line />
      <div>
        <h2>Reach the agent</h2>
        <AgentBox type='small' data={agent} />
      </div>
    </RequestPropertyStyles>
  )
}

export default RequestProperty
