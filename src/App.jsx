import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Render current active page component
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Responsive Navigation Header */}
      <Header activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        {renderPage()}
      </main>

      {/* Two-Level Footer & Floating Widgets */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
