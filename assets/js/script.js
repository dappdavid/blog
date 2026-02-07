document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  // Apply the saved theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Update the button icon based on the theme
  const updateIcon = (theme) => {
    toggleButton.innerHTML = theme === 'dark' ? '🌙' : '☀️';
  };

  updateIcon(currentTheme);

  toggleButton.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
  });
});
