import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Mini Cloud Project",
            description: "Mini Cloud Project is a cloud computing project that allows users to store and manage their files in the cloud.",
            tech: ["React", "Node.js", "MariaDB", "AWS"],
            image: "project1", // Placeholder class
            link: "#",
            github: "https://github.com/trungka982004/Cloud_Computing_CK_MiniCloud.git"
        },
        {
            title: "Daily Grind Gone",
            description: "To do list daily grind gone with firebase",
            tech: ["React", "TypeScript", "Superbase", "Tailwind"],
            image: "project2",
            link: "https://daily-grind-gone.lovable.app",
            github: "https://github.com/trungka982004/daily-grind-gone.git"
        },
        {
            title: "Portfolio Website",
            description: "A modern, responsive portfolio website to showcase creative work.",
            tech: ["React", "Three.js", "GSAP"],
            image: "project3",
            link: "#",
            github: "#"
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className={`project-image ${project.image}`}>
                                <div className="overlay">
                                    <a href={project.link} className="btn btn-primary btn-sm">Live Demo</a>
                                    <a href={project.github} className="btn btn-outline btn-sm">GitHub</a>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
