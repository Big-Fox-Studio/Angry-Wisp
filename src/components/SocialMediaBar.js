import React, { useState, useEffect, useCallback } from 'react';
import { StaticImage } from "gatsby-plugin-image"

const MOBILE_BREAKPOINT = 800; // Même breakpoint que le header

const getBarStyles = (isMobile) => ({
  position: 'fixed',
  ...(isMobile ? {
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
  } : {
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
  display: 'flex',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 1)',
  backdropFilter: 'blur(5px)',
  padding: isMobile ? '12px' : '18px',
  borderRadius: '15px',
  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
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
    <div style={getBarStyles(isMobile)}>
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