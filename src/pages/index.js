import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import '../styles/fonts.css'

// Définition des couleurs comme constantes pour une meilleure réutilisation
const colors = {
  darkBlue: '#0A192F',    // Bleu très foncé
  lighterBlue: '#112240', // Bleu foncé un peu plus clair
  textLight: '#E6F1FF'    // Couleur claire pour le texte
}

const maintenanceStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0A192F',
  color: '#E6F1FF',
  textAlign: 'center',
  padding: '20px',
  fontWeight: '100',
  fontFamily: "Estandar, sans-serif"
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
    <div style={maintenanceStyles}>
      <h1 style={{ 
        fontFamily: "BOLTZZ Sans, sans-serif",
        fontSize: '2.5rem',
        marginBottom: '2rem'
      }}>
        {t('maintenance.title')}
      </h1>
      <p style={{
        fontSize: '1.2rem',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        {t('maintenance.message')}
      </p>
    </div>
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
