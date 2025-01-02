import * as React from "react"
import { useState, useEffect } from "react"
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const headerStyles = {
  padding: "0 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eaeaea",
  backgroundColor: "#000000",
  width: "100%",
  margin: 0,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  height: "60px",
  boxSizing: "border-box",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  fontFamily: "'BOLTZZ Sans', sans-serif",
  color: '#FFFFFF'
}

const navigationStyles = {
  display: "flex",
  gap: "30px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  alignItems: "center",
  fontFamily: "'BOLTZZ Sans', sans-serif",
  color: '#FFFFFF'
}

const languageSelectorStyles = {
  marginLeft: "auto",
  marginRight: "20px"
}

const Header = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('section1')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const getButtonStyle = (sectionId) => ({
    fontFamily: "'BOLTZZ Sans', sans-serif",
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    fontSize: '20px',
    fontWeight: '600',
    transition: 'all 0.2s ease',
    transform: activeSection === sectionId ? 'scale(1.2)' : 'scale(1)',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    position: 'relative',
    '&:hover': {
      color: '#1a1a1a'
    },
    '&::after': activeSection === sectionId ? {
      content: '""',
      position: 'absolute',
      bottom: '0',
      left: '20%',
      width: '60%',
      height: '2px',
      backgroundColor: '#1a1a1a',
      transition: 'all 0.2s ease'
    } : {}
  })

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(sectionId)
  }

  return (
    <header style={headerStyles}>
      <nav style={navigationStyles}>
        <button 
          style={getButtonStyle('section1')} 
          onClick={() => handleClick('section1')}
        >
          {t('nav.home')}
        </button>
        <button 
          style={getButtonStyle('section2')} 
          onClick={() => handleClick('section2')}
        >
          {t('nav.games')}
        </button>
        <button 
          style={getButtonStyle('section3')} 
          onClick={() => handleClick('section3')}
        >
          {t('nav.contact')}
        </button>
      </nav>
      <div style={languageSelectorStyles}>
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header 