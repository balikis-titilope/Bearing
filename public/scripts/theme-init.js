/**
 * Initialize theme 
 */
(function() {
  try {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const theme = savedTheme || systemTheme;
    document.documentElement.setAttribute('data-theme', theme);
    
    // Only set smooth scrolling - don't interfere with page position
    document.documentElement.style.scrollBehavior = 'smooth';
  } catch (e) {
    // Ignore errors
  }
})();