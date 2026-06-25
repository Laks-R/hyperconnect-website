import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);
    setStatus({ submitted: false, error: false, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          submitted: true,
          error: false,
          message: result.message || 'Thank you! Your connection request has been sent successfully. We will contact you shortly.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceType: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to submit contact request.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setStatus({
        submitted: false,
        error: true,
        message: err.message || 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dot-pattern-bg" style={{
      padding: '80px 0 100px 0',
      minHeight: 'calc(100vh - 90px)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'stretch', gap: '50px' }}>
          
          {/* Left Column: Form Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            padding: '40px 35px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            border: '1px solid #edf2f7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              color: '#2d3748',
              lineHeight: '1.35',
              marginBottom: '30px'
            }}>
              A Customer Wants to Connect with us <br />
              <span style={{ color: 'var(--color-primary-blue)' }}>Hyperconnect</span>
            </h2>

            {status.submitted ? (
              <div style={{
                backgroundColor: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '12px',
                padding: '24px',
                color: '#15803d',
                textAlign: 'center'
              }}>
                <svg style={{ margin: '0 auto 15px auto' }} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>Request Sent!</h3>
                <p style={{ fontSize: '14px', lineHeight: '1.5' }}>{status.message}</p>
                <button
                  onClick={() => setStatus({ submitted: false, error: false, message: '' })}
                  style={{
                    marginTop: '20px',
                    backgroundColor: 'var(--color-primary-blue)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {status.error && (
                  <div style={{
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fca5a5',
                    borderRadius: '8px',
                    padding: '12px 16px',
                    color: '#991b1b',
                    fontSize: '14px'
                  }}>
                    {status.message}
                  </div>
                )}
                
                {/* Name & Email in parallel for desktop */}
                <div style={{ display: 'flex', gap: '15px' }} className="form-row-parallel">
                  <div style={{ flex: 1 }}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                {/* Service Type Selection */}
                <div>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="form-input"
                    style={{ color: formData.serviceType ? '#2d3748' : '#a0aec0' }}
                  >
                    <option value="" disabled>ServiceType</option>
                    <option value="CCTV">CCTV Surveillance</option>
                    <option value="Networking">Networking Infrastructure</option>
                    <option value="AccessControl">Access Control Systems</option>
                    <option value="Laptops">Laptops & Desktops</option>
                    <option value="Other">Other IT Solutions</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input"
                    style={{ minHeight: '120px', resize: 'vertical' }}
                    required
                  />
                </div>

                {/* Submit Button */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      backgroundColor: loading ? '#a0aec0' : '#0070f3',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '12px 36px',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      boxShadow: loading ? 'none' : '0 4px 10px rgba(0, 112, 243, 0.25)',
                      transition: 'var(--transition-smooth)',
                      opacity: loading ? 0.8 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!loading) {
                        e.target.style.backgroundColor = '#1e88e5';
                        e.target.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!loading) {
                        e.target.style.backgroundColor = '#0070f3';
                        e.target.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Google Map Embed */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            border: '1px solid #edf2f7',
            backgroundColor: '#ffffff',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            minHeight: '450px'
          }}>
            {/* Embedded interactive Google Map centering Classiczone / Mommy Daddy Readymades area, Hosur */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.312984923164!2d77.82594437507425!3d12.725700987576594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae713fcf8605c3%3A0xe104323c0b0fb160!2sClassiczone!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px', flex: 1 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HyperConnect Technologies Location - Classiczone, Hosur"
            ></iframe>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .form-row-parallel {
            flex-direction: column;
            gap: 18px !important;
          }
        }
      `}</style>
    </div>
  );
}
