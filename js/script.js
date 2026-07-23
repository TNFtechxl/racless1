/*=========================================
    RACLE SCHOOL SS1 WEBSITE
    Created By TNF TECH © 2026
=========================================*/

// ============================
// LOADER
// ============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {

                loader.style.display = "none";

            }, 500);

        }, 1000);

    }

});

// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navLinks.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");

        } else {

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

}

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");

        }

    });

});

// ============================
// DARK / LIGHT MODE
// ============================

const themeBtn = document.getElementById("theme-btn");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light-mode");

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

        } else {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

        }

    });

}

// ============================
// ACTIVE NAVIGATION
// ============================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    }

});

console.log("Racle School SS1 Website Loaded Successfully!");
// ============================
// SCROLL ANIMATION
// ============================

const revealElements = document.querySelectorAll(
    ".section, .card, .teacher-card, .gallery-item, .about-box"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop = element.getBoundingClientRect().top;

        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// ============================
// BACK TO TOP BUTTON
// ============================

const topBtn = document.getElementById("back-to-top");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");

        }

    });


    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


// ============================
// IMAGE GALLERY POPUP
// ============================

const galleryImages = document.querySelectorAll(".gallery img");

const imageViewer = document.getElementById("image-viewer");

const viewerImage = document.getElementById("viewer-img");

const closeViewer = document.querySelector(".close-viewer");


if (galleryImages.length > 0 && imageViewer) {


    galleryImages.forEach(image => {


        image.addEventListener("click", () => {


            imageViewer.style.display = "flex";

            viewerImage.src = image.src;


        });


    });


}


if (closeViewer) {


    closeViewer.addEventListener("click", () => {


        imageViewer.style.display = "none";


    });


}


if (imageViewer) {


    imageViewer.addEventListener("click", (e) => {


        if (e.target === imageViewer) {


            imageViewer.style.display = "none";


        }


    });


}


// ============================
// TYPING EFFECT
// ============================

const typingText = document.querySelector(".typing");


if (typingText) {


    const words = [

        "Welcome To Racle School",

        "Quality Education",

        "Building Future Leaders",

        "SS1 Class Portal"

    ];


    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;



    function typeEffect() {


        const currentWord = words[wordIndex];


        if (!deleting) {


            typingText.textContent =
            currentWord.substring(0, charIndex++);



            if (charIndex > currentWord.length) {


                deleting = true;


                setTimeout(typeEffect, 1500);

                return;


            }


        } else {


            typingText.textContent =
            currentWord.substring(0, charIndex--);



            if (charIndex < 0) {


                deleting = false;

                wordIndex++;


                if (wordIndex >= words.length) {

                    wordIndex = 0;

                }


            }


        }


        setTimeout(typeEffect, deleting ? 60 : 120);


    }


    typeEffect();


}


// ============================
// CURRENT YEAR FOOTER
// ============================

const year = document.getElementById("year");


if (year) {

    year.textContent = new Date().getFullYear();

}


// ============================
// CONTACT FORM MESSAGE
// ============================

const contactForm = document.querySelector("#contact-form");


if (contactForm) {


    contactForm.addEventListener("submit", (e) => {


        e.preventDefault();


        alert(
            "Thank you for contacting Racle School. We will get back to you soon!"
        );


        contactForm.reset();


    });


}


// ============================
// PAGE LOAD MESSAGE
// ============================

setTimeout(() => {


    console.log(
        "%c RACLE SCHOOL SS1 WEBSITE READY 🚀",
        "color:blue;font-size:18px;font-weight:bold;"
    );


}, 2000);
// ============================
// STUDENT COUNTER ANIMATION
// ============================

const counters = document.querySelectorAll(".counter");


counters.forEach(counter => {


    counter.innerText = "0";


    const updateCounter = () => {


        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;


        const increment = target / 100;



        if (count < target) {


            counter.innerText = Math.ceil(count + increment);


            setTimeout(updateCounter, 20);


        } else {


            counter.innerText = target;


        }


    };


    const counterObserver = new IntersectionObserver(entries => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                updateCounter();

                counterObserver.disconnect();


            }


        });


    });


    counterObserver.observe(counter);


});


// ============================
// ANNOUNCEMENT SLIDER
// ============================

const announcements = document.querySelectorAll(".announcement");


let announcementIndex = 0;


function showAnnouncement() {


    announcements.forEach(item => {


        item.classList.remove("active");


    });



    if (announcements.length > 0) {


        announcements[announcementIndex].classList.add("active");


        announcementIndex++;



        if (announcementIndex >= announcements.length) {


            announcementIndex = 0;


        }


    }


}


if (announcements.length > 0) {


    showAnnouncement();


    setInterval(showAnnouncement, 4000);


}


// ============================
// AUTO IMAGE SLIDESHOW
// ============================

const slides = document.querySelectorAll(".slide");


let slideIndex = 0;


function changeSlides() {


    slides.forEach(slide => {


        slide.classList.remove("active");


    });



    if (slides.length > 0) {


        slides[slideIndex].classList.add("active");


        slideIndex++;



        if (slideIndex >= slides.length) {


            slideIndex = 0;


        }


    }


}



if (slides.length > 0) {


    changeSlides();


    setInterval(changeSlides, 5000);


}


// ============================
// EXAM COUNTDOWN
// ============================

const countdown = document.getElementById("exam-countdown");


const examDate = new Date("December 1, 2026 08:00:00").getTime();



function examTimer() {


    if (!countdown) return;



    const now = new Date().getTime();


    const distance = examDate - now;



    if (distance < 0) {


        countdown.innerHTML =
        "EXAMINATION HAS STARTED";


        return;


    }



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );



    countdown.innerHTML = `

        <span>${days} Days</span>

        <span>${hours} Hours</span>

        <span>${minutes} Minutes</span>

        <span>${seconds} Seconds</span>

    `;


}


setInterval(examTimer, 1000);

examTimer();


// ============================
// SMOOTH PAGE TRANSITION
// ============================

document.querySelectorAll("a").forEach(link => {


    const href = link.getAttribute("href");


    if (
        href &&
        href.endsWith(".html") &&
        !href.startsWith("#")
    ) {


        link.addEventListener("click", function(e) {


            e.preventDefault();


            document.body.classList.add("page-exit");


            setTimeout(() => {


                window.location.href = href;


            }, 400);


        });


    }


});


// ============================
// RIGHT CLICK PROTECTION
// ============================

document.addEventListener("contextmenu", function(e) {


    e.preventDefault();


});


// ============================
// KEYBOARD SHORTCUT PROTECTION
// ============================

document.addEventListener("keydown", function(e) {


    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
    ) {


        e.preventDefault();


    }


});


// ============================
// WEBSITE STATUS
// ============================

window.addEventListener("online", () => {


    console.log("Internet connection restored");


});


window.addEventListener("offline", () => {


    console.log("You are currently offline");


});


console.log("Script.js Part 3 Loaded Successfully 🚀");
