import * as React from "react"
import LanguageSelector from './LanguageSelector'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const headerStyles = {
  padding: "0 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #eaeaea",
  backgroundColor: "#11151D",
  width: "100%",
  margin: 0,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  height: "60px",
  boxSizing: "border-box"
}

const navigationStyles = {
  display: "flex",
  gap: "15px",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  alignItems: "center"
}

const languageSelectorStyles = {
  marginLeft: "auto",
  marginRight: "20px"
}

const Header = () => {
  const { t } = useTranslation()
  
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#663399',
    color: 'white',
    fontSize: '16px',
    transition: 'background-color 0.3s',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  }

  const handleClick = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header style={headerStyles}>
      <nav style={navigationStyles}>
        <button 
          style={buttonStyle} 
          onClick={() => handleClick('section1')}
        >
          {t('nav.home')}
        </button>
        <button 
          style={buttonStyle} 
          onClick={() => handleClick('section2')}
        >
          {t('nav.games')}
        </button>
        <button 
          style={buttonStyle} 
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