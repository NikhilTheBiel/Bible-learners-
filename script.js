// Function to show the testimony form (optional if form is permanently visible)
// If you don't need this function anymore, you can omit it.
function showPostForm() {
  const testimonyForm = document.getElementById("testimonyForm");
  testimonyForm.style.display = "block";
}

// Function to submit testimony
document.getElementById("submitTestimony").addEventListener("click", function() {
  const testimonyInput = document.getElementById("testimonyInput").value.trim();

  if (testimonyInput === "") {
    alert("Please enter your testimony.");
    return;
  }

  // Create a new testimony element
  const postList = document.getElementById("post-list");
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony-item");
  testimonyDiv.innerHTML = `<p>${testimonyInput}</p>`;
  postList.appendChild(testimonyDiv);

  // Clear the input field
  document.getElementById("testimonyInput").value = "";
});
