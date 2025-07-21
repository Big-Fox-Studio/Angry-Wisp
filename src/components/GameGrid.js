import React from 'react'
import { useGames } from '../utils/gameLoader'
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next'
import '../styles/GameGrid.css'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const GameCard = ({ game }) => {
  const { language } = useI18next()
  const { t } = useTranslation()
  
  if (!game) return null;

  const description = game.descriptions?.[language] || game.descriptions?.['en']
  const tags = game.tags?.[language] || game.tags?.['en']
  const image = getImage(game.thumbnailImage)

  return (
    <div className="game-card">
      <div className="game-thumbnail-wrapper">
        {image && (
          <GatsbyImage
            image={image}
            alt={game.title || 'Game thumbnail'}
            className="game-thumbnail"
          />
        )}
      </div>
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
        {game.presskit && (
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-end', minHeight: '40px', marginTop: '0.5rem' }}>
            <a
              href={game.presskit}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#8954A8', textDecoration: 'underline', fontFamily: "'Estandar', sans-serif", fontSize: '1rem', paddingLeft: 0 }}
            >
              {t('contact.presskit')}
            </a>
          </div>
        )}
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