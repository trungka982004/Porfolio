import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = [
        { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Redux"] },
        { category: "Backend", items: ["Node.js", "Express", "Python", "MongoDB", "PostgreSQL", "REST APIs"] },
        { category: "Tools & Others", items: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"] }
    ];

    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {skillsData.map((category, index) => (
                        <div key={index} className="skill-card">
                            <h3 className="skill-category">{category.category}</h3>
                            <div className="skill-items">
                                {category.items.map((item, idx) => (
                                    <span key={idx} className="skill-badge">{item}</span>
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
