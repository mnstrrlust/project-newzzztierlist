document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    navbar.innerHTML = `
        <div class="navbar-container">
            <a href="index.html" class="navbar-logo">ZZZ Tier List</a>
            <button class="navbar-toggle" aria-label="Menu" aria-expanded="false" aria-controls="navbar-menu">
                <span class="hamburger"></span>
            </button>
            <ul class="navbar-menu" id="navbar-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">Tier List</a></li>
                <li><a href="index.html">About</a></li>
            </ul>
        </div>
    `;
    document.body.prepend(navbar);

    const toggle = navbar.querySelector(".navbar-toggle");
    const menu = navbar.querySelector("#navbar-menu");

    const closeMenu = () => {
        toggle.classList.remove("active");
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
        toggle.classList.add("active");
        menu.classList.add("open");
        toggle.setAttribute("aria-expanded", "true");
    };

    toggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        if (expanded) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target)) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });

    menu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => closeMenu());
    });

    const mq = window.matchMedia("(min-width: 768px)");
    const handleResize = () => {
        closeMenu();
    };
    if (mq.addEventListener) {
        mq.addEventListener("change", handleResize);
    } else {
        window.addEventListener("resize", handleResize);
    }
});