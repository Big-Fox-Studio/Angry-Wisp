import * as React from "react"
import Header from './Header'
import Footer from './Footer'
import SocialMediaBar from './SocialMediaBar'
import { useI18next } from 'gatsby-plugin-react-i18next'

const layoutStyles = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  backgroundColor: "#11151D"
}

const mainStyles = {
  flex: 1,
  width: "100%"
}

const Layout = ({ children }) => {
  const { language } = useI18next()

  React.useEffect(() => {
    // Définir l'attribut lang sur l'élément html
    document.documentElement.lang = language
  }, [language])

  return (
    <div style={layoutStyles}>
      <Header />
      <main style={mainStyles}>
        {children}
      </main>
      <SocialMediaBar />
      <Footer />
    </div>
  )
}

export default Layout 