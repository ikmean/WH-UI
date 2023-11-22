import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, Nav, HeaderLink } from './HeaderStyles'
import Logo from './Logo'

export default function Header() {
  return (
    <HeaderWrapper className='container'>
      <Logo />
      <Nav>
        <li>
          <Link to='/'>
            <HeaderLink>Home</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/properties'>
            <HeaderLink>Properties</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <HeaderLink>About</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/agents'>
            <HeaderLink>Agents</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <HeaderLink>Blogs</HeaderLink>
          </Link>
        </li>
      </Nav>
    </HeaderWrapper>
  )
}
