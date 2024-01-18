import React, { useContext, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import {
  HeaderWrapper,
  Nav,
  HeaderLink,
  LocaleButtonWrapper,
  LocaleButton,
  BurgerMenuButton,
  WorldWrapper,
  SelectionStyles,
  StyledSelect,
  StyledLabel
} from './HeaderStyles'
import Logo from './Logo'
import { AppContext } from '../../context/createContext'

import { ReactComponent as Close } from '../../lib/icons/close.svg'
import { ReactComponent as Burger } from '../../lib/icons/burger.svg'
import { ReactComponent as World } from '../../lib/icons/world.svg'
import Dropdown from '../dropdown/Dropdown'

export default function Header() {
  const { i18n, t } = useTranslation()
  const { context } = useContext(AppContext)
  const { cleanupSearchParams, setLocale, setEmailSubscription, setCcrSubmited } = context
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedLanguage, setSelectedLanguage] = useState('EN')
  const [selectedCurrency, setSelectedCurrency] = useState('USD')
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false)
  const [selectionOpen, setSelectionOpen] = useState(false)

  const handleLocaleChange = (value) => {
    i18n.changeLanguage(value)
    setSearchParams({ locale: value })
    setLocale({ locale: value })
    // setSelectedLanguage(value)
    // setSelectedCurrency(value)
  }

  const handleHomeClick = () => {
    cleanupSearchParams()
    setBurgerMenuOpen(false)
  }

  const toggleSelection = () => {
    setSelectionOpen(!selectionOpen)
  }
  
   const handleMenuNavigationCleanup = () => {
    setBurgerMenuOpen(false)
    setEmailSubscription(false)
    setCcrSubmited(false)
  }

  return (
    <HeaderWrapper className='container'>
      <Logo onClick={() => handleMenuNavigationCleanup()} />
      <Nav open={burgerMenuOpen}>
        <li>
          <Link to='/' onClick={() => handleHomeClick()}>
            <HeaderLink>{t('Home')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/properties' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Properties')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/developers' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Developers')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/about' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('About')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/agents' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Agents')}</HeaderLink>
          </Link>
        </li>
        <li>
          <Link to='/blogs' onClick={() => handleMenuNavigationCleanup()}>
            <HeaderLink>{t('Blogs')}</HeaderLink>
          </Link>
        </li>
      </Nav>

      <LocaleButtonWrapper>
        {/* <div className='row'>
         <LocaleButton onClick={() => handleLocaleChange('en')} selected={searchParams.get('locale') === 'en'}>
            EN
          </LocaleButton>
          <LocaleButton onClick={() => handleLocaleChange('ka')} selected={searchParams.get('locale') === 'ka'}>
            GE
          </LocaleButton>
        </div> 
         <div className='row'>
          <LocaleButton>USD</LocaleButton>
          <LocaleButton>GEL</LocaleButton>
        </div> */}
        <WorldWrapper onClick={toggleSelection}>
          <World />
        </WorldWrapper>

        {selectionOpen && (
          <SelectionStyles>
            {/* <div className='row'>
              <LocaleButton onClick={() => handleLocaleChange('en')} selected={searchParams.get('locale') === 'en'}>
                EN
              </LocaleButton>
              <LocaleButton onClick={() => handleLocaleChange('ka')} selected={searchParams.get('locale') === 'ka'}>
                GE
              </LocaleButton>
            </div>
            <div className='row'>
              <LocaleButton>USD</LocaleButton>
              <LocaleButton>GEL</LocaleButton>
            </div> */}
            <StyledSelect
              id='languageSelect'
              onChange={(e) => {
                e.preventDefault()
                handleLocaleChange(e.target.value)
                setSelectedLanguage(selectedLanguage)
              }}
              value={selectedLanguage}
            >
              <option value=' disabled'>Language</option>
              <option value='en'>EN</option>
              <option value='ka'>GE</option>
            </StyledSelect>
            <StyledSelect
              id='currencySelect'
              onChange={(e) => {
                e.preventDefault()
                handleLocaleChange(e.target.value)
                setSelectedCurrency(selectedCurrency)
              }}
              value={selectedCurrency}
            >
              <option value=' disabled'>Currency</option>
              <option value='usd'>USD</option>
              <option value='gel'>GEL</option>
            </StyledSelect>
          </SelectionStyles>
        )}
        </div>
    </LocaleButtonWrapper>

        <BurgerMenuButton onClick={() => setBurgerMenuOpen(!burgerMenuOpen)} open={burgerMenuOpen}>
          <div>{burgerMenuOpen ? <Close /> : <Burger />}</div>
        </BurgerMenuButton>
      </LocaleButtonWrapper>
    </HeaderWrapper>
  )
}
