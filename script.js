// JavaScript to control the testimony modal
const testimonyButton = document.getElementById('testimonyButton');
const testimonyForm = document.getElementById('testimonyForm');
const closeModal = document.querySelector('.close');

testimonyButton.onclick = function() {
  testimonyForm.style.display = 'block';
};

closeModal.onclick = function() {
  testimonyForm.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target === testimonyForm) {
    testimonyForm.style.display = 'none';
  }
};

document.getElementById('submitTestimony').onclick = function() {
  const testimonyText = document.getElementById('testimonyInput').value;
  if (testimonyText) {
    alert('Your testimony has been submitted!');
    testimonyForm.style.display = 'none';
    document.getElementById('testimonyInput').value = '';
  } else {
    alert('Please enter your testimony before submitting.');
  }
};

