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

// Tracks current testimonies being displayed
let currentTestimonyIndex = 0;
const testimoniesPerPage = 2;

// Function to load testimonies from Firestore
async function loadTestimonies() {
  const testimonies = await fetchTestimonies();
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

  currentTestimonyIndex = testimoniesPerPage;
  toggleShowMoreButton(testimonies.length);
}

// Fetch testimonies from Firestore
async function fetchTestimonies() {
  const testimonies = [];
  const snapshot = await db.collection("testimonies").get();
  snapshot.forEach((doc) => testimonies.push(doc.data().text));
  return testimonies;
}

// Submit a new testimony to Firestore
document.getElementById("submitTestimony").addEventListener("click", async function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput.length < 500 || testimonyInput.length > 1000) {
    alert("Please enter a testimony with 500 to 1000 characters.");
    return;
  }

  // Add testimony to Firestore
  await db.collection("testimonies").add({ text: testimonyInput });

  // Clear the input field and reload testimonies
  document.getElementById("testimonyInput").value = "";
  loadTestimonies();
});

// Show more testimonies
async function showMoreTestimonies() {
  const testimonies = await fetchTestimonies();
  const postList = document.getElementById("post-list");

  const testimoniesToShow = testimonies.slice(
    currentTestimonyIndex,
    currentTestimonyIndex + testimoniesPerPage
  );

  testimoniesToShow.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });

  currentTestimonyIndex += testimoniesPerPage;
  toggleShowMoreButton(testimonies.length);
}

// Toggle the "Show More" button
function toggleShowMoreButton(totalTestimonies) {
  const showMoreButton = document.getElementById("showMoreButton");
  if (currentTestimonyIndex >= totalTestimonies) {
    showMoreButton.style.display = "none";
  } else {
    showMoreButton.style.display = "block";
  }
}

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
