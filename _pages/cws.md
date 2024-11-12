---
layout: archive
title: "Coursework"
permalink: /cws/
author_profile: true
---

## Coursework

<div class="coursework-section">
  
  <div class="course-card animated-card" style="--delay: 0;">
    <h4>Artificial Intelligence</h4>
    <p><strong>Instructor:</strong> Dr. Mohammad Hossein Rohban</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>
  
  <div class="course-card animated-card" style="--delay: 1;">
    <h4>Machine Learning</h4>
    <p><strong>Instructor:</strong> Dr. Fateme Seyed Salehi</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>
  
  <div class="course-card animated-card" style="--delay: 2;">
    <h4>Fundamental 3D Computer Vision</h4>
    <p><strong>Instructor:</strong> Prof. Shohreh Kasaei</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>
  
  <div class="course-card animated-card" style="--delay: 3;">
    <h4>Probability and Statistics for Engineering</h4>
    <p><strong>Instructor:</strong> Dr. Ali Sharifi Zarchi</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>
  
  <div class="course-card animated-card" style="--delay: 4;">
    <h4>Linear Algebra</h4>
    <p><strong>Instructor:</strong> Prof. Hamid Reza Rabiee</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 5;">
    <h4>Data Structure and Algorithms</h4>
    <p><strong>Instructor:</strong> Dr. Safarnejad</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 6;">
    <h4>Design of Algorithms</h4>
    <p><strong>Instructor:</strong> Dr. Hamid Zarrabi-Zadeh</p>
    <p><strong>Grade:</strong> 19.20/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 7;">
    <h4>Algorithmic Game Theory</h4>
    <p><strong>Instructor:</strong> Dr. Masoud Seddighin</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 8;">
    <h4>Theory of Formal Languages and Automata</h4>
    <p><strong>Instructor:</strong> Dr. Mahdi Dowlati</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 9;">
    <h4>Operating Systems</h4>
    <p><strong>Instructor:</strong> Dr. Mirzaei</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

  <div class="course-card animated-card" style="--delay: 10;">
    <h4>Compiler Design</h4>
    <p><strong>Instructor:</strong> Ms. HosseinMardi</p>
    <p><strong>Grade:</strong> 20.00/20.00</p>
  </div>

</div>

<style>
  /* Coursework Section with Animation */
  .coursework-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    font-family: Arial, sans-serif;
  }

  .course-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.5s ease-out forwards;
    animation-delay: calc(var(--delay) * 0.3s);
  }

  .course-card:hover {
    transform: translateY(-5px) scale(1.02);
    background-color: #e8f5e9;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
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
  
  /* Adjusted Font Sizes */
  .course-card h4 {
    color: #4CAF50;
    font-size: 1.1em;
  }

  .course-card p {
    color: #444;
    font-size: 0.85em;
    line-height: 1.6;
  }
</style>