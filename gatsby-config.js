module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        // Suppression de l'option translate qui peut causer des problèmes
        siteUrl: `http://localhost:8000`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          // Suppression des options qui peuvent causer des conflits
        }
      }
    }
  ]
}