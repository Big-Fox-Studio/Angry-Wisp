module.exports = {
  siteMetadata: {
    title: `Angry Wisp`,
    siteUrl: `https://angrywisp.com`,
    description: `French independent game studio creating unique and exciting gaming experiences`,
    author: `Angry Wisp`,
    twitterUsername: `@angrywisp`,
    image: `/images/og-image.jpg`,
    siteLanguage: 'fr',
    ogLanguage: 'fr_FR',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locale`,
        name: `locale`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/games`,
        name: `games`
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        siteUrl: `https://angrywisp.com`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          react: {
            useSuspense: false
          }
        },
        trailingSlash: 'always'
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap',
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({allSitePage: {nodes: allPages}}) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({path}) => {
          return {
            url: path,
            changefreq: `weekly`,
            priority: path === '/' ? 1.0 : 0.7,
          }
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://angrywisp.com',
        sitemap: 'https://angrywisp.com/sitemap/sitemap-index.xml',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        siteUrl: `https://angrywisp.com`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false
          },
          react: {
            useSuspense: false
          }
        },
        trailingSlash: 'always',
        pages: [
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
          },
        ],
      }
    }
  ]
}