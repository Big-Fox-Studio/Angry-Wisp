import React, { useState } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const socialBarStyles = {
  position: 'fixed',
  bottom: '15px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: '25px',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  backdropFilter: 'blur(5px)',
  padding: '18px',
  borderRadius: '15px',
  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
}

const toggleButtonStyles = {
  position: 'absolute',
  left: '-30px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '30px',
  height: '60px',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  backdropFilter: 'blur(5px)',
  border: 'none',
  borderRadius: '10px 0 0 10px',
  cursor: 'pointer',
  boxShadow: '-2px 0 4px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1001,
}

const iconStyles = {
  width: '35px',
  height: '35px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
  filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15))',
}

const SocialMediaBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleHover = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1.2)';
  };

  const handleLeave = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1)';
  };

  return (
    <div style={socialBarStyles}>
      <div style={{ display: 'flex', gap: '15px' }}>
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
      </div>
    </div>
  )
}

export default SocialMediaBar 