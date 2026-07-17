// ---------- Select Elements ----------

// ---------- Hamburger Menu ----------
const menuIcon = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

// ---------- Scroll ----------
const navbar = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-top");
const sections = document.querySelectorAll("section, footer");
const revealElements = document.querySelectorAll(".reveal");

//-----------Dark theme toggle button------------
const themeToggle = document.querySelector(".theme-toggle");



//-------------Hamburger Menu Start----------

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuIcon.classList.toggle("active");

});


navItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuIcon.classList.remove("active");

    });

});

// ---------- Scroll Events ----------
window.addEventListener("scroll", () => {

    // Navbar Scroll
    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

    //Scroll To Top Button
    if (window.scrollY > 300) {

        scrollBtn.classList.add("show");

    } else {


        scrollBtn.classList.remove("show");

    }

    // Active Navigation
    let currentSection = "";

    sections.forEach((section) => {

        if (
            window.scrollY >= section.offsetTop - 100 &&
            window.scrollY < section.offsetTop + section.offsetHeight - 100
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {

        currentSection = "contact";

    }

    navItems.forEach((item) => {

        item.classList.remove("active");

        if (item.getAttribute("href") === "#" + currentSection) {

            item.classList.add("active");

        }

    });


    // Reavel Animation
    revealElements.forEach((element) => {

        console.log(element);

        if (window.scrollY > element.offsetTop - 500) {

            element.classList.add("active");
        }

    });


});   // -----------Scroll Event end----------------



// ---------- Scroll To Top ----------
scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// //-----------Dark theme toggle button------------
// themeToggle.addEventListener("click", () => {

//     document.body.classList.toggle("light-mode");

// });





