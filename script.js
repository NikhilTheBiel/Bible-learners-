// Function to submit a new testimony
document.getElementById("submitTestimony").addEventListener("click", function () {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput.length < 500 || testimonyInput.length > 1000) {
    alert("Please enter a testimony with at least 500 to 1000 characters.");
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
