document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('themeToggle');
  const progressBar = document.getElementById('progressBar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    if (progressBar) progressBar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('load', updateProgress);

  menuToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => navLinks?.classList.remove('active'));
  });

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '☀️';
  }

  themeToggle?.addEventListener('click', () => {
    const nextTheme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    themeToggle.textContent = nextTheme === 'light' ? '☀️' : '🌙';
  });
});
