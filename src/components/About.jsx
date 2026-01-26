import React from 'react';
import './About.css';
import Image from '../assets/avatar.png';
const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    <div className="img-placeholder">
                        <span><img src={Image} alt="" className='avatar-img' /></span>
                    </div>
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <p>
                        I am a 4th-year university student with a passion for building efficient and scalable web and mobile applications.
                        With 1 year of experience in Frontend and Mobile development, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or focusing on creating seamless user experiences.
                    </p>
                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-number">1+</span>
                            <span className="stat-label">Year Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Dedication</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
