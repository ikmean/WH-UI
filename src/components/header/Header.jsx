import React, { useContext } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { HeaderWrapper, Nav, HeaderLink, LocaleButtonWrapper, LocaleButton } from './HeaderStyles'
import Logo from './Logo'
import { useTranslation } from 'react-i18next'
import { AppContext } from '../../context/createContext'

export default function Header() {
  const { i18n, t } = useTranslation()
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, locale } = context
  const [searchParams, setSearchParams] = useSearchParams()

  const handleLocaleChange = (value) => {
    i18n.changeLanguage(value)
    cleanupSearchParams()
    setSearchParams({ locale: value })
    setLocale({ locale: value })
  }

  return (
    <HeaderWrapper className='container'>
      <Logo />
      <Nav>
        <li>
          <Link to='/' onClick={() => cleanupSearchParams()}>
            <HeaderLink>{t('Home')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/properties'>
            <HeaderLink>{t('Properties')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/developers'>
            <HeaderLink>{t('Developers')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <HeaderLink>{t('About')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/agents'>
            <HeaderLink>{t('Agents')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/blogs'>
            <HeaderLink>{t('Blogs')}</HeaderLink>
          </Link>
        </li>
      </Nav>

      <LocaleButtonWrapper>
        <LocaleButton onClick={() => handleLocaleChange('en')} selected={searchParams.get('locale') === 'en'}>
          EN
        </LocaleButton>
        <LocaleButton onClick={() => handleLocaleChange('ka')} selected={searchParams.get('locale') === 'ka'}>
          GE
        </LocaleButton>
      </LocaleButtonWrapper>
    </HeaderWrapper>
  )
}
