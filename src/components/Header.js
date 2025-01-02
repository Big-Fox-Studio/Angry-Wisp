import * as React from "react"
import { useState, useEffect } from "react"
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const headerStyles = {
  padding: "0 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 20, 0.85)",
  width: "100%",
  margin: 0,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  height: "100px",
  boxSizing: "border-box",
  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%)",
  fontFamily: "'BOLTZZ Sans', sans-serif",
  color: '#FFFFFF',
  backdropFilter: "blur(0px)"
}

const headerBorderStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "110px",
  backgroundColor: "rgba(30, 30, 30, 0.75)",
  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%)",
  zIndex: 999,
}

const navigationStyles = {
  display: "flex",
  gap: "30px",
  alignItems: "center",
  fontFamily: "'BOLTZZ Sans', sans-serif",
  color: '#FFFFFF',
  paddingRight: "20px"
}

const logoStyles = {
  height: "80px",
  padding: "10px 0"
}

const rightContentStyles = {
  display: "flex",
  alignItems: "center",
  position: "absolute",
  right: "120px"
}

const languageSelectorWrapperStyles = {
  position: "fixed",
  top: "30px",
  right: "40px",
  zIndex: 2000,
}

const Header = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('')

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

    handleScroll()
    
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
    fontSize: '24px',
    fontWeight: '100',
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
  }

  return (
    <>
      <div style={headerBorderStyles}></div>
      <header style={headerStyles}>
        <img 
          src="/images/logo.svg" 
          alt="Angry Wisp" 
          style={logoStyles}
        />
        <div style={rightContentStyles}>
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
        </div>
      </header>
      <div style={languageSelectorWrapperStyles}>
        <LanguageSelector />
      </div>
    </>
  )
}

export default Header 