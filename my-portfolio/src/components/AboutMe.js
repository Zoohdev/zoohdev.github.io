import React from 'react';
import './AboutMe.css'; // About me page styling
import 'animate.css'; // Ensure you have animate.css installed

const AboutMe = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="about-title animate__animated animate__fadeInDown">About Me</h2>
      <p className="about-description animate__animated animate__fadeIn">
        I am a passionate full-stack developer with a love for creating dynamic web applications. 
        With experience in React, Node.js, and various other technologies, I enjoy tackling 
        complex problems and delivering high-quality solutions. 
      </p>
      <div className="fun-facts animate__animated animate__fadeInUp">
        <h3>Fun Facts</h3>
        <ul>
          <li>I love reading and exploring nature.</li>
          <li>I'm a coffee enthusiast and enjoy trying different brews.</li>
          <li>My favorite programming language is Python!</li>
        </ul>
      </div>

      <div className="tech-skills animate__animated animate__fadeInUp">
        <h3>Technologies I Work With</h3>
        <ul>
          <li>React</li>
          <li>Node.js</li>
          <li>Pycharm</li>
          <li>AWS</li>
          <li>JavaScript</li>
          <li>CSS/HTML</li>
          <li>Git/GitHub</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;

