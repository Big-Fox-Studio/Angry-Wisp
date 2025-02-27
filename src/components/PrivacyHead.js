import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

export const PrivacyHead = () => {
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

  const translations = data.locales.edges
    .find(edge => edge.node.language === language && edge.node.ns === 'translation')
    ?.node?.data || '{}'

  let meta = {}
  try {
    const parsedData = JSON.parse(translations)
    meta = parsedData.meta?.privacy || {}
  } catch (error) {
    console.error('Error parsing translations:', error)
  }

  return (
    <>
      <html lang={language} />
      <title>{meta.title || 'Angry Wisp - Privacy Policy'}</title>
      <meta name="description" content={meta.description || ''} />
      <meta name="keywords" content={meta.keywords || ''} />
      <meta property="og:title" content={meta.title || 'Angry Wisp - Privacy Policy'} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={meta.description || ''} />
      <meta property="og:site_name" content="Angry Wisp" />
      <meta property="og:locale" content={language} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://angrywisp.com/privacy${language === 'en' ? '' : '/fr'}`} />
    </>
  )
} 