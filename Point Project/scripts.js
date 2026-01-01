document.addEventListener('DOMContentLoaded', () => {
    // Get the button element
    const ctaButton = document.getElementById('ctaButton');

    // Add a click event listener
    ctaButton.addEventListener('click', () => {
        // A simple alert to confirm the action
        alert('Thank you for your interest! We will contact you shortly.');

        // Optionally, you could scroll the user to the contact section
        // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});