import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'  // Important !
import LanguageSelector from '../components/LanguageSelector'
import Header from '../components/Header'
import Layout from '../components/Layout'

const globalStyles = {
  margin: 0,
  padding: 0,
  backgroundColor: "#11151D",
  minHeight: "100vh",
  width: "100%",
  overflow: "hidden"
}

const pageStyles = {
  color: "#ffffff",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  paddingTop: "60px",
  backgroundColor: "#11151D",
  minHeight: "100vh",
  margin: 0,
  width: "100%"
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
  color: "#ffffff"
}

const headingAccentStyles = {
  color: "#8954A8"
}

const paragraphStyles = {
  marginBottom: 48,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
  '&:hover': {
    color: "#9B6BC3"
  }
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#e0e0e0",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Politique de confidentialité",
    url: "/privacy",
    description: "Notre politique de confidentialité",
    color: "#663399",
  }
]

const sectionStyles = {
  minHeight: "100vh",
  padding: "40px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  scrollMarginTop: "60px",
  color: "#ffffff"
}

const IndexPage = () => {
  const { t } = useTranslation()
  
  React.useEffect(() => {
    // Applique les styles globaux au body et html
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.backgroundColor = "#11151D"
    document.documentElement.style.margin = "0"
    document.documentElement.style.padding = "0"
    document.documentElement.style.backgroundColor = "#11151D"
    
    // Nettoyage lors du démontage du composant
    return () => {
      document.body.style.margin = ""
      document.body.style.padding = ""
      document.body.style.backgroundColor = ""
      document.documentElement.style.margin = ""
      document.documentElement.style.padding = ""
      document.documentElement.style.backgroundColor = ""
    }
  }, [])

  return (
    <Layout>
      <main style={pageStyles}>
        {/* Section 1 */}
        <section id="section1" style={sectionStyles}>
          <h1 style={headingStyles}>
            {t('title')}
            <br />
            <span style={headingAccentStyles}>{t('subtitle')}</span>
          </h1>
        </section>

        {/* Section 2 */}
        <section id="section2" style={sectionStyles}>
          <h2>Section Jeux</h2>
          {/* Votre contenu pour la section 2 */}
        </section>

        {/* Section 3 */}
        <section id="section3" style={sectionStyles}>
          <h2>Contact</h2>
          <ul style={listStyles}>
            {links.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`

export const Head = () => (
  <>
    <title>Angry Wisp</title>
    <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
    <link rel="alternate icon" type="image/png" href="/images/logo.png" />  {/* Fallback pour les navigateurs plus anciens */}
  </>
)
