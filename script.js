// Function to load testimonies from localStorage
function loadTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  // Clear the list before loading to avoid duplicates
  postList.innerHTML = "";

  // Display each testimony from localStorage
  testimonies.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.classList.add("testimony-item");
    testimonyDiv.innerHTML = `<p>${testimony}</p>`;
    postList.appendChild(testimonyDiv);
  });
}

// Show the testimony form when the button is clicked
document.getElementById("testimonyButton").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "block";
});

// Close the testimony form when the close button is clicked
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("testimonyForm").style.display = "none";
});

// Function to submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  // Validate testimony character count
  if (testimonyInput.length < 500 || testimonyInput.length > 1000) {
    alert("Please enter a testimony with at least 500 to 1000 characters.");
    return;
  }

  // Get existing testimonies from localStorage, add new one, and save back to localStorage
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  // Reload the testimonies and clear the input field
  loadTestimonies();
  document.getElementById("testimonyInput").value = "";
  document.getElementById("testimonyForm").style.display = "none"; // Close the form
});

// Load testimonies on page load
window.addEventListener("load", loadTestimonies);
