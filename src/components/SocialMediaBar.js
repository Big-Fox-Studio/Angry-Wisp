import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const socialBarStyles = {
  position: 'fixed',
  right: '0',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  gap: '15px',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '15px',
  borderRadius: '10px 0 0 10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease',
}

const toggleButtonStyles = {
  position: 'absolute',
  left: '-30px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '30px',
  height: '60px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  border: 'none',
  borderRadius: '10px 0 0 10px',
  cursor: 'pointer',
  boxShadow: '-2px 0 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1001,
}

const iconStyles = {
  width: '30px',
  height: '30px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
}

const SocialMediaBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleHover = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1.1)';
  };

  const handleLeave = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1)';
  };

  return (
    <div 
      style={{
        ...socialBarStyles,
        transform: isOpen ? 'translateY(-50%)' : 'translate(calc(100%), -50%)'
      }}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={toggleButtonStyles}
        aria-label={isOpen ? 'Masquer les réseaux sociaux' : 'Afficher les réseaux sociaux'}
      >
        {isOpen ? '❯' : '❮'}
      </button>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <a 
          href="https://x.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          onFocus={handleHover}
          onBlur={handleLeave}
        >
          <StaticImage 
            src="../images/social/xIcon.svg"
            alt="X"
            style={iconStyles}
            className="social-icon"
          />
        </a>
        <a 
          href="https://discord.gg/p8PTDZWEzP" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          onFocus={handleHover}
          onBlur={handleLeave}
        >
          <StaticImage 
            src="../images/social/discordIcon.svg"
            alt="Discord"
            style={iconStyles}
            className="social-icon"
          />
        </a>
        <a 
          href="https://youtube.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          onFocus={handleHover}
          onBlur={handleLeave}
        >
          <StaticImage 
            src="../images/social/youtubeIcon.svg"
            alt="YouTube"
            style={iconStyles}
            className="social-icon"
          />
        </a>
        <a 
          href="https://store.steampowered.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          onMouseOver={handleHover}
          onMouseOut={handleLeave}
          onFocus={handleHover}
          onBlur={handleLeave}
        >
          <StaticImage 
            src="../images/social/steamIcon.svg"
            alt="Steam"
            style={iconStyles}
            className="social-icon"
          />
        </a>
      </div>
    </div>
  )
}

export default SocialMediaBar 