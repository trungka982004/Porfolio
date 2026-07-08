import React from 'react';
import './Hero.css';
import Image from '../assets/avatar.png';
import { personalInfo } from '../data/personal';

const Hero = () => {
  return (
    <section id="hero" className="hero" data-reveal>
      <div className="container hero-container">
        <div className="hero-content">
          <span className="greeting">{personalInfo.greeting}</span>
          <h1 className="name">{personalInfo.name}</h1>
          <h2 className="role">{personalInfo.role}</h2>
          <p className="description">{personalInfo.heroTagline}</p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
          <div className="hero-visual">
          <div className="blob"></div>
          <img
            src={Image}
            alt={personalInfo.name}
            className="hero-img"
            loading="eager"
          />
          <div className="code-card">
            <div className="code-header">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  <span className="keyword">const</span>{' '}
                  <span className="variable">developer</span> = {'{'}
                  {'\n'} <span className="property">name</span>:{' '}
                  <span className="string">'{personalInfo.shortName}'</span>,
                  {'\n'} <span className="property">level</span>:{' '}
                  <span className="string">'Senior Year'</span>,
                  {'\n'} <span className="property">focus</span>: [
                  <span className="string">'Frontend'</span>,{' '}
                  <span className="string">'Mobile'</span>],
                  {'\n'} <span className="property">projects</span>:{' '}
                  <span className="number">5</span>
                  {'\n'}
                  {'}'}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-down">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
