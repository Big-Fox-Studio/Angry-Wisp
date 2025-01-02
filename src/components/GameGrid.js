import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

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

const GameGrid = ({ projects }) => {
  return (
    <div style={projectsGridStyles}>
      {projects.map(project => (
        <Link to={project.link} key={project.id} style={{ textDecoration: 'none' }}>
          <div style={projectCardStyles}>
            <img 
              src={project.thumbnail} 
              alt={project.title}
              style={thumbnailStyles}
            />
            <h3 style={projectTitleStyles}>{project.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default GameGrid 