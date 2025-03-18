// Simulated dynamic content (for testing)
const COMPONENT_ONE_MOCKDATA = {
  title: "What Does Cooking Mean?",
  paragraph: "Is it simply applying heat to a food product? A way of making certain food safe to eat? Or a way to create flavour and make food more appealing? This is just part of what Hervé This, the father of molecular gastronomy, has dedicated his life to finding out.",
  subheading: "The Perfect Egg",
  boldText: "Keep water between 67 and 68°C for a flavourful, tender yolk.",
  images: [
    {
      src: "/images/boiling-food.jpg",
      alt: "Boiling food",
      link: "#"
    },
    {
      src: "/images/scientist-cooking.jpg",
      alt: "Scientist experimenting with food",
      link: "#"
    },
    {
      src: "/images/perfect-eggs.jpg",
      alt: "Perfectly cooked eggs",
      link: "#"
    }
  ]
};

const COMPONENT_TWO_MOCKDATA = {
  title: "Taste the Colours", // Dynamic title
  colors: [
    {
      src: "images/red.png",
      alt: "Red Color",
      title: "Red",
      description: "Red foods remind us of berries and soft fruits, so we anticipate a sweet taste."
    },
    {
      src: "images/green.png",
      alt: "Green Color",
      title: "Green",
      description: "Fresh, zingy green colours are reminiscent of unripe fruit, promising sour or acid flavours."
    },
    {
      src: "images/white.png",
      alt: "White Color",
      title: "White",
      description: "White foods evoke memories of salt and salty flavours, driving the expectation of a savoury treat."
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  // Load dynamic content and then set up modal functionality
  window.onload = function() {
    loadData(COMPONENT_ONE_MOCKDATA, COMPONENT_TWO_MOCKDATA); // Load content data
    setUpModalFunctionality(); // Set up modal behavior after content is loaded
  };

  // Function to set up modal functionality
  function setUpModalFunctionality() {
    // Log anchor clicks for modal triggers
    document.querySelectorAll("a.modal-trigger").forEach(anchor => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
        console.log("Anchor clicked:", event.target?.alt || "No image"); // Log clicked image alt text
      });
    });

    // Modal elements
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const closeModal = document.querySelector(".close");

    // Ensure modal elements exist before setting up event listeners
    if (!modal || !modalImg || !closeModal) {
      console.log("Error: Modal elements not found.");
      return;
    }

    // Show modal with image source when clicked
    document.querySelectorAll(".modal-trigger").forEach(anchor => {
      anchor.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default behavior
        const img = anchor.querySelector("img"); // Get image inside anchor
        if (img) {
          modalImg.src = img.src; // Set modal image source
          modalImg.alt = img.alt; // Set modal image alt text
          modal.style.display = "flex"; // Show the modal
          modal.setAttribute("aria-hidden", "false"); // Make modal visible to screen readers
          closeModal.focus(); // Focus on close button for accessibility
          console.log("Modal displayed with image:", img.src);
        }
      });
    });

    // Close modal when close button is clicked
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
    });

    // Close modal when clicking outside modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
      }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
      }
    });
  }
});

// Function to load data dynamically into components
function loadData(component1Data, component2Data) {
  // Populate image grid dynamically
  const imageGrid = document.getElementById('image-grid');
  // Get only top 3 images
  component1Data.images?.slice(0, 3).forEach((image) => {
    const imageElement = document.createElement('a');
    imageElement.href = image.link;
    imageElement.classList.add('modal-trigger');
    imageElement.innerHTML = `<img src="${image.src}" alt="${image.alt}" class="hover-effect"/>`;
    imageGrid.appendChild(imageElement);
  });

  // Populate text content dynamically
  const textContent = document.getElementById('text-content');
  textContent.innerHTML = `
    <h2>${component1Data.title}</h2>
    <p>${component1Data.paragraph}</p>
    <h3 class="highlight">${component1Data.subheading}</h3>
    <p class="bold-text">${component1Data.boldText}</p>
  `;
  
  // Populate dynamic title for "Taste the Colours"
  const colorTitle = document.querySelector('.component-two-container h2');
  colorTitle.innerHTML = component2Data.title; // Set dynamic title for Taste the Colours

  // Populate color blocks dynamically
  const colorContainer = document.querySelector('.colors');
  component2Data.colors.forEach(color => {
    const colorBlock = document.createElement('div');
    colorBlock.classList.add('color-block');
    colorBlock.innerHTML = `
      <a href="#" class="modal-trigger">
        <img src="${color.src}" alt="${color.alt}">
        <h4>${color.title}</h4>
        <p>${color.description}</p>
      </a>
    `;
    colorContainer.appendChild(colorBlock);
  });
}
