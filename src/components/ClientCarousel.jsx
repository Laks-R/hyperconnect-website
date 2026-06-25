import React from 'react';

export default function ClientCarousel() {
  const clients = [
    {
      name: 'EF',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <circle cx="25" cy="25" r="20" fill="#00a859" />
          <text x="25" y="32" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#ffffff" textAnchor="middle">EF</text>
          <text x="55" y="30" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="800" fill="#00a859">EcoFriendly</text>
        </svg>
      )
    },
    {
      name: 'Alleima',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <path d="M10 35 L20 15 L30 35 H24 L20 25 L16 35 Z" fill="#e35205" />
          <text x="35" y="32" fontFamily="var(--font-heading)" fontSize="20" fontWeight="800" fill="#1a202c">Alleima</text>
        </svg>
      )
    },
    {
      name: 'Institution',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <circle cx="25" cy="25" r="18" fill="none" stroke="#2b6cb0" strokeWidth="3" />
          <polygon points="25,12 15,22 35,22" fill="#2b6cb0" />
          <rect x="18" y="22" width="14" height="12" fill="#2b6cb0" />
          <line x1="12" y1="36" x2="38" y2="36" stroke="#2b6cb0" strokeWidth="3" />
          <text x="50" y="30" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#2b6cb0">HOSUR COLLEGE</text>
        </svg>
      )
    },
    {
      name: 'The Oakrich',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          {/* A colorful tree representation */}
          <circle cx="20" cy="18" r="8" fill="#e53e3e" opacity="0.8" />
          <circle cx="30" cy="18" r="8" fill="#3182ce" opacity="0.8" />
          <circle cx="25" cy="26" r="8" fill="#319795" opacity="0.8" />
          <rect x="23" y="26" width="4" height="12" fill="#4a5568" />
          <text x="45" y="26" fontFamily="var(--font-heading)" fontSize="13" fontWeight="800" fill="#2d3748">THE</text>
          <text x="45" y="38" fontFamily="var(--font-heading)" fontSize="13" fontWeight="800" fill="#2d3748" letterSpacing="0.5px">OAKRICH</text>
        </svg>
      )
    },
    {
      name: 'TAAL',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <path d="M10 25 Q30 10 50 25 Q30 40 10 25 Z" fill="#1a365d" />
          <path d="M15 25 Q30 15 45 25" stroke="#00f2fe" strokeWidth="2" fill="none" />
          <text x="55" y="32" fontFamily="Impact, sans-serif" fontSize="22" fontWeight="bold" fill="#1a365d" letterSpacing="1px">TAAL</text>
        </svg>
      )
    }
  ];

  // Double the list to ensure infinite seamless scrolling loop
  const carouselItems = [...clients, ...clients];

  return (
    <div className="logo-carousel-container">
      <div className="logo-track">
        {carouselItems.map((client, idx) => (
          <div key={`${client.name}-${idx}`} className="logo-item" title={client.name}>
            {client.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
