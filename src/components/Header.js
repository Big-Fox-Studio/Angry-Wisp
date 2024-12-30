import * as React from "react"
import LanguageSelector from './LanguageSelector'

const headerStyles = {
  padding: 0,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  borderBottom: "1px solid #eaeaea",
  backgroundColor: "#11151D",
  width: "100%",
  margin: 0,
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1000,
  height: "60px"
}

const languageSelectorWrapperStyles = {
  margin: "0 20px"
}

const Header = () => {
  return (
    <header style={headerStyles}>
      <div style={languageSelectorWrapperStyles}>
        <LanguageSelector />
      </div>
    </header>
  )
}

export default Header 