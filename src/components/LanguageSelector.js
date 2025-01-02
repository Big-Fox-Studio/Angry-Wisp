import React, { useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'

// Styles plus visibles et modernes
const LanguageWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1000;
`

const CurrentLanguage = styled.button`
  padding: 8px;
  background: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  user-select: none;
  
  &:hover {
    background: #f5f5f5;
    border-color: #666666;
  }
`

const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  background: white;
  border: 1px solid #1a1a1a;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  min-width: 120px;
  display: ${props => props.isOpen ? 'block' : 'none'};
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
  color: #1a1a1a;
  
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
    background: #f5f5f5;
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
  const { languages, language, changeLanguage } = useI18next()

  const handleLanguageChange = (lng) => {
    changeLanguage(lng)
    setIsOpen(false)
  }

  // Fermer le menu si on clique en dehors
  React.useEffect(() => {
    const closeDropdown = () => setIsOpen(false)
    document.addEventListener('click', closeDropdown)
    return () => document.removeEventListener('click', closeDropdown)
  }, [])

  // Arrêter la propagation du clic dans le menu
  const handleWrapperClick = (e) => {
    e.stopPropagation()
  }

  return (
    <LanguageWrapper onClick={handleWrapperClick}>
      <CurrentLanguage onClick={() => setIsOpen(!isOpen)}>
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