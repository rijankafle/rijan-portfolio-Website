/**
 * Toggle the mobile menu visibility
 */
function toggleMenu() {
  // Handle main menu links container
  const navLinksContainer = document.querySelector(".nav-links-container");
  if (navLinksContainer) {
    navLinksContainer.classList.toggle("open");
  }

  // Handle hamburger menu for compatibility with existing code
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu) menu.classList.toggle("open");
  if (icon) icon.classList.toggle("open");
}

/**
 * Toggle the visibility of experience details
 * @param {HTMLElement} button - The button element that was clicked
 */
function toggleDetails(button) {
  if (!button) return;

  const detailsList = button
    .closest(".article-container")
    .querySelector(".experience-list");
  if (!detailsList) return;

  // Toggle visibility
  const isVisible = detailsList.style.display === "block";
  detailsList.style.display = isVisible ? "none" : "block";
  button.textContent = isVisible ? "Show Details" : "Hide Details";
}

/**
 * Initialize the page when DOM content is loaded
 */
document.addEventListener("DOMContentLoaded", function () {
  // Set initial state for all detail lists
  const detailsLists = document.querySelectorAll(".experience-list");
  detailsLists.forEach((list) => {
    list.style.display = "none";
  });

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId !== "#") {
        e.preventDefault();
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });
});
