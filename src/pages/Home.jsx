import React from 'react';
import ClientCarousel from '../components/ClientCarousel';
import PartnerCarousel from '../components/PartnerCarousel';

export default function Home({ setActivePage }) {
  const services = [
    {
      title: 'Network Security',
      desc: 'Comprehensive protection against malware, intrusions, and cyber attacks.',
      img: '/assets/service_network_security.png'
    },
    {
      title: 'Laptops',
      desc: 'High-performance laptops for business, education, and personal use.',
      img: '/assets/service_laptops.png'
    },
    {
      title: 'Networking',
      desc: 'Reliable wired and wireless network solutions.',
      img: '/assets/service_networking.png'
    },
    {
      title: 'CCTV',
      desc: 'High-definition surveillance systems for complete protection.',
      img: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f2b6c 0%, #0052d4 50%, #0099ff 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 0 80px 0',
      }}>
        {/* Network Node lines absolute background SVG overlay */}
        <svg style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.15,
          pointerEvents: 'none'
        }} viewBox="0 0 1000 500" preserveAspectRatio="none">
          <circle cx="100" cy="150" r="5" fill="#ffffff" />
          <circle cx="300" cy="80" r="5" fill="#ffffff" />
          <circle cx="550" cy="200" r="5" fill="#ffffff" />
          <circle cx="200" cy="350" r="5" fill="#ffffff" />
          <circle cx="750" cy="100" r="5" fill="#ffffff" />
          <circle cx="900" cy="300" r="5" fill="#ffffff" />
          <line x1="100" y1="150" x2="300" y2="80" stroke="#ffffff" strokeWidth="1" />
          <line x1="300" y1="80" x2="550" y2="200" stroke="#ffffff" strokeWidth="1" />
          <line x1="100" y1="150" x2="200" y2="350" stroke="#ffffff" strokeWidth="1" />
          <line x1="200" y1="350" x2="550" y2="200" stroke="#ffffff" strokeWidth="1" />
          <line x1="550" y1="200" x2="750" y2="100" stroke="#ffffff" strokeWidth="1" />
          <line x1="750" y1="100" x2="900" y2="300" stroke="#ffffff" strokeWidth="1" />
          <line x1="550" y1="200" x2="900" y2="300" stroke="#ffffff" strokeWidth="1" />
        </svg>

        <div className="container grid-2" style={{ alignItems: 'center' }}>
          {/* Hero Text */}
          <div style={{ zIndex: 5 }}>
            <h1 style={{ 
              fontSize: '48px', 
              lineHeight: '1.15', 
              color: '#ffffff',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              marginBottom: '15px'
            }}>
              Hyper<span style={{ color: 'var(--color-green-accent)' }}>Connect</span> <br />
              Technologies
            </h1>
            <p style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#00f2fe',
              marginBottom: '25px',
              letterSpacing: '0.5px'
            }}>
              "Reliable CCTV, Networking & Access Control Solutions"
            </p>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: '#e2e8f0',
              marginBottom: '35px',
              maxWidth: '540px'
            }}>
              Enhance your business or home with powerful technology and trusted security. From high-performance networking and reliable CCTV systems to advanced access control and professional-grade laptops & desktops — we deliver complete IT and security solutions tailored to your needs.
            </p>
            <button 
              onClick={() => setActivePage('contact')}
              style={{
                backgroundColor: '#0070f3',
                color: '#ffffff',
                border: 'none',
                borderRadius: '50px',
                padding: '14px 32px',
                fontSize: '14px',
                fontWeight: '700',
                letterSpacing: '1px',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(0, 112, 243, 0.39)',
                transition: 'all 0.2s ease',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.backgroundColor = '#1e88e5';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.backgroundColor = '#0070f3';
              }}
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Hero Floating Robot Image */}
          <div style={{ display: 'flex', justifyContent: 'center', zIndex: 5 }}>
            <img 
              src="/assets/hero_robot.png" 
              alt="HyperConnect Robot Mascot" 
              className="animate-float"
              style={{
                width: '100%',
                maxWidth: '420px',
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.3))'
              }}
            />
          </div>
        </div>
      </section>

      {/* Our Solutions Section */}
      <section style={{ padding: '90px 0', backgroundColor: '#f8fafc' }}>
        <div className="container grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          {/* Solutions Illustration */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img 
              src="/assets/solutions_shield.png" 
              alt="Solutions Security" 
              style={{
                width: '100%',
                maxWidth: '450px',
                borderRadius: '20px',
                filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.08))'
              }}
            />
          </div>

          {/* Solutions Text */}
          <div>
            <h2 style={{
              fontSize: '36px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '800',
              marginBottom: '20px',
              position: 'relative',
              display: 'inline-block'
            }} className="text-gradient">
              Our Solutions
            </h2>
            <p style={{
              fontSize: '15px',
              lineHeight: '1.7',
              color: 'var(--color-text-dark)',
              marginBottom: '24px'
            }}>
              At <strong style={{ color: 'var(--color-primary-blue)' }}>HyperConnect Technologies</strong> we deliver reliable and cost-effective <strong>IT and Security Solutions</strong> for homes, offices, and industries. Our goal is to provide smart technology that keeps you <strong>connected, protected, and productive</strong> every day.
            </p>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-green-hover)', fontSize: '18px', lineHeight: '1' }}>•</span>
                <span style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  Stay safe with our advanced CCTV systems that ensure 24/7 security and real-time monitoring. We offer <strong>professional installation, configuration, and support</strong> for homes, businesses, and commercial spaces.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-green-hover)', fontSize: '18px', lineHeight: '1' }}>•</span>
                <span style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  We design and implement strong, stable, and secure network systems that keep your business <strong>connected</strong>.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-green-hover)', fontSize: '18px', lineHeight: '1' }}>•</span>
                <span style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  Control and monitor entry points with our modern access control systems.
                </span>
              </li>
              <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-green-hover)', fontSize: '18px', lineHeight: '1' }}>•</span>
                <span style={{ fontSize: '14px', lineHeight: '1.6' }}>
                  We offer the latest laptops, desktops, and custom-built systems for personal and professional use.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section style={{ padding: '90px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-4">
            {services.map((svc, idx) => (
              <div key={idx} className="service-card">
                <div className="service-card-img-wrapper">
                  <img src={svc.img} alt={svc.title} className="service-card-img" />
                </div>
                <div style={{ padding: '24px', textAlign: 'center' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '700',
                    marginBottom: '10px',
                    color: '#2d3748'
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#718096',
                    lineHeight: '1.6',
                    minHeight: '60px'
                  }}>
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Carousel Section */}
      <section style={{ padding: '60px 0 40px 0', backgroundColor: '#ffffff', borderTop: '1px solid #edf2f7' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '35px',
            gap: '20px'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              color: '#3182ce',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              Our Clients
            </h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
          </div>
          <ClientCarousel />
        </div>
      </section>

      {/* Our Partners Carousel Section */}
      <section style={{ padding: '40px 0 80px 0', backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '35px',
            gap: '20px'
          }}>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
            <h2 style={{
              fontSize: '28px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              color: '#3182ce',
              textAlign: 'center',
              whiteSpace: 'nowrap'
            }}>
              Our Partners
            </h2>
            <div style={{ flex: 1, height: '1px', backgroundColor: '#e2e8f0' }} />
          </div>
          <PartnerCarousel />
        </div>
      </section>
    </div>
  );
}
