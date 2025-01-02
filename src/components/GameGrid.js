import React from 'react'
import { useGames } from '../utils/gameLoader'

const colors = {
  darkBlue: '#0A192F',
  textLight: '#E6F1FF'
}

const projectsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%'
}

const projectCardStyles = {
  backgroundColor: colors.darkBlue,
  borderRadius: '8px',
  overflow: 'hidden',
  transition: 'transform 0.2s',
  border: `1px solid ${colors.textLight}20`,
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}

const thumbnailStyles = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
}

const projectTitleStyles = {
  padding: '1rem',
  margin: 0,
  fontSize: '1.2rem',
  color: '#ffffff'
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
            <h3 style={projectTitleStyles}>{game.title}</h3>
          </div>
        </a>
      ))}
    </div>
  )
}

export default GameGrid 