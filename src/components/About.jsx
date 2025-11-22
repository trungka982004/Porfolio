import React from 'react';
import './About.css';
import Image from '../assets/avatar.png';
const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container about-container">
                <div className="about-image">
                    <div className="img-placeholder">
                        <span><img src={Image} alt="" className='avatar-img'/></span>
                    </div>  
                </div>
                <div className="about-content">
                    <h2 className="section-title">About Me</h2>
                    <p>
                        I am a dedicated Full Stack Developer with a passion for building efficient and scalable web applications.
                        With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                    </p>
                    <p>
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
                    </p>
                    <div className="stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
