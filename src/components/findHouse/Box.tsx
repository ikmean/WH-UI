import React from 'react'
import { ReactComponent as FindHouseSVG } from '../../lib/icons/findHouse.svg'
import { ReactComponent as Calendar } from '../../lib/icons/calendar.svg'
import { ReactComponent as House } from '../../lib/icons/house.svg'
import { BoxStyles } from './FindHouseStyles'
import Text from './Text'

export default function Box({ title, description, icon }: any) {
  return (
    <BoxStyles>
      {icon === 'findHouse' && <FindHouseSVG />}
      {icon === 'calendar' && <Calendar />}
      {icon === 'house' && <House />}
      <Text title={title} description={description}></Text>
    </BoxStyles>
  )
}
