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

/*
   Select every link inside the mobile navigation.
*/
const navigationLinks = document.querySelectorAll(".nav-links a");


/*
   Close the mobile menu after the user
   selects a section.
*/
navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* =========================================================
   2. PROJECT FILTERING
========================================================= */


/*
   Find all of the filter buttons.
*/
const filterButtons = document.querySelectorAll(".filter");


/*
   Find every project card.
*/
const projectCards = document.querySelectorAll(".project-card");


/*
   Add a click event to every filter button.
*/
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {


        /*
           Get the category stored in the button's
           data-filter attribute.

           Example:

           data-filter="web"

           becomes:

           "web"
        */
        const selectedCategory = button.dataset.filter;


        /*
           Remove the "active" class from every button.
        */
        filterButtons.forEach((filterButton) => {

            filterButton.classList.remove("active");

        });


        /*
           Add "active" to the button that
           the user clicked.
        */
        button.classList.add("active");


        /*
           Check every project card.
        */
        projectCards.forEach((project) => {


            /*
               Get the project's category.
            */
            const projectCategory = project.dataset.category;


            /*
               If the user selected "all",
               show every project.

               Otherwise only show projects
               belonging to the selected category.
            */
            if (
                selectedCategory === "all" ||
                projectCategory === selectedCategory
            ) {

                project.style.display = "flex";

            } else {

                project.style.display = "none";

            }

        });

    });

});