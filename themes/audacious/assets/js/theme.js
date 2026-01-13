(function () {
  // Get saved theme preference or default to dark
  const savedTheme = localStorage.getItem('bs-theme') || 'dark';
  document.documentElement.setAttribute("data-bs-theme", savedTheme);

  function updateThemeIcon(theme) {
    const moonIcon = document.getElementById("theme-icon-moon");
    const sunIcon = document.getElementById("theme-icon-sun");
    if (moonIcon && sunIcon) {
      if (theme === "dark") {
        moonIcon.style.display = "";
        sunIcon.style.display = "none";
      } else {
        moonIcon.style.display = "none";
        sunIcon.style.display = "";
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

  // Initialize sidebar toggle for mobile
  function initSidebarToggle() {
    const sidebarToggle = document.getElementById("sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");

    if (!sidebarToggle || !sidebar) {
      return; // Elements not found, exit
    }

    // Add click event listener
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      sidebar.classList.toggle("open");
    });

    // Close sidebar when clicking outside (mobile only)
    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768 && sidebar.classList.contains("open")) {
        const isClickInsideSidebar = sidebar.contains(e.target);
        const isClickOnToggle = sidebarToggle.contains(e.target);

        // Close if clicking outside sidebar and toggle button
        if (!isClickInsideSidebar && !isClickOnToggle) {
          sidebar.classList.remove("open");
        }
      }
    });

    // Close sidebar when window is resized to desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
      }
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initThemeSwitcher();
      initSidebarToggle();
    });
  } else {
    initThemeSwitcher();
    initSidebarToggle();
  }
})();
