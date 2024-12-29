import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <a href="/about" className="footer-link">About</a>
          <a href="/story" className="footer-link">Story</a>
          <a href="/collections" className="footer-link">Collections</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
        </div>
      </div>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} ProjectSchool. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
