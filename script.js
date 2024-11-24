let currentTestimonyIndex = 0; // Tracks the current index of testimonies being displayed
const testimoniesPerPage = 2; // Number of testimonies to display at a time

// Function to load testimonies from localStorage
function loadTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Clear the list before loading to avoid duplicates
  postList.innerHTML = "";

  // Display the first set of testimonies
  const testimoniesToShow = testimonies.slice(0, testimoniesPerPage);
  testimoniesToShow.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });

  currentTestimonyIndex = testimoniesPerPage; // Set index for the next load
  toggleShowMoreButton(testimonies.length); // Adjust button visibility
}

// Function to handle "Show More Testimonies" button click
function showMoreTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Get the next set of testimonies
  const testimoniesToShow = testimonies.slice(
    currentTestimonyIndex,
    currentTestimonyIndex + testimoniesPerPage
  );

  // Append new testimonies to the list
  testimoniesToShow.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });

  currentTestimonyIndex += testimoniesPerPage; // Update index
  toggleShowMoreButton(testimonies.length); // Adjust button visibility
}

// Toggle the visibility of the "Show More" button
function toggleShowMoreButton(totalTestimonies) {
  const showMoreButton = document.getElementById("showMoreButton");
  if (currentTestimonyIndex >= totalTestimonies) {
    showMoreButton.style.display = "none";
  } else {
    showMoreButton.style.display = "block";
  }
}

// Function to submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput.length < 500 || testimonyInput.length > 1000) {
    alert("Please enter a testimony with 500 to 1000 characters.");
    return;
  }

  // Get existing testimonies from localStorage, add new one, and save back to localStorage
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  // Clear the input field and reload testimonies
  document.getElementById("testimonyInput").value = "";
  loadTestimonies();
});

// Open testimony form modal
document.getElementById("testimonyButton").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "block";
});

// Close testimony form modal
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "none";
});

// Load testimonies on page load
window.addEventListener("load", loadTestimonies);

// Event listener for "Show More Testimonies" button
document.getElementById("showMoreButton").addEventListener("click", showMoreTestimonies);
