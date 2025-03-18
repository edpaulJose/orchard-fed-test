document.addEventListener("DOMContentLoaded", () => {
    // Log anchor clicks (if needed)
    document.querySelectorAll("a.modal-trigger").forEach(anchor => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        console.log("Anchor clicked:", event.target?.alt || "No image"); // Log the alt text of the image
      });
    });
  
    // Modal functionality
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");
  
    document.querySelectorAll(".modal-trigger").forEach(anchor => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        const img = anchor.querySelector("img"); // Get the image inside the anchor
        modalImg.src = img.src; // Set the modal image source
        modalImg.alt = img.alt; // Set the modal image alt text
        modal.style.display = "flex"; // Show the modal
        modal.setAttribute("aria-hidden", "false"); // Make modal visible to screen readers
        closeModal.focus(); // Set focus to the close button for accessibility
      });
    });
  
    // Close modal when clicking the close button
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
    });
  
    // Close modal when clicking outside the modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
      }
    });
  
    // Close modal with the Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
      }
    });
  });