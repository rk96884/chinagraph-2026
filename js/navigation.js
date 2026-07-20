document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navList = document.querySelector(".nav-list");

    console.log("Navigation initialised:", { navToggle, navList });

    if (!navToggle || !navList) {
        console.error("Navigation elements not found");
        return;
    }

    navToggle.addEventListener("click", () => {
        const willOpen =
            navToggle.getAttribute("aria-expanded") !== "true";

        navToggle.setAttribute("aria-expanded", String(willOpen));
        navToggle.setAttribute(
            "aria-label",
            willOpen ? "Close navigation" : "Open navigation"
        );

        navList.classList.toggle("is-open", willOpen);

        console.log("Navigation toggled:", {
            willOpen,
            classes: navList.className,
            display: getComputedStyle(navList).display
        });
    });
});