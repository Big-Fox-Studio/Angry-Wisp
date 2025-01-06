import React from 'react'
import { useGames } from '../utils/gameLoader'
import { useI18next } from 'gatsby-plugin-react-i18next'
import '../styles/GameGrid.css'

const GameCard = ({ game }) => {
  const { language } = useI18next()
  
  if (!game) return null;

  // Récupérer la description dans la langue courante ou utiliser l'anglais par défaut
  const description = game.descriptions?.[language] || game.descriptions?.['en']
  
  // Récupérer les tags dans la langue courante ou utiliser l'anglais par défaut
  const tags = game.tags?.[language] || game.tags?.['en']

  return (
    <div className="game-card">
      {game.thumbnailPath && (
        <img 
          src={game.thumbnailPath} 
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
  
  if (games.length === 0) {
    return null
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