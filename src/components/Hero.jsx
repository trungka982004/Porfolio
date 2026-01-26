import React from 'react';
import './Hero.css';
import Image from '../assets/WIN_20251122_17_00_08_Pro.jpg';
const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">Phan Thiet Trung</h1>
                    <h2 className="role">Frontend & Mobile Developer</h2>
                    <p className="description">
                        I am a 4th-year university student who builds exceptional digital experiences for web and mobile platforms.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob"></div>
                    <img src={Image} alt="" className='hero-img' />
                    <div className="code-card">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <pre>
                                <code>
                                    <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                                    {'\n'}  <span className="property">name</span>: <span className="string">'Trung'</span>,
                                    {'\n'}  <span className="property">level</span>: <span className="string">'Senior Year'</span>,
                                    {'\n'}  <span className="property">focus</span>: [<span className="string">'Frontend'</span>, <span className="string">'Mobile'</span>],
                                    {'\n'}  <span className="property">projects</span>: <span className="number">5</span>
                                    {'\n'}{'}'}
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
