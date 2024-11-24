// Function to load testimonies from localStorage
function loadTestimonies() {
  // Retrieve testimonies from localStorage, or initialize as an empty array if none exist
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Clear existing list in case of refresh
  postList.innerHTML = "";

  // Render each testimony
  testimonies.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.textContent = testimony; // Display the testimony text
    postList.appendChild(testimonyDiv);
  });
}

// Function to add a new testimony
document.getElementById("submitTestimony").addEventListener("click", function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  // Check for empty input
  if (!testimonyInput) {
    alert("Please enter your testimony.");
    return;
  }

  // Retrieve current testimonies, add the new one, and save back to localStorage
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  // Refresh the testimony list and clear the input
  loadTestimonies();
  document.getElementById("testimonyInput").value = "";

  // Hide the modal after submission
  document.getElementById("testimonyForm").style.display = "none";
});

// Show the testimony form modal
document.getElementById("testimonyButton").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "block";
});

// Close the testimony form modal
document.querySelector(".close").addEventListener("click
