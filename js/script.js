/* =========================================================
   PORTFOLIO WEBSITE — JAVASCRIPT
   Author: Ayomikun Oduwole
========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
========================================================= */

/*
   Find the hamburger button from index.html.
*/
const menuToggle = document.querySelector(".menu-toggle");


/*
   Find the navigation menu from index.html.
*/
const navLinks = document.querySelector(".nav-links");


/*
   Check that both elements were successfully found.

   This is useful for debugging because the console
   will tell us if JavaScript can't find them.
*/
console.log("Menu button:", menuToggle);
console.log("Navigation:", navLinks);


/*
   When the hamburger button is clicked,
   toggle the "active" class on the navigation.
*/
menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
========================================================= */


/*
   Find all links inside the navigation.
*/
const navigationLinks = document.querySelectorAll(".nav-links a");


/*
   Add a click event to each navigation link.
*/
navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================================
   3. PROJECT FILTERING
========================================================= */


/*
   Find all project filter buttons.
*/
const filterButtons = document.querySelectorAll(".filter");


/*
   Find all project cards.
*/
const projectCards = document.querySelectorAll(".project-card");


/*
   Add a click event to every filter button.
*/
filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        /*
           Get the category from the button.

           Example:
           data-filter="web"

           becomes:
           "web"
        */
        const selectedCategory = button.dataset.filter;


        /*
           Remove "active" from all filter buttons.
        */
        filterButtons.forEach((filterButton) => {

            filterButton.classList.remove("active");

        });


        /*
           Make the button that was clicked active.
        */
        button.classList.add("active");


        /*
           Check each project.
        */
        projectCards.forEach((project) => {

            /*
               Get the project's category.
            */
            const projectCategory = project.dataset.category;


            /*
               Show every project if "ALL" is selected.

               Otherwise only show projects that
               match the selected category.
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


/* =========================================================
   4. SCROLL REVEAL ANIMATION
========================================================= */


/*
   Find the elements that should animate
   when they enter the screen.
*/
const revealElements = document.querySelectorAll(
    ".section-header, .about-grid, .skills-grid, .project-card, .experience-item, .contact-content"
);


/*
   Create an Intersection Observer.

   This detects when an element becomes visible
   on the screen.
*/
const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            /*
               Check whether the element is visible.
            */
            if (entry.isIntersecting) {

                /*
                   Add the CSS class that triggers
                   the reveal animation.
                */
                entry.target.classList.add("visible");


                /*
                   Stop watching the element after
                   it has appeared.
                */
                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


/*
   Start observing every reveal element.
*/
revealElements.forEach((element) => {

    revealObserver.observe(element);

}); 
