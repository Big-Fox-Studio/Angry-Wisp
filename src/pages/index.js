import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import GameGrid from '../components/GameGrid'
import ContactForm from '../components/ContactForm'
import '../styles/fonts.css'

// Définition des couleurs comme constantes pour une meilleure réutilisation
const colors = {
  darkBlue: '#0A192F',    // Bleu très foncé
  lighterBlue: '#112240', // Bleu foncé un peu plus clair
  textLight: '#E6F1FF'    // Couleur claire pour le texte
}

// Mise à jour des styles de section avec la nouvelle police par défaut
const sectionStyles = {
  minHeight: 'fit-content',
  padding: '10px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  scrollMarginTop: '60px',
  color: colors.textLight,
  fontWeight: '100',
  fontFamily: "Estandar, sans-serif"
}

// Ajout d'un style spécifique pour la section d'accueil
const homeStyles = {
  ...sectionStyles,
  minHeight: '100vh',
}

const sections = [
  {
    id: 'section1',
    title: 'nav.home',
    style: { ...homeStyles, backgroundColor: colors.darkBlue }
  },
  {
    id: 'section2',
    title: 'nav.games',
    style: { ...sectionStyles, backgroundColor: colors.lighterBlue }
  },
  {
    id: 'section3',
    title: 'nav.contact',
    style: { 
      ...sectionStyles, 
      backgroundColor: colors.darkBlue,
      paddingBottom: '40px',
      width: '100%',
    }
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
          <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontFamily: "BOLTZZ Sans, sans-serif"
            }}>{t(section.title)}</h2>
            {section.id === 'section2' && <GameGrid />}
            {section.id === 'section3' && (
              <>
                <p 
                  style={{
                    textAlign: 'center',
                    margin: '2rem auto',
                    lineHeight: '1.6',
                    fontSize: '1.2rem',
                    fontFamily: "Estandar, sans-serif"
                  }}
                  dangerouslySetInnerHTML={{ __html: t('contactContent') }}
                />
                <ContactForm />
              </>
            )}
          </div>
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
