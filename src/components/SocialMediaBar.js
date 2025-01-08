import React, { useState, useEffect, useCallback } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const MOBILE_BREAKPOINT = 800;

const getBarStyles = (isMobile, isOpen) => ({
  position: 'fixed',
  ...(isMobile ? {
    right: isOpen ? '0' : '-55px',
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'right 0.3s ease',
    borderRadius: '10px 0 0 10px',
  } : {
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '15px',
  }),
  display: 'flex',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  backdropFilter: 'blur(5px)',
  padding: isMobile ? '12px' : '18px',
  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
})

const toggleButtonStyles = (isOpen) => ({
  position: 'absolute',
  left: '-30px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 1)',
  borderRadius: '6px 0 0 6px',
  cursor: 'pointer',
  zIndex: 999,
  boxShadow: '-3px 0 12px rgba(0, 0, 0, 0.15)',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background-color 0.2s ease',
  height: '80px',
  width: '30px',
  overflow: 'visible',
  '&:hover': {
    backgroundColor: 'rgba(240, 240, 240, 1)',
  }
})

const arrowStyles = (isOpen) => ({
  width: '8px',
  height: '8px',
  border: 'solid #333',
  borderWidth: '0 2px 2px 0',
  padding: '0',
  transform: `rotate(${isOpen ? -45 : 135}deg)`,
  transition: 'transform 0.3s ease',
  position: 'relative',
  display: 'block',
})

const getContainerStyles = (isMobile) => ({
  display: 'flex',
  flexDirection: isMobile ? 'column' : 'row',
  gap: isMobile ? '15px' : '25px',
})

const getIconStyles = (isMobile) => ({
  width: isMobile ? '28px' : '35px',
  height: isMobile ? '28px' : '35px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',
  filter: 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15))',
})

const SocialMediaBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const checkMobile = useCallback(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    }
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [checkMobile]);

  const handleHover = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1.2)';
  };

  const handleLeave = (e) => {
    e.currentTarget.children[0].style.transform = 'scale(1)';
  };

  return (
    <div style={getBarStyles(isMobile, isOpen)}>
      {isMobile && (
        <button 
          style={toggleButtonStyles(isOpen)}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cacher les réseaux sociaux' : 'Afficher les réseaux sociaux'}
        >
          <div style={arrowStyles(isOpen)} />
        </button>
      )}
      <div style={getContainerStyles(isMobile)}>
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
            style={getIconStyles(isMobile)}
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
            style={getIconStyles(isMobile)}
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
            style={getIconStyles(isMobile)}
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
            style={getIconStyles(isMobile)}
            className="social-icon"
          />
        </a>
      </div>
    </div>
  )
}

export default SocialMediaBar 