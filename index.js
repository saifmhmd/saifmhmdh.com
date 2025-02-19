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

const mobileAbout = document.getElementsByClassName("mobile-about");

mobileAbout.addEventListener("click", () => {
    window.location.href = links[2];
});