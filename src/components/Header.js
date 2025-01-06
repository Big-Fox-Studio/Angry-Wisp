import * as React from "react"
import { useState, useEffect, useCallback } from "react"
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const HEADER_HEIGHT = 100; // correspond à la height dans headerStyles
const MOBILE_BREAKPOINT = 1025; // Point de rupture pour le mobile

const headerContentStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  padding: "0 20px",
  boxSizing: "border-box",
  position: "relative",
  gap: "20px",
  overflow: "visible",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    gap: "5px",
    padding: "5px",
    width: "100%",
  }
}

const headerWrapperStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 1000,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'visible'
}

const headerStyles = {
  padding: "0 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 20, 0.85)",
  width: "100%",
  margin: 0,
  height: `${HEADER_HEIGHT}px`,
  boxSizing: "border-box",
  clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 20px), 0 100%)",
  fontFamily: "'BOLTZZ Sans', sans-serif",
  color: '#FFFFFF',
  backdropFilter: "blur(0px)",
  overflow: "visible",
}

const headerBorderStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: `${HEADER_HEIGHT + 10}px`,
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
  marginRight: "50px",
  "@media (max-width: 768px)": {
    display: "none",
  }
}

const logoStyles = {
  height: "80px",
  padding: "10px 0"
}

const rightContentStyles = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  position: "relative",
  marginLeft: "30px",
  zIndex: 1001,
  "@media (max-width: 768px)": {
    marginLeft: 0,
  }
}

const logoContainerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  userSelect: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none",
  position: "relative",
  width: "100%",
}

const logoTextStyles = {
  fontFamily: "'ARCO', sans-serif",
  fontSize: "36px",
  color: "#FFFFFF",
  margin: 0,
  letterSpacing: "2px",
  transform: "scaleX(1.1)",
  transformOrigin: "left",
  "@media (max-width: 768px)": {
    fontSize: "24px",
  }
}

const calculateFontSize = (isMobile, screenWidth) => {
  if (!isMobile) return '30px'
  // Réduction de la taille de police
  const maxWidth = MOBILE_BREAKPOINT
  const minSize = 10  // Réduit de 12 à 10
  const maxSize = 16  // Réduit de 20 à 16
  const fontSize = Math.max(
    minSize,
    (screenWidth / maxWidth) * maxSize
  )
  return `${fontSize}px`
}

const languageSelectorContainerStyles = {
  position: 'fixed',
  right: '20px',
  top: '30px',
  zIndex: 1002,
  '@media (max-width: 768px)': {
    right: '10px',
    top: '20px'
  }
}

const Header = () => {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768)

  // Ajouter la détection de la taille de l'écran
  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT)
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [checkMobile])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['section1', 'section2', 'section3']
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top >= -HEADER_HEIGHT && rect.top <= (window.innerHeight / 2)) {
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
    fontSize: '30px',
    fontWeight: '100',
    letterSpacing: '0.1em',
    transition: 'all 0.2s ease',
    transform: activeSection === sectionId ? 'scale(1.2)' : 'scale(1)',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    position: 'relative',
    '@media (max-width: 768px)': {
      fontSize: calculateFontSize(isMobile, screenWidth),
      padding: '2px 2px',
      transform: activeSection === sectionId ? 'scale(1.05)' : 'scale(1)',
      whiteSpace: 'nowrap',
      letterSpacing: '0.02em',
      minWidth: 'auto',
      textAlign: 'center',
    },
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
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - HEADER_HEIGHT,
        behavior: 'smooth'
      })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div style={headerBorderStyles}></div>
      <div style={headerWrapperStyles}>
        <header style={{
          ...headerStyles,
          ...(isMobile && {
            padding: "10px",
            height: `${HEADER_HEIGHT}px`,
          })
        }}>
          <div style={{
            ...headerContentStyles,
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <div style={{
              position: isMobile ? 'relative' : 'static',
              width: '100%',
            }}>
              <div 
                style={{
                  ...logoContainerStyles,
                  justifyContent: isMobile ? 'center' : 'flex-start',
                }}
                onClick={scrollToTop}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') scrollToTop();
                }}
              >
                <img 
                  src="/images/logo.svg" 
                  alt="Angry Wisp" 
                  style={{
                    ...logoStyles,
                    height: isMobile ? '60px' : '80px',
                  }}
                />
                <h1 style={{
                  ...logoTextStyles,
                  fontSize: isMobile ? '24px' : '36px',
                }}>Angry Wisp</h1>
              </div>
            </div>
            <div style={{
              ...rightContentStyles,
              flexDirection: isMobile ? 'row' : 'row',
              width: isMobile ? '100%' : 'auto',
              justifyContent: isMobile ? 'center' : 'flex-end',
            }}>
              {!isMobile && (
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
              )}
            </div>
          </div>
        </header>
      </div>
      <div style={{
        ...languageSelectorContainerStyles,
        ...(isMobile && {
          right: '10px',
          top: '20px'
        })
      }}>
        <LanguageSelector />
      </div>
    </>
  )
}

export default Header 