/*=========================================
  RACLE SCHOOL SS1 WEBSITE
  Created by TNF TECH © 2026
=========================================*/

// =============================
// LOADING SCREEN
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.transition = "0.8s";

        }, 1200);

    }

});

// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

if(navLinks.classList.contains("active")){

menuBtn.innerHTML='<i class="fas fa-times"></i>';

}else{

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

}

// Close menu when a link is clicked

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

if(navLinks){

navLinks.classList.remove("active");

}

if(menuBtn){

menuBtn.innerHTML='<i class="fas fa-bars"></i>';

}

});

});

// =============================
// DARK / LIGHT MODE
// =============================

const themeBtn=document.getElementById("theme-btn");

const body=document.body;

const savedTheme=localStorage.getItem("theme");

if(savedTheme==="light"){

enableLight();

}

if(themeBtn){

themeBtn.addEventListener("click",()=>{

if(body.classList.contains("light-mode")){

enableDark();

}else{

enableLight();

}

});

}

function enableLight(){

body.classList.add("light-mode");

localStorage.setItem("theme","light");

if(themeBtn){

themeBtn.innerHTML='<i class="fas fa-sun"></i>';

}

}

function enableDark(){

body.classList.remove("light-mode");

localStorage.setItem("theme","dark");

if(themeBtn){

themeBtn.innerHTML='<i class="fas fa-moon"></i>';

}

}

// =============================
// SMOOTH SCROLL
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// =============================
// HERO FADE ANIMATION
// =============================

const hero=document.querySelector(".hero");

if(hero){

hero.animate(

[

{

opacity:0,

transform:"translateY(60px)"

},

{

opacity:1,

transform:"translateY(0)"

}

],

{

duration:1200,

fill:"forwards"

}

);

}

// =============================
// FLOATING MOUSE GLOW
// =============================

const glow=document.createElement("div");

glow.id="mouseGlow";

document.body.appendChild(glow);

glow.style.position="fixed";
glow.style.width="25px";
glow.style.height="25px";
glow.style.background="#0d6efd";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.filter="blur(18px)";
glow.style.opacity=".45";
glow.style.zIndex="9999";

document.addEventListener("mousemove",(e)=>{

glow.style.left=(e.clientX-12)+"px";

glow.style.top=(e.clientY-12)+"px";

});

// =============================
// BUTTON HOVER EFFECT
// =============================

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px) scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});

console.log("Racle School SS1 Website Loaded Successfully.");
/*=========================================
        SCRIPT PART 2
        RACLE SCHOOL SS1
=========================================*/

// ==============================
// LIVE SEARCH
// ==============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const value = this.value.toLowerCase();

        const cards = document.querySelectorAll(".student-card");

        cards.forEach(card => {

            const name = card.querySelector("h2").textContent.toLowerCase();

            if (name.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// ==============================
// BACK TO TOP
// ==============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==============================
// SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(

".student-card,.preview-card,.stat-card,.info-box,.teacher-info,.gallery-grid img"

);

function reveal() {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if (top < visible) {

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// ==============================
// COUNTER ANIMATION
// ==============================

const counters = document.querySelectorAll(".stat-card h1");

counters.forEach(counter => {

    const target = counter.innerText;

    if (isNaN(target)) return;

    let count = 0;

    const update = () => {

        count++;

        counter.innerText = count;

        if (count < Number(target)) {

            requestAnimationFrame(update);

        }

    };

    update();

});

// ==============================
// IMAGE LIGHTBOX
// ==============================

const images = document.querySelectorAll(".gallery-grid img");

if (images.length > 0) {

    const lightbox = document.createElement("div");

    lightbox.id = "lightbox";

    lightbox.innerHTML = "<img>";

    document.body.appendChild(lightbox);

    const img = lightbox.querySelector("img");

    lightbox.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,.9);
        display:none;
        justify-content:center;
        align-items:center;
        z-index:99999;
        cursor:pointer;
        padding:20px;
    `;

    img.style.cssText = `
        max-width:90%;
        max-height:90%;
        border-radius:15px;
    `;

    images.forEach(image => {

        image.addEventListener("click", () => {

            lightbox.style.display = "flex";

            img.src = image.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// ==============================
// ACTIVE NAVIGATION
// ==============================

const current = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    if (link.getAttribute("href") === current) {

        link.classList.add("active");

    }

});

// ==============================
// TYPEWRITER EFFECT
// ==============================

const title = document.querySelector(".hero h2");

if (title) {

    const text = title.textContent;

    title.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            title.textContent += text.charAt(i);

            i++;

            setTimeout(type, 70);

        }

    }

    type();

}

// ==============================
// CARD CLICK EFFECT
// ==============================

document.querySelectorAll(".student-card,.preview-card").forEach(card => {

    card.addEventListener("click", () => {

        card.animate(

            [

                { transform: "scale(.95)" },

                { transform: "scale(1.05)" },

                { transform: "scale(1)" }

            ],

            {

                duration: 300

            }

        );

    });

});

// ==============================
// CURRENT YEAR
// ==============================

document.querySelectorAll(".year").forEach(year => {

    year.textContent = new Date().getFullYear();

});

console.log("TNF TECH © 2026 - Script Loaded Successfully");
