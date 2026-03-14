import React from 'react';
import './Skills.css';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section skills" data-reveal>
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((category) => (
            <div key={category.category} className="skill-card">
              <h3 className="skill-category">{category.category}</h3>
              <div className="skill-items">
                {category.items.map((item) => (
                  <span key={item} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
