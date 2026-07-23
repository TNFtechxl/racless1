// =====================================
// RACLE SCHOOL SS1 WEBSITE
// Created by TNF TECH © 2026
// =====================================

// ----------------------
// Loading Screen
// ----------------------

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "1s";
    }, 1500);
});

// ----------------------
// Student Search
// ----------------------

const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            let name = card.querySelector("h3").textContent.toLowerCase();

            if (name.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ----------------------
// Dark / Light Mode
// ----------------------

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.addEventListener("click", () => {

    if (dark) {

        document.body.style.background = "#f5f5f5";
        document.body.style.color = "#111";

        document.querySelectorAll(".card").forEach(card => {
            card.style.background = "#ffffff";
            card.style.color = "#111";
        });

        document.querySelector(".teacher-card").style.background="#ffffff";
        document.querySelector(".teacher-card").style.color="#111";

        themeBtn.innerHTML="☀";

        dark=false;

    } else {

        location.reload();

    }

});

// ----------------------
// Back To Top
// ----------------------

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ----------------------
// Scroll Reveal
// ----------------------

const reveal = () => {

    const elements = document.querySelectorAll(".card,.teacher-card,.gallery img");

    elements.forEach(el=>{

        const top = el.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){

            el.style.opacity="1";

            el.style.transform="translateY(0)";

        }

    });

};

window.addEventListener("scroll",reveal);

reveal();

// ----------------------
// Welcome Message
// ----------------------

setTimeout(()=>{

console.log("Welcome to Racle School SS1 Website");

},2000);

// ----------------------
// Current Year
// ----------------------

const year = new Date().getFullYear();

console.log("© "+year+" TNF TECH");

// ----------------------
// Hero Animation
// ----------------------

const hero=document.querySelector(".hero-content");

hero.animate([

{opacity:0,transform:"translateY(80px)"},

{opacity:1,transform:"translateY(0)"}

],{

duration:1500

});

// ----------------------
// Floating Glow Effect
// ----------------------

document.addEventListener("mousemove",(e)=>{

let glow=document.getElementById("glow");

if(!glow){

glow=document.createElement("div");

glow.id="glow";

document.body.appendChild(glow);

glow.style.position="fixed";

glow.style.width="20px";

glow.style.height="20px";

glow.style.borderRadius="50%";

glow.style.background="#0d6efd";

glow.style.pointerEvents="none";

glow.style.filter="blur(18px)";

glow.style.opacity=".6";

glow.style.zIndex="999";

}

glow.style.left=e.clientX-10+"px";

glow.style.top=e.clientY-10+"px";

});

// ----------------------
// Button Animation
// ----------------------

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// ----------------------
// Card Click Animation
// ----------------------

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click",()=>{

card.animate([

{transform:"scale(.9)"},

{transform:"scale(1.03)"},

{transform:"scale(1)"}

],{

duration:300

});

});

});
