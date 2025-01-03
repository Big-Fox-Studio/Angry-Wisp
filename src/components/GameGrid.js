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
  overflow: 'visible',
  border: `1px solid ${colors.textLight}20`,
  position: 'relative',
  height: '300px',
  width: '600px',
  transition: 'opacity 0.3s ease',
  marginLeft: '200px'
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
  position: 'absolute',
  left: '-200px',
  top: '-50px',
  zIndex: '2',
  borderRadius: '8px',
}

const contentStyles = {
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: '100%',
  marginLeft: '220px',
  maxWidth: '350px'
}

const projectTitleStyles = {
  color: colors.textLight,
  fontSize: '1.75rem',
  marginBottom: '1rem',
  fontWeight: '600'
}

const descriptionStyles = {
  color: `${colors.textLight}CC`,
  fontSize: '1rem',
  lineHeight: '1.6',
  maxWidth: '100%'
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

const GameCard = ({ game }) => {
  return (
    <div style={contentContainerStyles}>
      <img 
        src={game.thumbnail} 
        alt={game.title}
        style={thumbnailStyles}
      />
      
      <div style={{
        backgroundColor: colors.darkBlue,
        borderRadius: '8px',
        border: `1px solid ${colors.textLight}20`,
        position: 'relative',
        height: '300px',
        marginLeft: '200px',
        zIndex: '1',
      }}>
        <div style={contentStyles}>
          <h3 style={projectTitleStyles}>{game.title}</h3>
          <p style={descriptionStyles}>{game.description}</p>
        </div>
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
                paddingTop: '1.5rem'
              }}>
                <h3 style={projectTitleStyles}>{firstGame.title}</h3>
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