import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { I18nextContext } from 'gatsby-plugin-react-i18next'

export const Head = () => {
  const { language } = useI18next()
  
  const data = useStaticQuery(graphql`
    query {
      locales: allLocale {
        edges {
          node {
            ns
            data
            language
          }
        }
      }
    }
  `)

  // Trouver les traductions pour la langue actuelle
  const translations = data.locales.edges
    .find(edge => edge.node.language === language && edge.node.ns === 'translation')
    ?.node?.data || '{}'

  let meta = {}
  try {
    const parsedData = JSON.parse(translations)
    meta = parsedData.meta || {}
    console.log('Parsed meta:', meta)
  } catch (error) {
    console.error('Error parsing translations:', error)
  }

  const pageTitle = meta.title || 'Angry Wisp'
  const description = meta.description || ''
  const keywords = meta.keywords || ''

  return (
    <I18nextContext.Provider value={{ language }}>
      <html lang={language} />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Meta tags Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Angry Wisp" />
      <meta property="og:locale" content={language} />
      <meta property="og:locale:alternate" content={language === 'fr' ? 'en' : 'fr'} />
      
      {/* Meta tags pour robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`https://angrywisp.com${language === 'en' ? '' : '/fr'}`} />
      
      {/* Favicon et autres icônes */}
      <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
      <link rel="alternate icon" type="image/png" href="/images/logo.png" />
      
      {/* Préchargement des polices */}
      <link 
        rel="preload" 
        href="/fonts/BOLTZZ/BOLTZZ-Sans.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      <link 
        rel="preload" 
        href="/fonts/Estandar/Estandar-Regular.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
    </I18nextContext.Provider>
  )
} 