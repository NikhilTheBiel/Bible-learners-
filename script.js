// Function to load testimonies from localStorage
// Load testimonies from localStorage
function loadTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Clear the list before loading to avoid duplicates
  postList.innerHTML = "";
  postList.innerHTML = ""; // Clear the list before loading

  // Display each testimony from localStorage
  testimonies.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.innerHTML = `<p>${testimony}</p>`;
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });
}

// Function to submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function() {
// Show the testimony form
document.getElementById("testimonyButton").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "block";
});
// Close the testimony form
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "none";
});
// Submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput === "") {
  if (!testimonyInput) {
    alert("Please enter your testimony.");
    return;
  }

  // Get existing testimonies from localStorage, add new one, and save back to localStorage
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  // Add the new testimony to the post list on the page
  const postList = document.getElementById("post-list");
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony-item");
  testimonyDiv.innerHTML = `<p>${testimonyInput}</p>`;
  postList.appendChild(testimonyDiv);
  // Clear the input field
  document.getElementById("testimonyInput").value = "";
  loadTestimonies();
  document.getElementById("testimonyInput").value = ""; // Clear input
  document.getElementById("testimonyForm").style.display = "none"; // Close modal
});

// Load testimonies on page load
