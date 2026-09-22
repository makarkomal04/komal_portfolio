const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close Nav when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });
}

// Navbar background change on scroll
const scrollNav = () => {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.boxShadow = "none";
        }
    });
}

// Add CSS for burger animation directly in JS or CSS
const style = document.createElement('style');
style.innerHTML = `
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle .line2 {
        opacity: 0;
    }
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
`;
document.head.appendChild(style);

navSlide();
scrollNav();

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
};
const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};
const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "reV5iYVbKqlwAvGW6"
    });
})();


// Contact Form
document.getElementById("contact-form").addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(
        "service_12gq91p",
        "template_co90x1d",
        this
    )
    .then(function () {

        alert("Message sent successfully!");

        document.getElementById("contact-form").reset();

    })
    .catch(function (error) {

        alert("Failed to send message. Please try again.");

        console.error("EmailJS Error:", error);

    });

});