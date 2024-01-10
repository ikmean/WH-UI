import React, { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { HeaderWrapper, Nav, HeaderLink, LocaleButtonWrapper, LocaleButton } from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

export default function Header() {
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, locale } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const handleLocaleChange = (value) => {
    cleanupSearchParams()
    setSearchParams({})
    setLocale({ locale: value })
  }

  return (
    <HeaderWrapper className='container'>
      <Logo />
      <Nav>
        <li>
          <Link to='/' onClick={() => cleanupSearchParams()}>
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

      <LocaleButtonWrapper>
        <LocaleButton onClick={() => handleLocaleChange('en')} selected={locale === 'en'}>
          EN
        </LocaleButton>
        <LocaleButton onClick={() => handleLocaleChange('ka')} selected={locale === 'ka'}>
          GE
        </LocaleButton>
      </LocaleButtonWrapper>
    </HeaderWrapper>
  )
}
