import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { siteConfig } from '../config/siteConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((open) => !open);

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, 'hero')}>
          {siteConfig.brandName}
        </a>

        <button
          type="button"
          className={`menu-icon ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li>
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
