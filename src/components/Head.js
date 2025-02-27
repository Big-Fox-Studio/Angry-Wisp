import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

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
  } catch (error) {
    console.error('Error parsing translations:', error)
  }

  return (
    <>
      <html lang={language} />
      <title>{meta.title || 'Angry Wisp'}</title>
      <meta name="description" content={meta.description || ''} />
      <meta name="keywords" content={meta.keywords || ''} />
      
      {/* Open Graph */}
      <meta property="og:title" content={meta.title || 'Angry Wisp'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={meta.description || ''} />
      <meta property="og:site_name" content="Angry Wisp" />
      <meta property="og:locale" content={language} />
      <meta property="og:image" content="https://angrywisp.com/images/og-image.jpg" />
      <meta property="og:url" content={`https://angrywisp.com${language === 'en' ? '' : '/fr'}`} />
      
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://angrywisp.com${language === 'en' ? '' : '/fr'}`} />
      <link rel="alternate" hrefLang="fr" href="https://angrywisp.com/fr/" />
      <link rel="alternate" hrefLang="en" href="https://angrywisp.com/en/" />
      <link rel="alternate" hrefLang="x-default" href="https://angrywisp.com/" />
      
      {/* Favicons et icônes pour différentes plateformes */}
      <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/images/logo180x180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/images/logo32x32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/images/logo192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/images/logo512x512.png" />
      
      {/* Schema.org markup pour les moteurs de recherche */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Angry Wisp",
          "url": `https://angrywisp.com${language === 'en' ? '' : '/fr'}`,
          "logo": "https://angrywisp.com/images/logo512x512.png",
          "image": "https://angrywisp.com/images/og-image.jpg"
        })}
      </script>
    </>
  )
} 