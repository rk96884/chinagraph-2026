document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    if (!navToggle || !navList) {
        console.error("Navigation elements not found");
        return;
    }

    const closeNavigation = () => {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation");
        navList.classList.remove("is-open");
    };

    navToggle.addEventListener("click", () => {
        const willOpen =
            navToggle.getAttribute("aria-expanded") !== "true";

        navToggle.setAttribute("aria-expanded", String(willOpen));
        navToggle.setAttribute(
            "aria-label",
            willOpen ? "Close navigation" : "Open navigation"
        );

        navList.classList.toggle("is-open", willOpen);
    });

    document.addEventListener("click", event => {
        const clickedToggle = navToggle.contains(event.target);
        const clickedMenu = navList.contains(event.target);

        if (!clickedToggle && !clickedMenu) {
            closeNavigation();
        }
    });

    document.addEventListener("keydown", event => {
        if (
            event.key === "Escape" &&
            navToggle.getAttribute("aria-expanded") === "true"
        ) {
            closeNavigation();
            navToggle.focus();
        }
    });

    navList.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeNavigation);
    });
});