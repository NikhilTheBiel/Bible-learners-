// Function to show the testimony form
function showTestimonyForm() {
  const formModal = document.getElementById("testimonyForm");
  formModal.style.display = "block";
}

// Function to close the form
function closeForm() {
  const formModal = document.getElementById("testimonyForm");
  formModal.style.display = "none";
}

// Add event listener for the close button
document.querySelector(".close").addEventListener("click", closeForm);

// Function to submit testimony
document.getElementById("submitTestimony").addEventListener("click", function() {
  const testimonyInput = document.getElementById("testimonyInput").value;
  
  if (testimonyInput.trim() === "") {
    alert("Please enter your testimony.");
    return;
  }

  // Create a new testimony element
  const testimonyList = document.getElementById("testimonyList");
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony-item");
  testimonyDiv.innerHTML = `<p>${testimonyInput}</p>`;
  testimonyList.appendChild(testimonyDiv);

  // Clear input and hide the form
  document.getElementById("testimonyInput").value = "";
  closeForm();
});

// Event listener for the "Write Your Testimony" button
document.getElementById("testimonyButton").addEventListener("click", showTestimonyForm);

// Close modal if user clicks outside of it
window.addEventListener("click", function(event) {
  const formModal = document.getElementById("testimonyForm");
  if (event.target === formModal) {
    closeForm();
  }
});
