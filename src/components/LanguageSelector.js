import React, { useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'

// Styles plus visibles et modernes
const LanguageWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1001;
`

const CurrentLanguage = styled.button`
  padding: 8px;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  user-select: none;
  color: #ffffff;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
  }
`

const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  min-width: 120px;
  display: ${props => props.isOpen ? 'block' : 'none'};
  overflow: visible;
  z-index: 1002;
`

const LanguageOption = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  width: 100%;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
  color: #ffffff;
  
  &:first-child {
    border-radius: 8px 8px 0 0;
  }
  
  &:last-child {
    border-radius: 0 0 8px 8px;
  }
  
  &:only-child {
    border-radius: 8px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const FlagImage = styled.img`
  width: 24px;
  height: 16.8px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #eaeaea;
`

const FLAGS = {
  fr: '/images/flags/fr.svg',
  en: '/images/flags/gb.svg',
}

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = React.useRef(null)
  const { languages, language, changeLanguage } = useI18next()

  const handleLanguageChange = (lng) => {
    changeLanguage(lng)
    setIsOpen(false)
  }

  // Fermer le menu si on clique en dehors
  React.useEffect(() => {
    const closeDropdown = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  }, [])

  return (
    <LanguageWrapper>
      <CurrentLanguage 
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }}
      >
        <FlagImage src={FLAGS[language]} alt={`${language} flag`} />
      </CurrentLanguage>
      
      <LanguageDropdown isOpen={isOpen}>
        {languages.map((lng) => (
          <LanguageOption
            key={lng}
            onClick={() => handleLanguageChange(lng)}
          >
            <FlagImage src={FLAGS[lng]} alt={`${lng} flag`} />
            {lng.toUpperCase()}
          </LanguageOption>
        ))}
      </LanguageDropdown>
    </LanguageWrapper>
  )
}

export default LanguageSelector 