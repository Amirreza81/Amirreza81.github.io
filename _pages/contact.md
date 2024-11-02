---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="contact-section">
  
  <!-- GitHub Card -->
  <div class="contact-card animated-card" style="--delay: 0;">
    <a href="https://github.com/Amirreza81" target="_blank">
      <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" class="icon">
    </a>
  </div>

  <!-- LinkedIn Card -->
  <div class="contact-card animated-card" style="--delay: 1;">
    <a href="https://www.linkedin.com/in/amirreza-azari-2b3a13229/" target="_blank">
      <img src="https://img.icons8.com/ios-glyphs/48/000000/linkedin.png" alt="LinkedIn" class="icon">
    </a>
  </div>

  <!-- Telegram Card -->
  <div class="contact-card animated-card" style="--delay: 2;">
    <a href="https://t.me/AmirReza_Azari" target="_blank">
      <img src="https://img.icons8.com/ios-filled/48/000000/telegram-app.png" alt="Telegram" class="icon">
    </a>
  </div>

  <!-- Instagram Card -->
  <div class="contact-card animated-card" style="--delay: 3;">
    <a href="https://instagram.com/amirrezaazari_" target="_blank">
      <img src="https://img.icons8.com/ios-filled/48/000000/instagram-new.png" alt="Instagram" class="icon">
    </a>
  </div>

  <!-- Music Channel Card -->
  <div class="contact-card animated-card" style="--delay: 4;">
    <a href="https://t.me/avayeamir" target="_blank">
      <img src="https://img.icons8.com/ios-glyphs/48/000000/music.png" alt="Music Channel" class="icon">
    </a>
  </div>

</div>

<style>
  /* Contact Section and Card Styles */
  .contact-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 20px;
    font-family: Arial, sans-serif;
  }

  .contact-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 150, 136, 0.3); /* سایه سبز اولیه */
    border-left: 4px solid #4CAF50;
    position: relative;
    opacity: 0;
    transform: translateY(20px) scale(0.9); /* موج ورود */
    animation: fadeInWave 0.6s ease-out forwards;
    animation-delay: calc(var(--delay) * 0.5s); /* تاخیر برای هر کارت */
    transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .contact-card:hover {
    transform: translateY(-5px) scale(1.03);
    background-color: #e8f5e9;
    box-shadow: 0 6px 12px rgba(0, 150, 136, 0.5); /* سایه سبز بیشتر در hover */
  }

  /* Icon Styles and Hover Effect */
  .icon {
    width: 48px;
    height: 48px;
    transition: transform 0.3s ease;
  }

  .icon:hover {
    transform: scale(1.2) rotate(15deg); /* چرخش و بزرگنمایی آیکون */
  }

  /* Fade-in Wave Animation */
  @keyframes fadeInWave {
    0% {
      transform: translateY(20px) scale(0.9);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
</style>
