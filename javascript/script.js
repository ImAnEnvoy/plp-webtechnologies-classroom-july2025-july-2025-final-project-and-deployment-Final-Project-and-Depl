// Simple JavaScript for mobile menu and copyright year
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
            
  hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navList.classList.toggle('active');
    this.setAttribute('aria-expanded', this.classList.contains('active'));
  });
            
  // Set copyright year
  document.getElementById('year').textContent = new Date().getFullYear();
});