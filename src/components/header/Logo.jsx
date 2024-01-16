import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as WarmLogo } from '../../lib/icons/warmsvg.svg'

import { Left } from './HeaderStyles'

export default function Logo({ onClick }) {
  return (
    <Link to='/' onClick={onClick}>
      <Left>
        <WarmLogo />
      </Left>
    </Link>
  )
}
