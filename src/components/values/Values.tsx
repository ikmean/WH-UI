import React from 'react'
import { ValueBox } from './ValueBox'
import { Wrapper, Left, Right, Header } from './ValuesStyles'

export const Values = () => {
  return (
    <Wrapper>
      <div className='container flex space-between '>
        <Left>
          <Header>
            <h1>The values that drive everything we do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit mi lobortis gravida ornare leo in at in egestas.</p>
          </Header>
          <ValueBox type='excellence' />
          <ValueBox type='quality' />
        </Left>
        <Right>
          <ValueBox type='excellence' />
          <ValueBox type='excellence' />
          <ValueBox type='accesibility' />
        </Right>
      </div>
    </Wrapper>
  )
}
