const themeToggle = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

// Verifica si hay un tema guardado
if (localStorage.getItem('theme') === 'dark') {
  rootElement.classList.add('dark');
  themeToggle.textContent = '🌙';
} else {
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  rootElement.classList.toggle('dark');
  const isDark = rootElement.classList.contains('dark');
  themeToggle.textContent = isDark ? '🌙' : '☀️';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
