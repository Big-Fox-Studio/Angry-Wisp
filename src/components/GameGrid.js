import React from 'react'
import { useGames } from '../utils/gameLoader'
import '../styles/GameGrid.css'

const GameCard = ({ game }) => {
  if (!game) return null;

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
        {game.tags && game.tags.length > 0 && (
          <div className="game-tags">
            {game.tags.map((tag, index) => (
              <span key={index} className="game-tag">{tag}</span>
            ))}
          </div>
        )}
        <p className="game-description">{game.description}</p>
      </div>
    </div>
  )
}

const GameGrid = () => {
  const games = useGames()
  
  if (games.length === 0) {
    return null
  }

  const firstGame = games[0]

  return (
    <div className="game-grid-container">
      <div className="game-grid-wrapper">
        <div className="game-grid-content">
          <GameCard game={firstGame} />
        </div>
      </div>
    </div>
  )
}

export default GameGrid 