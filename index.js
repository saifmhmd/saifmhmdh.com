const links = [
    "projects.html",
    "blog.html",
    "about.html",
    "contact.html",
    "gallery.html"
];

const containers = document.querySelectorAll(".anchor-container");

containers.forEach((container, index) => {
    container.addEventListener("click", () => {
        window.location.href = links[index];
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileAboutContainer = document.getElementById("mobile-about-container");

    mobileAboutContainer.addEventListener("click", function() {
        window.location.href = "about.html"; // Change this to your target page
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const mobileContactContainer = document.getElementById("mobile-contact-container");

    mobileContactContainer.addEventListener("click", function() {
        window.location.href = "contact.html"; // Change this to your target page
    });
});

const redirectBtn = document.getElementById("redirect-btn");

redirectBtn.addEventListener("click", function() {
    window.location.href = "index.html";
});