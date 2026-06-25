import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About us' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      zIndex: 1000,
      width: '100%'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90px',
        padding: '0 20px'
      }}>
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '15px', 
            cursor: 'pointer' 
          }}
        >
          {/* Custom SVG Logo matching HCT */}
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect width="100" height="100" rx="12" fill="#ffffff" />
            <path d="M10 25 H90" stroke="#0f3ba2" strokeWidth="8" strokeLinecap="round"/>
            <path d="M10 75 H90" stroke="#0f3ba2" strokeWidth="8" strokeLinecap="round"/>
            <rect x="25" y="32" width="50" height="36" rx="6" fill="#ffffff" stroke="#0f3ba2" strokeWidth="6" />
            {/* Inner HCT symbol */}
            <circle cx="50" cy="50" r="12" stroke="#00f2fe" strokeWidth="4" strokeDasharray="6 2" />
            <path d="M42 42 L58 58 M58 42 L42 58" stroke="#0f3ba2" strokeWidth="4" strokeLinecap="round" />
          </svg>
          <div>
            <h1 style={{ 
              fontSize: '24px', 
              fontFamily: 'var(--font-heading)', 
              fontWeight: '800', 
              color: '#1a202c',
              letterSpacing: '-0.5px',
              lineHeight: '1.1'
            }}>
              HYPERCONNECT
            </h1>
            <p style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: '#718096', 
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              marginTop: '2px'
            }}>
              Technologies
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '35px' 
          }}>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? '#8cc63f' : '#2b6cb0',
                      cursor: 'pointer',
                      padding: '8px 0',
                      position: 'relative',
                      transition: 'color 0.2s ease',
                    }}
                    className="nav-link-btn"
                  >
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '3px',
                        backgroundColor: '#8cc63f',
                        borderRadius: '2px'
                      }} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#0f3ba2',
            cursor: 'pointer',
            display: 'block'
          }}
          className="mobile-toggle-btn"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '90px',
          left: 0,
          width: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.05)',
          padding: '20px',
          borderTop: '1px solid #edf2f7',
          zIndex: 999
        }}>
          <ul style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            listStyle: 'none', 
            gap: '20px' 
          }}>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      width: '100%',
                      textAlign: 'left',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '18px',
                      fontWeight: isActive ? '700' : '600',
                      color: isActive ? '#8cc63f' : '#2b6cb0',
                      cursor: 'pointer',
                      padding: '10px 0'
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Embedded CSS for responsive header */}
      <style>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
        .nav-link-btn:hover {
          color: #8cc63f !important;
        }
      `}</style>
    </header>
  );
}
