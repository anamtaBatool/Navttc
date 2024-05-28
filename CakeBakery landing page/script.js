// Get the button and hidden paragraph elements
const readMoreBtn = document.getElementById('readMoreBtn');
const hiddenParagraph = document.getElementById('hiddenParagraph');

// Add event listener to the button
readMoreBtn.addEventListener('click', function() {
    // Toggle the visibility of the hidden paragraph
    if (hiddenParagraph.style.display === 'none') {
        hiddenParagraph.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        hiddenParagraph.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
});

