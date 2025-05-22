/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//



window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    }
    ;


    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    // ✅ Dark/Light Mode Toggle Button
    const toggleBtn = document.getElementById("theme-toggle");
    const icon = toggleBtn.querySelector("i");

    function applyTheme(theme) {
        document.body.classList.toggle("dark-mode", theme === "dark");
        icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
        toggleBtn.className = theme === "dark"
            ? "btn btn-dark position-fixed end-1 custom-theme-btn rounded-circle shadow"
            : "btn btn-light position-fixed end-1 custom-theme-btn rounded-circle shadow";
    }

    toggleBtn.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);



});
