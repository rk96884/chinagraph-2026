/* ==========================================================================
   CHINAGRAPH // 2026

   File:
   chinagraph-authentic-marks.js

   Description:
   Randomly assigns authentic Chinagraph underline marks to section headings
   and animates them when they enter the viewport.

   Author:
   Rishi Khosla
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ----------------------------------------------------------------------
       Find headings
    ---------------------------------------------------------------------- */

    const headings = [
        ...document.querySelectorAll(".section-title--chinagraph")
    ];

    if (!headings.length) {
        console.warn("No Chinagraph headings found.");
        return;
    }

    /* ----------------------------------------------------------------------
       Asset paths
    ---------------------------------------------------------------------- */
    const isGitHubPages =
        window.location.hostname.endsWith("github.io");

    const siteBasePath =
        isGitHubPages ? "/chinagraph-2026/" : "/";

    const underlineBasePath =
        `${siteBasePath}images/chinagraph-library/underlines/`;

    /* ----------------------------------------------------------------------
       Underline Library
    ---------------------------------------------------------------------- */

    const underlineImages = [

        "underline-thick-01-soft.webp",
        "underline-thick-01-medium.webp",
        "underline-thick-01-bold.webp",

        "underline-thick-02-soft.webp",
        "underline-thick-02-medium.webp",
        "underline-thick-02-bold.webp",

        "underline-thin-01-soft.webp",
        "underline-thin-01-medium.webp",
        "underline-thin-01-bold.webp",

        "underline-thin-02-soft.webp",
        "underline-thin-02-medium.webp",
        "underline-thin-02-bold.webp"

    ];

    /* ----------------------------------------------------------------------
       Fisher-Yates Shuffle
    ---------------------------------------------------------------------- */

    function shuffle(array) {

        const shuffled = [...array];

        for (let i = shuffled.length - 1; i > 0; i--) {

            const j = Math.floor(Math.random() * (i + 1));

            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

        }

        return shuffled;

    }

    const shuffledUnderlines = shuffle(underlineImages);

    /* ----------------------------------------------------------------------
       Apply random underline
    ---------------------------------------------------------------------- */

    headings.forEach((heading, index) => {

        const markedText = heading.querySelector(
            ".section-title__marked-text"
        );

        if (!markedText) {
            return;
        }

        const underline =
            shuffledUnderlines[index % shuffledUnderlines.length];

        markedText.style.setProperty(
            "--chinagraph-underline",
            `url("${underlineBasePath}${underline}")`
        );

    });

    console.log(
        `Assigned ${headings.length} unique Chinagraph marks.`
    );

    /* ----------------------------------------------------------------------
       Reveal animation
    ---------------------------------------------------------------------- */

    if (!("IntersectionObserver" in window)) {

        headings.forEach((heading) => {
            heading.classList.add("is-visible");
        });

        return;

    }

    const observer = new IntersectionObserver(

        (entries, currentObserver) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("is-visible");

                currentObserver.unobserve(entry.target);

            });

        },

        {
            threshold: 0.15
        }

    );

    headings.forEach((heading) => {

        observer.observe(heading);

    });

});