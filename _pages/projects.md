---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /resume
---

<div class="projects-section">
  
  <div class="project-card">
    <h4>3D Tennis Complete Analysis</h4>
    <p class="technologies"><strong>Technologies:</strong> <i class="icon-python"></i> Python, <i class="icon-3d-vision"></i> 3D-Vision</p>
    <p class="description">This project presents a comprehensive 3D analysis of tennis, utilizing advanced computer vision methodologies. It focuses on detecting players, tracking ball trajectories, establishing a 3D comprehension of the court, and classifying player poses.</p>
    <a href="https://github.com/Amirreza81/Tennis-3DVision-Project" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Task Management App</h4>
    <p class="technologies"><strong>Technologies:</strong> <i class="icon-java"></i> Java, <i class="icon-javafx"></i> JavaFX</p>
    <p class="description">A client-server application developed with socket programming, allowing multi-threaded server functionality to handle multiple clients. Built with MVC architecture, it facilitates efficient task management.</p>
    <a href="https://github.com/Amirreza81/Task-Management-App" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>CMinus Compiler</h4>
    <p class="technologies"><strong>Technologies:</strong> <i class="icon-python"></i> Python</p>
    <p class="description">Developed a compiler for the CMinus language, a simplified subset of the C language, including Lexer, Parser, Code Generator, and Semantic Analyzer components.</p>
    <a href="https://github.com/Amirreza81/CMinus-Compiler" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Computer Vision Project</h4>
    <p class="technologies"><strong>Technologies:</strong> <i class="icon-python"></i> Python</p>
    <p class="description">Implemented a Convolutional Neural Network (CNN) and Neural Style Transfer, utilizing deep learning techniques in the field of computer vision.</p>
    <a href="https://github.com/Amirreza81/Machine-Learning" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Büchi Automaton</h4>
    <p class="description">A theoretical project focusing on Büchi and Generalized Büchi automaton, exploring automata theory applications in computation.</p>
    <a href="https://github.com/Amirreza81/Buchi-automaton" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Correlated and Mixed Nash Equilibrium</h4>
    <p class="technologies"><strong>Technologies:</strong> <i class="icon-python"></i> Python</p>
    <p class="description">This project implements algorithms for calculating Correlated and Mixed Nash Equilibria within the context of game theory.</p>
    <a href="https://github.com/Amirreza81/Equilibrium-Game-Theory" class="btn">View on GitHub</a>
  </div>

</div>

<style>
  /* Projects Section and Card Styles */
  .projects-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    font-family: Arial, sans-serif;
  }

  /* Project Card */
  .project-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    animation: fadeInUp 0.5s ease-out;
    animation-delay: calc(var(--delay) * 0.1s);
    opacity: 0;
    animation-fill-mode: forwards;
  }

  /* Fade-in Animation for Cards */
  @keyframes fadeInUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  /* Project Title */
  .project-card h4 {
    color: #4CAF50;
    margin-top: 0;
    font-size: 1.2em;
  }

  /* Technologies and Description */
  .project-card .technologies, .project-card .description {
    font-size: 0.9em;
    color: #666;
  }

  /* Button styles for GitHub links */
  .btn {
    display: inline-block;
    padding: 10px 15px;
    margin-top: 10px;
    color: white;
    background-color: #4CAF50;
    text-decoration: none;
    border-radius: 5px;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.2s ease;
  }
  .btn:hover {
    background-color: #388E3C;
    transform: scale(1.05);
  }

  /* Icons for technologies */
  .technologies i {
    margin-right: 5px;
    font-style: normal;
    display: inline-block;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    vertical-align: middle;
  }

  .icon-python { background-image: url('path-to-python-icon.png'); }
  .icon-3d-vision { background-image: url('path-to-3d-vision-icon.png'); }
  .icon-java { background-image: url('path-to-java-icon.png'); }
  .icon-javafx { background-image: url('path-to-javafx-icon.png'); }

</style>
