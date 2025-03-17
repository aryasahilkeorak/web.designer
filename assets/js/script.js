document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector("#ppNavbarToggler");
    const navbarCollapse = document.querySelector(".pp-navbar-collapse");

    if (toggler && navbarCollapse) {
        // Toggle the navbar on click of the toggler
        toggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
            toggler.classList.toggle("collapsed");
        });

        // Close the navbar when any nav link is clicked
        document.querySelectorAll(".pp-nav-link").forEach(function (navLink) {
            navLink.addEventListener("click", function () {
                // Check if the navbar is currently open
                if (navbarCollapse.classList.contains("show")) {
                    navbarCollapse.classList.remove("show");
                    toggler.classList.remove("collapsed");
                }
            });
        });
    }
});
