const links = [
    "projects.html",
    "blog.html",
    "about.html",
    "gallery.html"
];

const containers = document.querySelectorAll(".anchor-container");

containers.forEach((container, index) => {
    container.addEventListener("click", () => {
        window.location.href = links[index];
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("mobile-about");

    container.addEventListener("click", function() {
        window.location.href = "about.html"; // Change this to your target page
    });
});