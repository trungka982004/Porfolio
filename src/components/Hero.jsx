import React from 'react';
import './Hero.css';
import Image from '../assets/WIN_20251122_17_00_08_Pro.jpg';
const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="greeting">Hello, I'm</span>
                    <h1 className="name">John Doe</h1>
                    <h2 className="role">Full Stack Developer</h2>
                    <p className="description">
                        I build exceptional digital experiences that are fast, accessible, beautiful, and responsive.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="blob"></div>
                    <img src={Image} alt="" className='hero-img'/>
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
                                    {'\n'}  <span className="property">name</span>: <span className="string">'John'</span>,
                                    {'\n'}  <span className="property">skills</span>: [<span className="string">'React'</span>, <span className="string">'Node'</span>],
                                    {'\n'}  <span className="property">hardWorker</span>: <span className="boolean">true</span>
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
