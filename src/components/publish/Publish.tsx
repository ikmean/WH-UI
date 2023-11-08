import React from 'react'
import PublishBox from './PublishBox'
import { Container } from './PublishStyles'

export default function Publish() {
  return (
    <div className='container'>
      <Container>
        <PublishBox />
        <PublishBox />
      </Container>
    </div>
  )
}
