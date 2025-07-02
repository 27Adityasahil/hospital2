import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Welcome to Bimal Hospital';

  useEffect(() => {
    // Typing animation
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    // Cursor blinking animation
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        {/* Typing Text */}
        <div className="preloader-text">
          <h1 className="display-4 fw-bold font-display text-9xl text-center">
            <span className="text-gradient-primary">{displayText}</span>
            <span className={`typing-cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="preloader-spinner mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;