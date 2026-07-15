// Hamburger Menu Start

const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuIcon.classList.toggle("active");

});


const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("active");

    });

    item.addEventListener("click", () => {

        navItems.forEach((link) => {

            link.classList.remove("active");

        });

        item.classList.add("active");

    });

});

// Hamburger Menu End



// Scroll Effect Start

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.classList.add("scrolled");

    } else {

        nav.classList.remove("scrolled");

    }

});

// Scroll To Top

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {


        scrollBtn.classList.remove("show");

    }


});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behaviour: "smooth"

    });

});

// Scroll Effect End



// Active Navigation on Click

