import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer({ setActivePage }) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/918098096499', '_blank');
  };

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ width: '100%', position: 'relative' }}>
      {/* Top Level: Gradient Footer */}
      <div style={{
        background: 'linear-gradient(90deg, #0052d4 0%, #4364f7 50%, #00f2fe 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        padding: '50px 0'
      }}>
        {/* Subtle Tech Network Nodes Background Pattern (Left Side Overlay) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          opacity: 0.12,
          pointerEvents: 'none',
          backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }} />
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '40%',
          height: '100%',
          opacity: 0.15,
          pointerEvents: 'none'
        }} viewBox="0 0 400 200">
          <circle cx="50" cy="50" r="4" fill="#ffffff" />
          <circle cx="150" cy="120" r="4" fill="#ffffff" />
          <circle cx="280" cy="60" r="4" fill="#ffffff" />
          <circle cx="100" cy="160" r="4" fill="#ffffff" />
          <line x1="50" y1="50" x2="150" y2="120" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="150" y1="120" x2="280" y2="60" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="50" y1="50" x2="100" y2="160" stroke="#ffffff" strokeWidth="1.5" />
          <line x1="100" y1="160" x2="150" y2="120" stroke="#ffffff" strokeWidth="1.5" />
        </svg>

        <div className="container">
          <div className="grid-3" style={{ position: 'relative', zIndex: 3 }}>
            {/* Address Column */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPin size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  Address
                </h3>
                <p style={{ 
                  fontSize: '14px', 
                  lineHeight: '1.6', 
                  opacity: 0.95,
                  maxWidth: '320px'
                }}>
                  26, 85, Taluk Office Rd, near Vasanth & Co Oppsite Mommy Daddy Readymades, Hosur, Tamil Nadu 635109.
                </p>
              </div>
            </div>

            {/* Phone Number Column */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  Phone Number
                </h3>
                <p style={{ 
                  fontSize: '16px', 
                  fontWeight: '600', 
                  marginBottom: '18px' 
                }}>
                  +9180980 96499
                </p>
                {/* Social Circle Links */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  {['facebook', 'twitter', 'instagram', 'google', 'linkedin'].map((social) => (
                    <a 
                      key={social}
                      href={`#${social}`}
                      className="footer-social-circle"
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        border: '1px solid rgba(255, 255, 255, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        transition: 'var(--transition-smooth)'
                      }}
                    >
                      {social[0].toUpperCase()}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Email Column */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={22} color="#ffffff" />
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '20px', 
                  fontFamily: 'var(--font-heading)',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  Email Id
                </h3>
                <p style={{ 
                  fontSize: '15px', 
                  lineHeight: '1.8' 
                }}>
                  <a href="mailto:admin@hctindia.com" style={{ display: 'block', textDecoration: 'underline' }}>
                    admin@hctindia.com
                  </a>
                  <a href="mailto:info@hctindia.com" style={{ display: 'block', textDecoration: 'underline' }}>
                    info@hctindia.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Level: Dark Footer Bar */}
      <div style={{
        backgroundColor: '#0a0b0d',
        color: '#718096',
        padding: '20px 0',
        fontSize: '13px',
        borderTop: '1px solid #1a202c'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }} className="bottom-bar-flex">
          <div>
            Designed by <strong style={{ color: '#a0aec0' }}>The Hosur computers</strong> and Copyright @ all sites are Reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#fb" style={{ color: '#718096' }} className="bottom-social-link">f</a>
            <a href="#tw" style={{ color: '#718096' }} className="bottom-social-link">t</a>
            <a href="#ig" style={{ color: '#718096' }} className="bottom-social-link">ig</a>
            <a href="#rss" style={{ color: '#718096' }} className="bottom-social-link">rss</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25D366',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'transform 0.2s ease, background-color 0.2s ease'
        }}
        className="whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="34" height="34" fill="#ffffff">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 1.978 14.122 1.057 11.5 1.055 6.062 1.055 1.642 5.428 1.638 10.86c-.001 1.762.477 3.48 1.384 5.01L2.01 20.83l5.037-1.314zM16.8 14.17c-.285-.143-1.69-.835-1.952-.93-.262-.095-.453-.143-.644.143-.19.285-.738.93-.905 1.12-.167.19-.333.214-.618.071-.285-.143-1.206-.444-2.298-1.417-.85-.758-1.424-1.693-1.59-1.978-.167-.286-.018-.44.125-.581.129-.127.285-.333.428-.5.143-.167.19-.285.285-.476.095-.19.048-.357-.024-.5-.071-.143-.644-1.547-.88-2.119-.23-.553-.464-.477-.644-.486-.167-.008-.357-.01-.548-.01-.19 0-.5.071-.762.357-.262.285-1 .976-1 2.38 0 1.405 1.024 2.762 1.167 2.952.143.19 2.016 3.08 4.885 4.315.682.294 1.216.469 1.632.601.687.218 1.312.187 1.807.114.551-.082 1.69-.69 1.928-1.357.238-.667.238-1.238.167-1.357-.071-.12-.262-.19-.548-.333z"/>
        </svg>
      </button>

      {/* Floating Cookie Settings Button */}
      <button
        style={{
          position: 'fixed',
          bottom: '25px',
          left: '25px',
          backgroundColor: '#2b6cb0',
          border: 'none',
          borderRadius: '50%',
          width: '45px',
          height: '45px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'transform 0.2s ease'
        }}
        className="cookie-btn"
        title="Privacy Preferences"
      >
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
          <circle cx="12" cy="12" r="1" fill="#ffffff" />
          <circle cx="16" cy="16" r="1" fill="#ffffff" />
          <circle cx="8" cy="14" r="1" fill="#ffffff" />
          <circle cx="12" cy="18" r="1" fill="#ffffff" />
        </svg>
      </button>

      <style>{`
        .bottom-bar-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        @media (max-width: 768px) {
          .bottom-bar-flex {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }
        }
        .footer-social-circle:hover {
          background-color: #ffffff !important;
          color: #0f3ba2 !important;
          transform: scale(1.1);
        }
        .bottom-social-link:hover {
          color: #ffffff !important;
        }
        .whatsapp-btn:hover {
          transform: scale(1.1);
          background-color: #128C7E !important;
        }
        .cookie-btn:hover {
          transform: scale(1.1);
          background-color: #1a365d !important;
        }
      `}</style>
    </footer>
  );
}
