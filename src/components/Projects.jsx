import React from 'react';
import './Projects.css';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section projects" data-reveal>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="project-card">
              <div className={`project-image ${project.imageKey}`}>
                <div className="overlay">
                  <a
                    href={project.liveUrl}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-outline btn-sm"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
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
