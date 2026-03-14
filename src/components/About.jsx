import React from 'react';
import './About.css';
import Image from '../assets/avatar.png';
import { personalInfo } from '../data/personal';

const About = () => {
  return (
    <section id="about" className="section about" data-reveal>
      <div className="container about-container">
        <div className="about-image">
          <div className="img-placeholder">
            <span>
              <img
                src={Image}
                alt={personalInfo.name}
                className="avatar-img"
                loading="lazy"
              />
            </span>
          </div>
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          {personalInfo.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="stats">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
