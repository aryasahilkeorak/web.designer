document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector("#ppNavbarToggler");
    const navbarCollapse = document.querySelector(".pp-navbar-collapse");

    if (toggler && navbarCollapse) {
        toggler.addEventListener("click", function () {
            navbarCollapse.classList.toggle("show");
            toggler.classList.toggle("collapsed");
        });
    }
});
