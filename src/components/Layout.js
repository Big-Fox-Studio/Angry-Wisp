import * as React from "react"
import Header from './Header'
import Footer from './Footer'
import SocialMediaBar from './SocialMediaBar'

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