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
            const projectCategories = project.dataset.category.split(/\s+/);


            /*
               Show every project if "ALL" is selected.

               Otherwise only show projects that
               match the selected category.
            */
            if (
                selectedCategory === "all" ||
                projectCategories.includes(selectedCategory)
            ) {

                project.style.display = "flex";

            } else {

                project.style.display = "none";

            }

        });

    });

});


/* =========================================================
   4. PROJECT DETAIL POPUP
========================================================= */

const projectDialog = document.querySelector("#project-dialog");
const projectDialogTitle = document.querySelector("#project-dialog-title");
const projectDialogContent = document.querySelector(".project-dialog-content");
const projectDialogClose = document.querySelector(".project-dialog-close");

projectCards.forEach((project) => {

    const trigger = project.querySelector(".project-card-trigger");
    const details = project.querySelector(".project-details");

    trigger.addEventListener("click", () => {
        projectDialogTitle.textContent = project.querySelector(".project-content h3").textContent;
        projectDialogContent.replaceChildren(details.content.cloneNode(true));
        projectDialog.showModal();
    });

});

projectDialogClose.addEventListener("click", () => {
    projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) {
        projectDialog.close();
    }
});


/* =========================================================
   5. CONTACT FORM EMAIL HANDOFF
========================================================= */

const contactForm = document.querySelector("#contact-form");
const contactName = document.querySelector("#contact-name");
const contactSenderEmail = document.querySelector("#contact-sender-email");
const contactMessage = document.querySelector("#contact-message");
const contactFormStatus = document.querySelector("#contact-form-status");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    contactName.value = contactName.value.trim();
    contactSenderEmail.value = contactSenderEmail.value.trim();
    contactMessage.value = contactMessage.value.trim();

    contactName.setCustomValidity(contactName.value ? "" : "Please enter your name.");
    contactSenderEmail.setCustomValidity(
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(contactSenderEmail.value)
            ? ""
            : "Enter a valid email address, such as name@example.com."
    );
    contactMessage.setCustomValidity(contactMessage.value ? "" : "Please enter a message.");

    if (!contactForm.reportValidity()) {
        return;
    }

    const submitButton = contactForm.querySelector("[type='submit']");
    submitButton.disabled = true;
    contactFormStatus.textContent = "Sending your message…";

    try {
        const response = await fetch("https://formsubmit.co/ajax/mikky0duwole@gmail.com", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(Object.fromEntries(new FormData(contactForm).entries()))
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error("The form service did not accept the message.");
        }

        contactForm.reset();
        contactFormStatus.textContent = "Thanks! Your message has been sent.";
    } catch (error) {
        contactFormStatus.textContent = "Your message could not be sent. Please try again or email mikky0duwole@gmail.com directly.";
    } finally {
        submitButton.disabled = false;
    }
});


/* =========================================================
   6. SCROLL REVEAL ANIMATION
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
