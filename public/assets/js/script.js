

// Create an intersection observer to detect when elements enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add the 'visible' class to trigger the animation
            observer.unobserve(entry.target); // Stop observing after the animation is triggered
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the element is in view

// Select all elements with the 'fade-in' class
const fadeElements = document.querySelectorAll('.fade-in');

// Observe each element
fadeElements.forEach(element => {
    observer.observe(element);
});




