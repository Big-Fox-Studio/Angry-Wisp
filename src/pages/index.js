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
  section1: {
    backgroundColor: colors.darkBlue,
    color: '#ffffff',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'auto',
    scrollMarginTop: '100px',
    padding: '2rem 2rem',
  },
  minHeight: 'fit-content',
  padding: '10px 20px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  scrollMarginTop: '60px',
  color: colors.textLight,
  fontWeight: '100',
  fontFamily: "Estandar, sans-serif",
  padding: '2rem 2rem',
}

// Ajout d'un style spécifique pour la section d'accueil
const homeStyles = {
  ...sectionStyles,
  minHeight: '100vh',
}

// Ajout d'un style pour le conteneur de l'image hero
const heroContainerStyle = {
  width: '100%',
  height: '100vh',
  position: 'relative',
  overflow: 'hidden'
}

const heroImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center'
}

const sections = [
  {
    id: 'section1',
    title: 'nav.home',
    style: sectionStyles.section1
  },
  {
    id: 'section2',
    title: 'nav.games',
    style: { 
      ...sectionStyles, 
      backgroundColor: '#ffffff',  // Fond blanc
      color: '#0A192F'            // Texte en bleu foncé pour le contraste
    }
  },
  {
    id: 'section3',
    title: 'nav.contact',
    style: { 
      ...sectionStyles, 
      backgroundColor: colors.darkBlue,
      paddingBottom: '40px'
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
      <div style={heroContainerStyle}>
        <img 
          src="/images/hero.jpg" // Assurez-vous d'ajouter votre image dans le dossier public/images/
          alt="Angry Wisp Studio"
          style={heroImageStyle}
        />
      </div>

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
            {section.id === 'section1' && (
              <div 
                style={{
                  width: '100%',
                  maxWidth: '625px',
                  margin: '0 auto',
                }}
              >
                <p 
                  style={{
                    textAlign: 'justify',
                    textJustify: 'inter-word',
                    margin: '2rem 0',
                    lineHeight: '1.6',
                    fontSize: '1.2rem',
                    fontFamily: "Estandar, sans-serif"
                  }}
                  dangerouslySetInnerHTML={{ __html: t('studioContent') }}
                />
              </div>
            )}
            {section.id === 'section2' && <GameGrid />}
            {section.id === 'section3' && (
              <>
                <p 
                  style={{
                    textAlign: 'center',
                    margin: '2rem auto',
                    lineHeight: '1.6',
                    fontSize: '1.2rem',
                    fontFamily: "Estandar, sans-serif",
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
