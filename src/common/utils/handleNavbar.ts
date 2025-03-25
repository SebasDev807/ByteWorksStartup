let isMenuOpen = false;

const handleOpenNavbar = () => {
  isMenuOpen = !isMenuOpen;
  updateMenu();
};

const handleResize = () => {
  if (window.innerWidth > 768) {
    isMenuOpen = false;
    updateMenu();
  }
};

const updateMenu = () => {
  const menu = document.getElementById("menu");
  if (menu) {
    menu.style.display = isMenuOpen ? "block" : "none";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("menu-toggle")?.addEventListener("click", handleOpenNavbar);
  window.addEventListener("resize", handleResize);
});
