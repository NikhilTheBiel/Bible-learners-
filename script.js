// Get elements
const testimonyButton = document.getElementById('testimonyButton');
const testimonyForm = document.getElementById('testimonyForm');
const closeButton = document.getElementsByClassName('close')[0];
const submitButton = document.getElementById('submitTestimony');
const testimonyInput = document.getElementById('testimonyInput');
const testimonyList = document.getElementById('testimonyList');

// Load testimonies from local storage
function loadTestimonies() {
    const testimonies = JSON.parse(localStorage.getItem('testimonies')) || [];
    const groupedTestimonies = {};

    // Group testimonies by date
    testimonies.forEach(item => {
        const itemDate = new Date(item.timestamp);
        const dateString = itemDate.toLocaleDateString(); // Format date as "MM/DD/YYYY"

        if (!groupedTestimonies[dateString]) {
            groupedTestimonies[dateString] = [];
        }
        groupedTestimonies[dateString].push(item.text);
    });

    // Display grouped testimonies
    for (const date in groupedTestimonies) {
        const dateSection = document.createElement('div');
        dateSection.classList.add('date-section');

        const dateHeader = document.createElement('div');
        dateHeader.classList.add('date-header');
        dateHeader.textContent = date; // Display the date

        dateSection.appendChild(dateHeader);
        
        // Create a list for testimonies
        groupedTestimonies[date].forEach(testimony => {
            const testimonyItem = document.createElement('p');
            testimonyItem.textContent = testimony;
            dateSection.appendChild(testimonyItem);
        });

        testimonyList.appendChild(dateSection);
    }
}

// Show the modal when button is clicked
testimonyButton.onclick = function() {
    testimonyForm.style.display = 'block';
}

// Close the modal when the close button is clicked
closeButton.onclick = function() {
    testimonyForm.style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === testimonyForm) {
        testimonyForm.style.display = 'none';
    }
}

// Handle submission of the testimony
submitButton.onclick = function() {
    const testimony = testimonyInput.value.trim();
    if (testimony) {
        const currentDate = new Date();
        
        // Save testimony in local storage with a timestamp
        const testimonies = JSON.parse(localStorage.getItem('testimonies')) || [];
        testimonies.push({
            text: testimony,
            timestamp: currentDate.toISOString() // Store the date as ISO string
        });
        localStorage.setItem('testimonies', JSON.stringify(testimonies));

        testimonyInput.value = ''; // Clear the input field
        testimonyForm.style.display = 'none'; // Close the modal

        // Refresh the testimony list
        testimonyList.innerHTML = ''; // Clear the current list
        loadTestimonies(); // Load updated testimonies
    } else {
        alert('Please enter a testimony before submitting.');
    }
}

// Load testimonies when the page is loaded
window.onload = loadTestimonies;
