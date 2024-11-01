---
layout: archive
title: "Projects"
permalink: /projects/
author_profile: true
redirect_from:
  - /resume
---

## Projects

<div class="projects-section">
  
  <div class="project-card">
    <h4>3D Tennis Complete Analysis</h4>
    <p><strong>Technologies:</strong> Python, 3D-Vision</p>
    <p>This project presents a comprehensive 3D analysis of tennis, utilizing advanced computer vision methodologies. It focuses on detecting players, tracking ball trajectories, establishing a 3D comprehension of the court, and classifying player poses.</p>
    <a href="https://github.com/Amirreza81/Tennis-3DVision-Project" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Task Management App</h4>
    <p><strong>Technologies:</strong> Java, JavaFX</p>
    <p>A client-server application developed with socket programming, allowing multi-threaded server functionality to handle multiple clients. Built with MVC architecture, it facilitates efficient task management.</p>
    <a href="https://github.com/Amirreza81/Task-Management-App" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>CMinus Compiler</h4>
    <p><strong>Technologies:</strong> Python</p>
    <p>Developed a compiler for the CMinus language, a simplified subset of the C language, including Lexer, Parser, Code Generator, and Semantic Analyzer components.</p>
    <a href="https://github.com/Amirreza81/CMinus-Compiler" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Computer Vision Project</h4>
    <p><strong>Technologies:</strong> Python</p>
    <p>Implemented a Convolutional Neural Network (CNN) and Neural Style Transfer, utilizing deep learning techniques in the field of computer vision.</p>
    <a href="https://github.com/Amirreza81/Machine-Learning" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Büchi Automaton</h4>
    <p>A theoretical project focusing on Büchi and Generalized Büchi automaton, exploring automata theory applications in computation.</p>
    <a href="https://github.com/Amirreza81/Buchi-automaton" class="btn">View on GitHub</a>
  </div>

  <div class="project-card">
    <h4>Correlated and Mixed Nash Equilibrium</h4>
    <p><strong>Technologies:</strong> Python</p>
    <p>This project implements algorithms for calculating Correlated and Mixed Nash Equilibria within the context of game theory.</p>
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
  .project-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
  }
  .project-card:hover {
    transform: translateY(-5px) scale(1.02);
    background-color: #e8f5e9;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  /* Titles */
  .project-card h4 {
    color: #4CAF50;
    margin-top: 0;
  }

  /* Paragraphs */
  .project-card p {
    color: #444;
    line-height: 1.6;
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
</style>
