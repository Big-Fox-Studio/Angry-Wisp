import * as React from "react"
import { useTranslation } from 'gatsby-plugin-react-i18next'
import { graphql } from 'gatsby'
import '../styles/fonts.css'
import LanguageSelector from '../components/LanguageSelector'

const colors = {
  darkBlue: '#0A192F',
  lighterBlue: '#112240',
  darkerBlue: '#060D1A',
  textLight: '#E6F1FF'
}

const pageStyles = {
  margin: 0,
  padding: 0,
  backgroundColor: colors.darkerBlue,
  minHeight: '100vh'
}

const contentStyles = {
  color: colors.textLight,
  padding: "4rem 2rem 2rem",
  fontFamily: "Estandar, sans-serif",
  maxWidth: "800px",
  margin: "0 auto",
  fontWeight: '100'
}

const titleStyles = {
  fontFamily: "BOLTZZ Sans, sans-serif",
  fontSize: '2.0rem',
  marginBottom: '1.5rem',
  letterSpacing: '0.1em',
  textAlign: 'center'
}

const sectionStyles = {
  marginBottom: "3rem"
}

const paragraphStyles = {
  lineHeight: '1.6',
  fontSize: '1.2rem',
  textAlign: 'justify',
  textJustify: 'inter-word',
  margin: '1.5rem 0'
}

const listStyles = {
  ...paragraphStyles,
  paddingLeft: '2rem',
  margin: '1rem 0'
}

const linkStyles = {
  color: colors.textLight,
  textDecoration: 'underline',
  '&:hover': {
    opacity: 0.8
  }
}

const languageSelectorContainerStyles = {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  zIndex: 1000
}

const PrivacyPage = () => {
  const { t } = useTranslation()

  React.useEffect(() => {
    document.body.style.margin = "0"
    document.body.style.padding = "0"
    document.body.style.backgroundColor = "#11151D"
    document.documentElement.style.margin = "0"
    document.documentElement.style.padding = "0"
    document.documentElement.style.backgroundColor = "#11151D"
    
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
    <main style={pageStyles}>
      <div style={languageSelectorContainerStyles}>
        <LanguageSelector />
      </div>

      <div style={contentStyles}>
        <h1 style={titleStyles}>{t("privacy")}</h1>
        
        <section style={sectionStyles}>
          <p style={paragraphStyles}>{t("privacyContent.welcome")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.infoCollect.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.infoCollect.intro")}</p>
          
          <h3 style={{...titleStyles, fontSize: '1.5rem'}}>{t("privacyContent.infoCollect.gameplay.title")}</h3>
          <p style={paragraphStyles}>{t("privacyContent.infoCollect.gameplay.content")}</p>
          
          <h3 style={{...titleStyles, fontSize: '1.5rem'}}>{t("privacyContent.infoCollect.analytics.title")}</h3>
          <p style={paragraphStyles}>{t("privacyContent.infoCollect.analytics.content")}</p>
          <ul style={listStyles}>
            {t("privacyContent.infoCollect.analytics.items", { returnObjects: true }).map((item, index) => (
              <li key={index} style={{marginBottom: '0.5rem'}}>{item}</li>
            ))}
          </ul>
          <p style={paragraphStyles}>{t("privacyContent.infoCollect.analytics.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.dataUse.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.dataUse.intro")}</p>
          <ul style={listStyles}>
            {t("privacyContent.dataUse.items", { returnObjects: true }).map((item, index) => (
              <li key={index} style={{marginBottom: '0.5rem'}}>{item}</li>
            ))}
          </ul>
          <p style={paragraphStyles}>{t("privacyContent.dataUse.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.thirdParty.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.thirdParty.content")}</p>
          <ul style={listStyles}>
            {t("privacyContent.thirdParty.services", { returnObjects: true }).map((service, index) => (
              <li key={index} style={{marginBottom: '0.5rem'}}>
                {service.name}: <a href={service.link} style={linkStyles}>{service.text}</a>
              </li>
            ))}
          </ul>
          <p style={paragraphStyles}>{t("privacyContent.thirdParty.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.dataRetention.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.dataRetention.content")}</p>
          <ul style={listStyles}>
            {t("privacyContent.dataRetention.options", { returnObjects: true }).map((option, index) => (
              <li key={index} style={{marginBottom: '0.5rem'}}>{option}</li>
            ))}
          </ul>
          <ul style={listStyles}>
            {t("privacyContent.dataRetention.thirdPartyOptions", { returnObjects: true }).map((option, index) => (
              <li key={index} style={{marginBottom: '0.5rem'}}>{option}</li>
            ))}
          </ul>
          <p style={paragraphStyles}>{t("privacyContent.dataRetention.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.children.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.children.content")}</p>
          <p style={paragraphStyles}>{t("privacyContent.children.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.security.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.security.content")}</p>
          <p style={paragraphStyles}>{t("privacyContent.security.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.changes.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.changes.content")}</p>
          <p style={paragraphStyles}>{t("privacyContent.changes.note")}</p>
        </section>

        <section style={sectionStyles}>
          <h2 style={{...titleStyles, fontSize: '1.8rem'}}>{t("privacyContent.contact.title")}</h2>
          <p style={paragraphStyles}>{t("privacyContent.contact.content")}</p>
          <p style={paragraphStyles}>{t("privacyContent.contact.conclusion")}</p>
        </section>
      </div>
    </main>
  )
}

export default PrivacyPage

export const Head = () => <title>Privacy Policy</title>

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
