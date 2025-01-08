module.exports = {
  siteMetadata: {
    title: `Angry Wisp`,
    siteUrl: `https://angrywisp.com`,
    description: `French independent game studio creating unique and exciting gaming experiences`,
    author: `Angry Wisp`,
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
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: ({site}) => site.siteMetadata.siteUrl,
        resolvePages: ({allSitePage: {nodes: allPages}}) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({site, allSitePage}) => 
          allSitePage.nodes.map(node => {
            return {
              url: `${site.siteMetadata.siteUrl}${node.path}`,
              changefreq: `weekly`,
              priority: node.path === '/' ? 1.0 : 0.7,
            }
          })
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