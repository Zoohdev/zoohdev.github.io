import React from 'react';
import './portfolio.css'; // Ensure you have styles defined in this CSS file

const projects = [
  {
    title: "React Website",
    description: "Touring Ghana Frontend (MERN Stack)",
    githubLink: "https://github.com/TOURING-GHANA/Wireframes-Designs.git",
    
  },
  {
    title: "Full Stack To Do Application",
    description: "Post, Delete HTTP requests, Basic UI",
    githubLink: "https://github.com/Zoohdev/ToDoApplication.git",
   
  },
  {
    title: "Bible Quiz App UI",
    description: "Bible Quiz App, Chatbot, Generative AI",
    githubLink: "https://github.com/Zoohdev/pathwaychronicles.git",
    
  },
  {
    title: "CTO Project: Mobile Application",
    description: "Full Stack React Native & Django",
    githubLink: "https://github.com/Zoohdev/PaySignalApplication.git",
    
  },
  {
    title: "UI Design Files",
    description: "Marketplace Application UI",
    githubLink: "https://www.figma.com/design/bYp0JFkJEF7mKQL4XPbrVH/One-Earth-UI-prototype?node-id=33-444&t=c4V5ERFst1i0sCEd-1",
   
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1>My Portfolio</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.embedLink ? (
              <iframe 
                className="project-video" 
                src={project.embedLink} 
                title={project.title} 
                frameBorder="0" 
                allow="autoplay; fullscreen" 
                allowFullScreen 
                width="100%" 
                height="315"
              />
            ) : null}
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;



