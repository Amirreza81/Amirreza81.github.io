---
layout: archive
title: "Contact"
permalink: /contact/
author_profile: true
---

<div class="main-card" onclick="toggleDropdown()">
  <h3>Let's Connect!</h3>
</div>

<div id="dropdown-menu" class="dropdown-menu">
  
  <!-- GitHub Link -->
  <div class="dropdown-item">
    <a href="https://github.com/Amirreza81" target="_blank">
      <img src="https://img.icons8.com/material-outlined/48/000000/github.png" alt="GitHub" class="icon">
      <span>GitHub</span>
    </a>
  </div>

  <!-- LinkedIn Link -->
  <div class="dropdown-item">
    <a href="https://www.linkedin.com/in/amirreza-azari-2b3a13229/" target="_blank">
      <img src="https://img.icons8.com/ios-glyphs/48/000000/linkedin.png" alt="LinkedIn" class="icon">
      <span>LinkedIn</span>
    </a>
  </div>

  <!-- Telegram Link -->
  <div class="dropdown-item">
    <a href="https://t.me/AmirReza_Azari" target="_blank">
      <img src="https://img.icons8.com/ios-filled/48/000000/telegram-app.png" alt="Telegram" class="icon">
      <span>Telegram</span>
    </a>
  </div>

  <!-- Instagram Link -->
  <div class="dropdown-item">
    <a href="https://instagram.com/amirrezaazari_" target="_blank">
      <img src="https://img.icons8.com/ios-filled/48/000000/instagram-new.png" alt="Instagram" class="icon">
      <span>Instagram</span>
    </a>
  </div>

  <!-- Music Channel Link -->
  <div class="dropdown-item">
    <a href="https://t.me/avayeamir" target="_blank">
      <img src="https://img.icons8.com/ios-glyphs/48/000000/music.png" alt="Music Channel" class="icon">
      <span>Music Channel</span>
    </a>
  </div>

</div>

<style>
  /* Main Card Style */
  .main-card {
    background-color: #4CAF50;
    color: white;
    padding: 20px 40px;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    margin: 100px auto 20px auto;
    width: fit-content;
  }
  .main-card:hover {
    transform: scale(1.05);
  }

  /* Dropdown Menu Style */
  .dropdown-menu {
    display: none; /* Hidden by default */
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
    text-align: center;
  }

  /* Dropdown Item Style */
  .dropdown-item {
    background-color: #f9f9f9;
    padding: 15px 20px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 4px 8px rgba(0, 150, 136, 0.3);
    transition: transform 0.3s ease, background-color 0.3s ease;
    width: fit-content;
  }

  .dropdown-item:hover {
    transform: translateY(-3px);
    background-color: #e8f5e9;
  }

  /* Icon Style */
  .icon {
    width: 36px;
    height: 36px;
    transition: transform 0.3s ease;
  }
  
  /* Icon Hover Effect */
  .icon:hover {
    transform: scale(1.1);
  }

  /* Link Style */
  .dropdown-item a {
    display: flex;
    align-items: center;
    color: #333;
    font-weight: bold;
    text-decoration: none;
  }
</style>

<script>
  /* Toggle Dropdown Function */
  function toggleDropdown() {
    var menu = document.getElementById("dropdown-menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }
</script>
