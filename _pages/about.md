---
permalink: /
title: "About me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## Hello, I'm AmirReza Azari

I'm currently a computer engineering student at **Sharif University of Technology** with a deep interest in **Computer Vision**, **Artificial Intelligence**, and **Machine Learning**. I'm also working as a **Research Assistant** at [IPL](http://ipl.ce.sharif.edu/) (Image Processing Lab), where I focus on **Efficient Image Super-Resolution using Deep Learning**.

<div class="about-section">
    <div class="column">
        <h2>Research Interests</h2>
        <ul>
          <li><img src="https://img.icons8.com/ios-filled/20/4CAF50/checkmark.png" alt="check"> Computer Vision</li>
          <li><img src="https://img.icons8.com/ios-filled/20/4CAF50/checkmark.png" alt="check"> Deep Learning</li>
          <li><img src="https://img.icons8.com/ios-filled/20/4CAF50/checkmark.png" alt="check"> Machine Learning</li>
          <li><img src="https://img.icons8.com/ios-filled/20/4CAF50/checkmark.png" alt="check"> Algorithms</li>
        </ul>
    </div>
    <div class="column">
        <h2>Education</h2>
        <ul>
            <li>
                <strong>Bachelor of Science in Computer Engineering</strong> <br>
                <span class="info">2020 – Present</span> <br>
                <span class="institution">Sharif University of Technology</span>
            </li>
            <li>
                <strong>Diploma of Mathematics and Physics</strong> <br>
                <span class="info">2017 – 2020</span> <br>
                <span class="institution">Allameh Helli School (NODET)</span>
            </li>
        </ul>
    </div>
</div>

<style>
  /* Main layout */
  .about-section {
    display: flex;
    gap: 20px;
    font-family: Arial, sans-serif;
  }
  .column {
    flex: 1;
  }

  /* Section titles */
  .about-section h2 {
    border-bottom: 2px solid #4CAF50;
    padding-bottom: 8px;
    font-size: 1.2em;
  }

  /* Lists and list items */
  .about-section ul {
    list-style-type: none;
    padding: 0;
  }
  .about-section li {
    display: flex;
    flex-direction: column; /* هر آیتم به صورت ستونی نمایش داده شود */
    margin-bottom: 12px;
    font-size: 1em;
    transition: background-color 0.3s ease, padding 0.3s ease;
  }
  .about-section li:hover {
    background-color: #f0f0f0;
    padding-left: 5px;
    border-radius: 5px;
  }

  /* Checkmark icons */
  .about-section img {
    margin-right: 8px;
    transition: transform 0.3s ease;
  }
  .about-section li:hover img {
    transform: scale(1.1);
  }

  /* Education info */
  .info, .institution {
    font-size: 0.9em;
  }
  .info {
    color: #888;
  }
  .institution {
    color: #666;
  }

  /* Typography */
  strong {
    font-weight: bold;
  }
</style>
