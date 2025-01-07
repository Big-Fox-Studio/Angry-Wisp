import React from 'react'
import { useGames } from '../utils/gameLoader'
import { useI18next } from 'gatsby-plugin-react-i18next'
import '../styles/GameGrid.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GameCard = ({ game }) => {
  const { language } = useI18next()
  
  if (!game) return null;

  const description = game.descriptions?.[language] || game.descriptions?.['en']
  const tags = game.tags?.[language] || game.tags?.['en']
  const image = getImage(game.thumbnailImage)

  return (
    <div className="game-card">
      {image && (
        <GatsbyImage
          image={image}
          alt={game.title || 'Game thumbnail'}
          className="game-thumbnail"
        />
      )}
      <div className="game-content">
        <h3 className="game-title">{game.title}</h3>
        {tags && tags.length > 0 && (
          <div className="game-tags">
            {tags.map((tag, index) => (
              <span key={index} className="game-tag">{tag}</span>
            ))}
          </div>
        )}
        <p className="game-description">{description}</p>
      </div>
    </div>
  )
}

const GameGrid = () => {
  const games = useGames()
  
  if (!games || games.length === 0) {
    return <div>Aucun jeu trouvé</div>
  }

  return (
    <div className="game-grid-container">
      <div className="game-grid-wrapper">
        <div className="game-grid-content">
          {games.map((game, index) => (
            <GameCard key={game.id || index} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GameGrid 