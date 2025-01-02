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
  overflow: 'hidden',
  border: `1px solid ${colors.textLight}20`,
  display: 'flex',
  height: '400px',
  minWidth: '100%',
  transition: 'opacity 0.3s ease'
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

const contentContainerStyles = {
  width: '800px',
  height: '400px',
  position: 'relative',
  overflow: 'hidden'
}

const GameGrid = () => {
  const games = useGames()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)

  const handleNavigation = (direction) => {
    if (isTransitioning) return

    setIsTransitioning(true)
    
    const newIndex = direction === 'next' 
      ? Math.min(currentIndex + 1, games.length - 1)
      : Math.max(currentIndex - 1, 0)
    
    setCurrentIndex(newIndex)
    
    setTimeout(() => {
      setIsTransitioning(false)
    }, 600)
  }

  const getSlideTransform = () => {
    return `translateX(-${currentIndex * 100}%)`
  }

  return (
    <div style={wrapperStyles}>
      <ArrowButton 
        direction="left" 
        onClick={() => handleNavigation('prev')}
        disabled={currentIndex === 0 || isTransitioning}
      />
      
      <div style={contentContainerStyles}>
        <div 
          style={{
            ...sliderStyles,
            transform: getSlideTransform()
          }}
        >
          {games.map((game, index) => (
            <div 
              key={game.id}
              style={projectCardStyles}
            >
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
          ))}
        </div>
      </div>

      <ArrowButton 
        direction="right" 
        onClick={() => handleNavigation('next')}
        disabled={currentIndex === games.length - 1 || isTransitioning}
      />
    </div>
  )
}

export default GameGrid 