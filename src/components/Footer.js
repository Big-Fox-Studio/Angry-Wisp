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
  alignItems: "center",
  userSelect: 'none',
  WebkitUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none'
}

const linkStyles = {
  color: "#B088D8",
  textDecoration: "none",
  fontSize: "16px",
  transition: "color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: "#C9A6F0"
  }
}

const copyrightStyles = {
  color: "#9FA6B2",
  fontSize: "16px"
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