import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const socialBarStyles = {
  position: 'fixed',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  padding: '15px',
  borderRadius: '10px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
}

const iconStyles = {
  width: '30px',
  height: '30px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
}

const SocialMediaBar = () => {
  const handleHover = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1.1)';
  };

  const handleLeave = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1)';
  };

  return (
    <div style={socialBarStyles}>
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
  )
}

export default SocialMediaBar 