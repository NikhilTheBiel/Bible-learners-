import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Firebase Config (Replace with your Firebase project's config details)
const firebaseConfig = {
  apiKey: "AIzaSyCh-6zufkI1wn5hT9SdgyGINFjqv4PCPjs",
  authDomain: "my-website-isgood1.firebaseapp.com",
  projectId: "my-website-isgood1",
  storageBucket: "my-website-isgood1.firebasestorage.app",
  messagingSenderId: "710332167601",
  appId: "1:710332167601:web:f162b4f40653abaf60f990",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let currentTestimonyIndex = 0; // Tracks the current index of testimonies being displayed
const testimoniesPerPage = 2; // Number of testimonies to display at a time
// Function to load testimonies from localStorage
function loadTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Clear the list before loading to avoid duplicates
  postList.innerHTML = "";

  // Display each testimony from localStorage
  testimonies.forEach((testimony) => {
  // Display the first set of testimonies
  const testimoniesToShow = testimonies.slice(0, testimoniesPerPage);
  testimoniesToShow.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.innerHTML = `<p>${testimony}</p>`;
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });
  currentTestimonyIndex = testimoniesPerPage; // Set index for the next load
  toggleShowMoreButton(testimonies.length); // Adjust button visibility
}

// Show the testimony form when the button is clicked
document.getElementById("testimonyButton").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "block";
});
// Function to handle "Show More Testimonies" button click
function showMoreTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

// Close the testimony form when the close button is clicked
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "none";
});
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

  // Validate testimony character count
  if (testimonyInput.length < 500 || testimonyInput.length > 1000) {
    alert("Please enter a testimony with at least 500 to 1000 characters.");
    alert("Please enter a testimony with 500 to 1000 characters.");
    return;
  }

  // Get existing testimonies from localStorage, add new one, and save back to localStorage
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  // Reload the testimonies and clear the input field
  loadTestimonies();
  // Clear the input field and reload testimonies
  document.getElementById("testimonyInput").value = "";
  document.getElementById("testimonyForm").style.display = "none"; // Close the form
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
