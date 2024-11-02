---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-section">
  
  <!-- GitHub Card -->
  <div class="contact-card animated-card" style="--delay: 0;">
    <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" class="icon">
    <h4>GitHub</h4>
    <a href="https://github.com/YourUsername" target="_blank" class="contact-link">@YourUsername</a>
  </div>

  <!-- LinkedIn Card -->
  <div class="contact-card animated-card" style="--delay: 1;">
    <img src="https://img.icons8.com/ios-glyphs/48/000000/linkedin.png" alt="LinkedIn" class="icon">
    <h4>LinkedIn</h4>
    <a href="https://www.linkedin.com/in/YourUsername" target="_blank" class="contact-link">YourUsername</a>
  </div>

  <!-- Telegram Card -->
  <div class="contact-card animated-card" style="--delay: 2;">
    <img src="https://img.icons8.com/ios-filled/48/000000/telegram-app.png" alt="Telegram" class="icon">
    <h4>Telegram</h4>
    <a href="https://t.me/YourUsername" target="_blank" class="contact-link">@YourUsername</a>
  </div>

  <!-- Instagram Card -->
  <div class="contact-card animated-card" style="--delay: 3;">
    <img src="https://img.icons8.com/ios-filled/48/000000/instagram-new.png" alt="Instagram" class="icon">
    <h4>Instagram</h4>
    <a href="https://instagram.com/YourUsername" target="_blank" class="contact-link">@YourUsername</a>
  </div>

  <!-- Music Channel Card -->
  <div class="contact-card animated-card" style="--delay: 4;">
    <img src="https://img.icons8.com/ios-glyphs/48/000000/music.png" alt="My Music Channel" class="icon">
    <h4>Music Channel</h4>
    <a href="https://t.me/YourMusicChannel" target="_blank" class="contact-link">@YourMusicChannel</a>
  </div>

</div>

<style>
  /* Contact Section and Card Styles */
  .contact-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    font-family: Arial, sans-serif;
  }

  .contact-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-left: 4px solid #4CAF50;
    position: relative;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: calc(var(--delay) * 0.5s); /* تاخیر برای هر کارت */
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contact-card:hover {
    transform: translateY(-5px) scale(1.03);
    background-color: #e8f5e9;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  .contact-card h4 {
    color: #4CAF50;
    margin-top: 10px;
    margin-bottom: 5px;
    font-size: 1.1em;
  }

  .contact-link {
    color: #333;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .contact-link:hover {
    color: #4CAF50;
  }

  /* Icon Styles and Hover Effect */
  .icon {
    width: 36px;
    height: 36px;
    margin-bottom: 10px;
    transition: transform 0.3s ease;
  }

  .icon:hover {
    transform: scale(1.2) rotate(15deg); /* چرخش و بزرگنمایی آیکون */
  }

  /* Fade-in Animation */
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
</style>
