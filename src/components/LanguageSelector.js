import React, { useState } from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import styled from 'styled-components'
import frFlag from '../images/flags/fr.svg'
import enFlag from '../images/flags/gb.svg'

// Styles plus visibles et modernes
const LanguageWrapper = styled.div`
  position: relative;
  display: inline-block;
  z-index: 1000;
`

const CurrentLanguage = styled.button`
  padding: 8px 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    border-color: #ccc;
  }
`

const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: white;
  border: 1px solid #ddd;
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
  
  &:hover {
    background: #f5f5f5;
  }
`

const FlagImage = styled.img`
  width: 24px;
  height: 16px;
  object-fit: cover;
  border-radius: 2px;
`

const FLAGS = {
  fr: frFlag,
  en: enFlag,
  // Ajoutez d'autres langues selon vos besoins
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
        {language.toUpperCase()}
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