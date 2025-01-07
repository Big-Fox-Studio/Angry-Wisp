import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from "gatsby-plugin-image"

export const useGames = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          relativePath
          sourceInstanceName
          extension
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              quality: 75
            )
          }
        }
      }
    }
  `)

  const gameFiles = data.allFile.nodes.filter(
    node => node.sourceInstanceName === "games"
  )

  try {
    const gameDataFiles = gameFiles.filter(file => file.relativePath.endsWith('game.json'))
    const games = gameDataFiles.map(dataFile => {
      const gameId = dataFile.relativePath.split('/')[0]

      const thumbnailFile = gameFiles.find(
        file => file.relativePath === `${gameId}/thumbnail.png`
      )

      try {
        const gameData = require(`../../src/games/${gameId}/game.json`)
        return {
          ...gameData,
          id: gameId,
          thumbnailImage: thumbnailFile
        }
      } catch (e) {
        return null
      }
    }).filter(game => game !== null)

    return games
  } catch (e) {
    return []
  }
}