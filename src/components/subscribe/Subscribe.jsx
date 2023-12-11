import React from 'react'
import Button from '../button/Button'
import SubscribeBox from './SubscribeBox'
import { H1 } from './SubscribeStyles'

export default function Subscribe() {
  return (
    <div>
      <H1>Subscribe to our newsletter</H1>
      <SubscribeBox text=' email address' />
      <Button text='Subscribe' color='red' />
    </div>
  )
}
