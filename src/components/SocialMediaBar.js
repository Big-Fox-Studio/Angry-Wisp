import React, { useState, useEffect, useCallback } from 'react';
// Importez chaque image individuellement
import XIcon from '../images/social/xIcon.svg';
import SteamIcon from '../images/social/steamIcon.svg';
import YoutubeIcon from '../images/social/youtubeIcon.svg';
import DiscordIcon from '../images/social/discordIcon.svg';

const MOBILE_BREAKPOINT = 780;

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
  padding: '12px',
  boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
  userSelect: 'none',
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
  },
  userSelect: 'none',
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

const getIconStyles = (isMobile, isActive) => ({
  width: isMobile ? '28px' : '35px',
  height: isMobile ? '28px' : '35px',
  transition: 'transform 0.2s ease',
  cursor: isActive ? 'pointer' : 'not-allowed',
  userSelect: 'none',
  filter: isActive 
    ? 'drop-shadow(0 2px 3px rgba(0, 0, 0, 0.15))' 
    : 'grayscale(100%) opacity(50%)',
})

const SOCIAL_NETWORKS = [ 
 {
    id: 'steam',
    name: 'Steam',
    url: 'https://store.steampowered.com/app/3762660/Trials_Survivors/',
    icon: SteamIcon,
    isActive: true
 }, 
 {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com/',
    icon: YoutubeIcon,
    isActive: false
  },
  {
    id: 'discord',
    name: 'Discord',
    url: 'https://discord.gg/p8PTDZWEzP',
    icon: DiscordIcon,
    isActive: true
  },
  {  
    id: 'x',
    name: 'X',
    url: 'https://x.com/',
    icon: XIcon,
    isActive: false
  }
];

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

  const handleHover = (e, isActive) => {
    if (isActive) {
      e.currentTarget.children[0].style.transform = 'scale(1.2)';
    }
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
        {SOCIAL_NETWORKS.map(network => {
          const CommonProps = {
            key: network.id,
            onMouseOver: (e) => handleHover(e, network.isActive),
            onMouseOut: (e) => e.currentTarget.children[0].style.transform = 'scale(1)',
            onFocus: (e) => handleHover(e, network.isActive),
            onBlur: (e) => e.currentTarget.children[0].style.transform = 'scale(1)',
            style: { cursor: network.isActive ? 'pointer' : 'not-allowed' }
          };

          return network.isActive ? (
            <a 
              {...CommonProps}
              href={network.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visiter notre page ${network.name}`}
            >
              <img 
                src={network.icon}
                alt={network.name}
                style={getIconStyles(isMobile, network.isActive)}
                className="social-icon"
              />
            </a>
          ) : (
            <div
              {...CommonProps}
              role="presentation"
              aria-label={`${network.name} (non disponible)`}
            >
              <img 
                src={network.icon}
                alt={network.name}
                style={getIconStyles(isMobile, network.isActive)}
                className="social-icon"
              />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default SocialMediaBar 