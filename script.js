function toggleMenu()   {
   const menu = document.querySelector(".menu-links");
   const icon = document.querySelector(".hamburger-icon");

   menu.classList.toggle("open");
   icon.classList.toggle("open");
}

function toggleDetails(button) {
    const detailsList = button.closest('.article-container').querySelector('.experience-list'); // Find the details list within the same article container
    console.log("Button clicked:", button);
    console.log("Details list:", detailsList);
    
    if (detailsList.style.display === "none" || detailsList.style.display === "") {
        detailsList.style.display = "block"; // Show details
        button.textContent = "Hide Details"; // Change button text
    } else {
        detailsList.style.display = "none"; // Hide details
        button.textContent = "Show Details"; // Change button text
    }
}