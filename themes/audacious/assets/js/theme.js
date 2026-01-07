(function () {
  // Get saved theme preference or default to dark
  const savedTheme = localStorage.getItem('bs-theme') || 'dark';
  document.documentElement.setAttribute("data-bs-theme", savedTheme);

  function updateThemeIcon(theme) {
    const themeIcon = document.getElementById("theme-icon");
    if (themeIcon) {
      if (theme === "dark") {
        themeIcon.className = "fa-solid fa-moon";
      } else {
        themeIcon.className = "fa-solid fa-sun";
      }
    }
  }

  // Initialize theme switcher when DOM is ready
  function initThemeSwitcher() {
    const themeButton = document.getElementById("theme");

    if (!themeButton) {
      return; // Button not found, exit
    }

    // Update icon based on current theme
    const currentTheme = document.documentElement.getAttribute("data-bs-theme");
    updateThemeIcon(currentTheme);

    // Add click event listener
    themeButton.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-bs-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      document.documentElement.setAttribute("data-bs-theme", newTheme);
      localStorage.setItem('bs-theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThemeSwitcher);
  } else {
    initThemeSwitcher();
  }
})();
