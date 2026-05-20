const websiteName = "Stay Easy";

console.log(websiteName);

function greetUser() {
    console.log("Welcome to Stay Easy");
}

greetUser();

const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    document.getElementById("stays").scrollIntoView({
        behavior: "smooth"
    });
});

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("show-nav");

    if (mainNav.classList.contains("show-nav")) {
        navToggle.textContent = "✕";
    } else {
        navToggle.textContent = "☰";
    }
});

const navLinks = document.querySelectorAll("nav a");
const navSections = Array.from(navLinks).map(function (link) {
    return document.querySelector(link.getAttribute("href"));
});

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("show-nav");
        navToggle.textContent = "☰";
        setActiveNavLink(link.getAttribute("href"));
    });
});

function setActiveNavLink(activeHref) {
    navLinks.forEach(function (link) {
        if (link.getAttribute("href") === activeHref) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}

function updateActiveNavOnScroll() {
    let activeHref = "";
    const markerPosition = document.querySelector("header").offsetHeight + 80;

    navSections.forEach(function (section, index) {
        if (!section) {
            return;
        }

        const sectionBox = section.getBoundingClientRect();

        if (sectionBox.top <= markerPosition && sectionBox.bottom > markerPosition) {
            activeHref = navLinks[index].getAttribute("href");
        }
    });

    if (activeHref) {
        setActiveNavLink(activeHref);
    }
}

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
});

const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function () {
    alert("Booking request prepared successfully.");
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    revealElements.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", function () {
    revealOnScroll();
    updateActiveNavOnScroll();
});

revealOnScroll();
updateActiveNavOnScroll();
