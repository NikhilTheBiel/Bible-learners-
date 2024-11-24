// Load testimonies from localStorage
function loadTestimonies() {
  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  const postList = document.getElementById("post-list");

  postList.innerHTML = ""; // Clear the list before loading

  testimonies.forEach((testimony) => {
    const testimonyDiv = document.createElement("div");
    testimonyDiv.textContent = testimony;
    postList.appendChild(testimonyDiv);
  });
}

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

  if (!testimonyInput) {
    alert("Please enter your testimony.");
    return;
  }

  const testimonies = JSON.parse(localStorage.getItem("testimonies")) || [];
  testimonies.push(testimonyInput);
  localStorage.setItem("testimonies", JSON.stringify(testimonies));

  loadTestimonies();
  document.getElementById("testimonyInput").value = ""; // Clear input
  document.getElementById("testimonyForm").style.display = "none"; // Close modal
});

// Load testimonies on page load
window.addEventListener("load", loadTestimonies);
