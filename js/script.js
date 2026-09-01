/* =========================================================
   PORTFOLIO WEBSITE — JAVASCRIPT
   Author: Ayomikun Oduwole
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

/*
   Find the hamburger menu button in our HTML.
*/
const menuToggle = document.querySelector(".menu-toggle");


/*
   Find the navigation links container.
*/
const navLinks = document.querySelector(".nav-links");


/*
   When the hamburger button is clicked,
   add/remove the "active" class.

   The CSS uses this class to show/hide
   the mobile navigation.
*/
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});