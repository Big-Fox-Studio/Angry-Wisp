import React from 'react'
import { useGames } from '../utils/gameLoader'

const colors = {
  darkBlue: '#0A192F',
  textLight: '#E6F1FF'
}

const projectsGridStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  maxWidth: '800px',
  margin: '0 auto',
  width: '100%'
}

const projectCardStyles = {
  backgroundColor: colors.darkBlue,
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  border: `1px solid ${colors.textLight}20`,
  display: 'flex',
  height: '400px',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}

const thumbnailStyles = {
  width: '280px',
  height: '100%',
  objectFit: 'cover'
}

const contentStyles = {
  padding: '1.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem'
}

const projectTitleStyles = {
  margin: 0,
  fontSize: '1.5rem',
  color: '#ffffff',
  fontWeight: '600'
}

const descriptionStyles = {
  margin: 0,
  color: colors.textLight,
  fontSize: '1rem',
  opacity: 0.8,
  lineHeight: '1.6'
}

const GameGrid = () => {
  const games = useGames()

  return (
    <div style={projectsGridStyles}>
      {games.map(game => (
        <a 
          href={game.link} 
          key={game.id} 
          style={{ textDecoration: 'none' }}
          target={game.link.startsWith('http') ? '_blank' : '_self'}
          rel={game.link.startsWith('http') ? 'noopener noreferrer' : ''}
        >
          <div style={projectCardStyles}>
            <img 
              src={game.thumbnailPath} 
              alt={game.title}
              style={thumbnailStyles}
            />
            <div style={contentStyles}>
              <h3 style={projectTitleStyles}>{game.title}</h3>
              <p style={descriptionStyles}>{game.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

export default GameGrid 