import React from 'react'
import { useGames } from '../utils/gameLoader'

const colors = {
  darkBlue: '#0A192F',
  textLight: '#E6F1FF'
}

const wrapperStyles = {
  position: 'relative',
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem'
}

const sliderStyles = {
  display: 'flex',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
}

const projectCardStyles = {
  backgroundColor: colors.darkBlue,
  borderRadius: '8px',
  overflow: 'hidden',
  border: `1px solid ${colors.textLight}20`,
  position: 'relative',
  height: '400px',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  '@media (max-width: 768px)': {
    height: 'auto',
    flexDirection: 'column',
  }
}

const arrowStyles = {
  width: '48px',
  height: '48px',
  backgroundColor: colors.darkBlue,
  border: `1px solid ${colors.textLight}40`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  color: colors.textLight,
  fontSize: '24px',
  transition: 'all 0.3s ease',
  flexShrink: 0,
  userSelect: 'none',
  WebkitUserSelect: 'none',
  msUserSelect: 'none',
  MozUserSelect: 'none',
  '&:hover': {
    backgroundColor: `${colors.textLight}20`
  }
}

const ArrowButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    style={{
      ...arrowStyles,
      [direction === 'left' ? 'left' : 'right']: '-24px',
      opacity: disabled ? 0.3 : 1,
      cursor: disabled ? 'default' : 'pointer',
    }}
    disabled={disabled}
  >
    {direction === 'left' ? '←' : '→'}
  </button>
)

const thumbnailStyles = {
  width: '400px',
  height: '400px',
  objectFit: 'cover',
  flexShrink: 0,
  '@media (max-width: 768px)': {
    width: '100%',
    height: '300px',
  }
}

const contentStyles = {
  padding: '1.5rem',
  paddingTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  overflow: 'auto',
  '@media (max-width: 768px)': {
    padding: '1rem',
  }
}

const projectTitleStyles = {
  color: colors.textLight,
  fontSize: '1.75rem',
  marginTop: '0',
  marginBottom: '0.75rem',
  fontWeight: '600'
}

const descriptionStyles = {
  color: `${colors.textLight}CC`,
  fontSize: '1rem',
  lineHeight: '1.5',
  maxWidth: '100%',
  margin: 0
}

const contentContainerStyles = {
  width: '100%',
  position: 'relative',
  marginBottom: '2rem'
}

const containerStyles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '6rem',
  marginBottom: '4rem'
}

const tagContainerStyles = {
  display: 'flex',
  gap: '0.5rem',
  marginBottom: '0.75rem',
  flexWrap: 'wrap'
}

const tagStyles = {
  color: colors.textLight,
  fontSize: '0.75rem',
  padding: '0.25rem 0.75rem',
  backgroundColor: `${colors.textLight}15`,
  borderRadius: '999px',
  display: 'inline-block'
}

const GameCard = ({ game }) => {
  return (
    <div style={projectCardStyles}>
      <img 
        src={game.thumbnail} 
        alt={game.title}
        style={thumbnailStyles}
      />
      <div style={contentStyles}>
        <h3 style={projectTitleStyles}>{game.title}</h3>
        <div style={tagContainerStyles}>
          {game.tags?.map((tag, index) => (
            <span key={index} style={tagStyles}>{tag}</span>
          ))}
        </div>
        <p style={descriptionStyles}>{game.description}</p>
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
    <div style={containerStyles}>
      <div style={wrapperStyles}>
        <div style={contentContainerStyles}>
          <div style={sliderStyles}>
            <div style={projectCardStyles}>
              <img 
                src={firstGame.thumbnailPath} 
                alt={firstGame.title}
                style={thumbnailStyles}
              />
              <div style={{
                ...contentStyles,
                position: 'relative',
                zIndex: '3',
                paddingTop: '0.25rem'
              }}>
                <h3 style={projectTitleStyles}>{firstGame.title}</h3>
                <div style={tagContainerStyles}>
                  {firstGame.tags?.map((tag, index) => (
                    <span key={index} style={tagStyles}>{tag}</span>
                  ))}
                </div>
                <p style={descriptionStyles}>{firstGame.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameGrid 