import React from 'react';

export default function PartnerCarousel() {
  const partners = [
    {
      name: 'Dahua',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <circle cx="20" cy="25" r="12" fill="#e53e3e" />
          <circle cx="20" cy="25" r="7" fill="#ffffff" />
          <path d="M20 18 L25 25 L20 32" stroke="#1a202c" strokeWidth="3" fill="none" />
          <text x="38" y="32" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="bold" fill="#1a202c">alhua</text>
          <text x="38" y="42" fontFamily="Arial, sans-serif" fontSize="6" fontWeight="bold" fill="#718096" letterSpacing="2px">TECHNOLOGY</text>
        </svg>
      )
    },
    {
      name: 'Holoware',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <rect x="10" y="15" width="15" height="15" fill="#2b6cb0" transform="rotate(45 17.5 22.5)" />
          <rect x="20" y="20" width="15" height="15" fill="#00f2fe" opacity="0.8" transform="rotate(45 27.5 27.5)" />
          <text x="45" y="32" fontFamily="'Courier New', Courier, monospace" fontSize="18" fontWeight="900" fill="#2b6cb0" letterSpacing="0.5px">HOLOWARE</text>
        </svg>
      )
    },
    {
      name: 'ZKTeco',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <path d="M10 15 H30 L18 35 H30" stroke="#48bb78" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <text x="38" y="33" fontFamily="Impact, Arial Black, sans-serif" fontSize="20" fontWeight="bold" fill="#48bb78" letterSpacing="0.5px">ZKTECO</text>
        </svg>
      )
    },
    {
      name: 'Tenda',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" fill="#f56565" italic="true">Tenda</text>
          <text x="10" y="42" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="bold" fill="#718096" letterSpacing="0.5px">All for better networking</text>
        </svg>
      )
    },
    {
      name: 'Lenovo',
      svg: (
        <svg viewBox="0 0 160 50" width="100%" height="100%">
          <rect x="10" y="10" width="110" height="30" fill="#e53e3e" />
          <text x="65" y="31" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" fill="#ffffff" textAnchor="middle" letterSpacing="-0.5px">lenovo</text>
        </svg>
      )
    }
  ];

  // Double the list to ensure infinite seamless scrolling loop
  const carouselItems = [...partners, ...partners];

  return (
    <div className="logo-carousel-container">
      <div className="logo-track">
        {carouselItems.map((partner, idx) => (
          <div key={`${partner.name}-${idx}`} className="logo-item" title={partner.name}>
            {partner.svg}
          </div>
        ))}
      </div>
    </div>
  );
}
