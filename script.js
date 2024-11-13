// Function to show the testimony form modal
function showTestimonyForm() {
  const formModal = document.getElementById("testimonyForm");
  formModal.style.display = "block";
}

// Function to close the form modal
function closeForm() {
  const formModal = document.getElementById("testimonyForm");
  formModal.style.display = "none";
}

// Event listener to open the form when clicking "Write Your Testimony" button
document.getElementById("testimonyButton").addEventListener("click", showTestimonyForm);

// Event listener to close the form when clicking the close button
document.querySelector(".close").addEventListener("click", closeForm);

// Function to submit the testimony
document.getElementById("submitTestimony").addEventListener("click", function() {
  const testimonyInput = document.getElementById("testimonyInput").value;

  // Validate input
  if (testimonyInput.trim() === "") {
    alert("Please enter your testimony.");
    return;
  }

  // Add the new testimony to the list
  const testimonyList = document.getElementById("testimonyList");
  const testimonyDiv = document.createElement("div");
  testimonyDiv.classList.add("testimony-item");
  testimonyDiv.innerHTML = `<p>${testimonyInput}</p>`;
  testimonyList.appendChild(testimonyDiv);

  // Clear input and hide the form
  document.getElementById("testimonyInput").value = "";
  closeForm();
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function(event) {
  const formModal = document.getElementById("testimonyForm");
  if (event.target === formModal) {
    closeForm();
  }
});
