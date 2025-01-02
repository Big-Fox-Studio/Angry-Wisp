import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'  // Important !
import LanguageSelector from '../components/LanguageSelector'
import Header from '../components/Header'
import Layout from '../components/Layout'
import GameGrid from '../components/GameGrid'

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

// Définition des couleurs comme constantes pour une meilleure réutilisation
const colors = {
  darkBlue: '#0A192F',    // Bleu très foncé
  lighterBlue: '#112240', // Bleu foncé un peu plus clair
  textLight: '#E6F1FF'    // Couleur claire pour le texte
}

// Mise à jour des styles de section
const sectionStyles = {
  minHeight: '100vh',
  padding: '80px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  scrollMarginTop: '60px',
  color: colors.textLight, // Texte clair pour contraster avec le fond foncé
}

const projectsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%'
}

const projectCardStyles = {
  backgroundColor: colors.darkBlue,
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  border: `1px solid ${colors.textLight}20`, // Bordure subtile avec opacité
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}

const thumbnailStyles = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
}

const projectTitleStyles = {
  padding: '1rem',
  margin: 0,
  fontSize: '1.2rem',
  color: '#ffffff'
}

const sections = [
  {
    id: 'section1',
    title: 'nav.home',
    style: { ...sectionStyles, backgroundColor: colors.darkBlue }
  },
  {
    id: 'section2',
    title: 'nav.games',
    style: { ...sectionStyles, backgroundColor: colors.lighterBlue }
  },
  {
    id: 'section3',
    title: 'nav.contact',
    style: { ...sectionStyles, backgroundColor: colors.darkBlue }
  }
]

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
      {sections.map(section => (
        <section 
          key={section.id}
          id={section.id} 
          style={section.style}
        >
          <h2>{t(section.title)}</h2>
          {section.id === 'section2' && <GameGrid />}
        </section>
      ))}
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
