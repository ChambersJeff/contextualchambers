// main.js

// Wait for the DOM (the content of the page) to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the main element
    var mainContent = document.querySelector('main');
    if (mainContent) {
        // Add the fade-in class to trigger the CSS opacity transition
        mainContent.classList.add('fade-in');
    }
    
    // This log message confirms that the JS is running
    console.log('Page fully loaded and fade-in animation triggered!');
});
