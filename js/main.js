document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (!menuToggle || !mainNav) {
        return;
    }

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("mobile-open");

        const isOpen = mainNav.classList.contains("mobile-open");

        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    const navLinks = mainNav.querySelectorAll("a");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("mobile-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
});