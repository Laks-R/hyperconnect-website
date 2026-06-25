import React from 'react';
import { Calendar, ThumbsUp, Smile } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Calendar size={32} color="#4ade80" strokeWidth={2.5} />,
      title: '8+ Years of experience'
    },
    {
      icon: <ThumbsUp size={32} color="#4ade80" strokeWidth={2.5} />,
      title: '2500+ Projects executed'
    },
    {
      icon: <Smile size={32} color="#4ade80" strokeWidth={2.5} />,
      title: '200+ Unique Clients'
    }
  ];

  return (
    <div style={{
      backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.82)), url('/assets/about_typing_bg.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '80px 0 100px 0',
      minHeight: 'calc(100vh - 90px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div className="container">
        {/* Content Card (Glassmorphism effect matching the screenshot) */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          borderRadius: '16px',
          padding: '50px 45px',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.05)',
          maxWidth: '960px',
          margin: '0 auto 60px auto'
        }}>
          <h2 style={{
            fontSize: '38px',
            fontFamily: 'var(--font-heading)',
            fontWeight: '700',
            color: '#415a77',
            marginBottom: '8px',
          }}>
            About HyperConnect
          </h2>
          {/* Accent Line */}
          <div style={{
            width: '180px',
            height: '4px',
            background: 'linear-gradient(to right, #0f3ba2, #00f2fe)',
            borderRadius: '2px',
            marginBottom: '35px'
          }} />

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            fontSize: '15px',
            lineHeight: '1.75',
            color: '#2d3748'
          }}>
            <p>
              Established in 2016, <strong>Hyperconnect Technologies</strong> is a trusted provider of <strong>CCTV surveillance, networking infrastructure, access control systems, and IT solutions</strong> including <strong>laptops, desktops, and computer accessories</strong>.
            </p>
            <p>
              With years of experience, we specialize in delivering <strong>high-performance, cost-effective, and scalable technology solutions</strong> for homes, businesses, and organizations. From <strong>smart security systems to seamless network connectivity</strong>, our goal is to ensure reliability, protection, and productivity in every environment.
            </p>
            <p>
              At <strong>Hyperconnect Technologies</strong>, we believe that technology should simplify life – that's why we focus on <strong>innovation, customer satisfaction, and long-term support</strong> to help our clients stay connected and secure in a fast-moving digital world.
            </p>
            {/* Repeated paragraph to strictly match the design screenshot */}
            <p>
              At <strong>Hyperconnect Technologies</strong>, we believe that technology should simplify life – that's why we focus on <strong>innovation, customer satisfaction, and long-term support</strong> to help our clients stay connected and secure in a fast-moving digital world.
            </p>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid-3" style={{ maxWidth: '960px', margin: '0 auto' }}>
          {highlights.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(5px)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '16px',
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '20px',
                textAlign: 'center',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.02)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              className="about-highlight-card"
            >
              {/* Icon Container with border */}
              <div style={{
                border: '1.5px solid #2d3748',
                borderRadius: '14px',
                width: '60px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff'
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontFamily: 'var(--font-heading)',
                fontWeight: '700',
                color: '#1a202c'
              }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-highlight-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.06) !important;
          background-color: rgba(255, 255, 255, 0.85) !important;
        }
      `}</style>
    </div>
  );
}
