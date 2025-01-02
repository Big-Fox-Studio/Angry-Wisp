import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'

const footerStyles = {
  backgroundColor: "#0A0E14",
  color: "#ffffff",
  padding: "40px 20px",
  width: "100%",
  boxSizing: "border-box",
  borderTop: "1px solid rgba(255,255,255,0.1)"
}

const footerContentStyles = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const linkStyles = {
  color: "#8954A8",
  textDecoration: "none",
  fontSize: "14px",
  transition: "color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: "#9B6BC3"
  }
}

const copyrightStyles = {
  color: "#666666",
  fontSize: "14px"
}

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <div>
          <a 
            href="/privacy" 
            style={linkStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('privacy')}
          </a>
        </div>
        <div style={copyrightStyles}>
          © {currentYear} Angry Wisp. {t('rights')}
        </div>
      </div>
    </footer>
  )
}

export default Footer 