let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector("#nav-links");
let links = document.querySelectorAll(".links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("hide");
    hamburger.classList.toggle("lines-rotate");
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        navLinks.classList.toggle("hide");
        hamburger.classList.toggle("lines-rotate");
    })
}

const backToTopBtn = document.querySelector('#backToTop');

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    }
    else {
        backToTopBtn.style.display = "none";
    }
})
backToTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

gsap.from(".nav-container", {y: -50, ease: "power2.inOut", duration: 2})
gsap.from(".top-icecream", {opacity: 0, duration: 3, delay: 1})
gsap.from(".heading", {y: 50, ease: "back", duration: 1, opacity: 0, delay: 2})
gsap.from("h2", {y: 50, ease: "back", duration: 1, opacity: 0, delay: 2.5})
gsap.from(".top", {y: 50, ease: "back", duration: 1, opacity: 0, delay: 3})
gsap.from(".top-icons", {opacity: 0, duration: 1.7, delay: 3.5})



