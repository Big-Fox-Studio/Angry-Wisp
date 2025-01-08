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
        output: '/',
        excludes: [],
        createLinkInHead: true,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            pages: allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolvePages: ({pages: {nodes: allPages}, site}) => {
          return allPages.map(page => {
            return {
              path: page.path,
              changefreq: 'weekly',
              priority: page.path === '/' ? 1.0 : 0.7,
              lastmod: new Date().toISOString(),
            }
          })
        },
        serialize: (page) => {
          return {
            url: page.path,
            changefreq: page.changefreq,
            priority: page.priority,
            lastmod: page.lastmod,
          }
        },
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