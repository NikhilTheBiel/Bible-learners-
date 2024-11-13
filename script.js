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

// Function to submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function() {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput === "") {
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
});

// Load testimonies on page load
window.addEventListener("load", loadTestimonies);
