import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Privacy from './Component/Home/Privacy';
import Home from './Component/Home';
import HeroSection from './Component/Home/Navbar';
import Footer from './Component/Home/Footer';
import TermandCondition from './Component/TermandCondition';

const MaintenancePage = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const displayTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const styles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }
  `;

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #a7bfff, #0045ff)',
      fontFamily: 'Segoe UI, sans-serif',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 40px 40px'
    }}>
      <style>{styles}</style>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        {/* Logo */}
        <img src="/logo3.png" alt="Company Logo" style={{ height: '70px' }} />
        
        {/* Contact Button */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <button style={{
            marginBottom: '10px',
            background: '#ffffff',
            border: '2px solid #0045ff',
            borderRadius: '25px',
            padding: '12px 25px',
            color: '#0045ff',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(0, 69, 255, 0.2)',
            transition: 'all 0.3s ease',
            ':hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 69, 255, 0.3)',
              background: '#f0f5ff'
            }
          }}>
            Contact Us
          </button>
          
          <div style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            padding: '10px 20px',
            background: 'rgba(0, 69, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(0, 69, 255, 0.5)'
          }}>
            {displayTime}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Section */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.3', fontWeight: 700, marginBottom: '40px' }}>
            Building<br />Something<br />with<br /><span style={{ fontWeight: '800', fontSize: '4.5rem' }}>Framedigital</span>
          </h1>

          <div style={{ marginTop: '40px', display: 'flex', gap: '15px', maxWidth: '600px' }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                padding: '15px 20px',
                border: '2px solid white',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                minWidth: '300px',
                fontSize: '1.1rem',
                outline: 'none',
                '::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)'
                }
              }}
            />
            <button style={{
              padding: '15px 30px',
              background: '#0038ff',
              border: 'none',
              borderRadius: '30px',
              color: 'white',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontSize: '1.1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              ':hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 5px 15px rgba(0, 56, 255, 0.4)'
              }
            }}>
              Submit ^_^
            </button>
          </div>

          <div style={{ marginTop: '80px', marginLeft: '10px' }}>
            <p style={{ marginBottom: '20px', fontSize: '1.3rem', opacity: 0.9, textAlign: 'left' }}>Follow us:</p>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" 
                  alt="Facebook" 
                  style={{ width: '45px', height: '45px', objectFit: 'contain', transition: 'transform 0.3s ease' }} 
                />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" 
                  alt="Instagram" 
                  style={{ width: '45px', height: '45px', objectFit: 'contain', transition: 'transform 0.3s ease' }} 
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" 
                  alt="LinkedIn" 
                  style={{ width: '45px', height: '45px', objectFit: 'contain', transition: 'transform 0.3s ease' }} 
                />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png" 
                  alt="X (Twitter)" 
                  style={{ width: '45px', height: '45px', objectFit: 'contain', transition: 'transform 0.3s ease' }} 
                />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            fontSize: '7rem',
            opacity: 0.1,
            zIndex: 0,
            whiteSpace: 'nowrap',
            lineHeight: '1.1',
            textAlign: 'right',
            pointerEvents: 'none',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}>
            COMING SOON<br />
            COMING SOON<br />
            COMING SOON<br />
            COMING SOON<br />
            COMING SOON<br />
            COMING SOON<br />
            COMING SOON
          </div>

          <img 
            src="/process/maintance/At the office-amico 1.png" 
            alt="Office Team" 
            style={{ 
              width: '100%', 
              maxWidth: '600px',
              height: 'auto',
              zIndex: 1,
              marginTop: '40px',
              transform: 'scale(1)'
            }} 
          />

          <div id="timer" style={{
            marginTop: '20px',
            fontSize: '3rem',
            fontWeight: 'bold',
            zIndex: 2
          }}>
        
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const MAINTENANCE_MODE = true;

  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <div>
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-and-conditions" element={<TermandCondition />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
