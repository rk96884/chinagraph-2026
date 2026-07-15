const THEME_KEY = "chinagraph-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");

function getPreferredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === DARK_THEME || savedTheme === LIGHT_THEME) {
        return savedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? DARK_THEME
        : LIGHT_THEME;
}

function applyTheme(theme) {
    const isDark = theme === DARK_THEME;

    root.dataset.theme = theme;

    if (!themeToggle) {
        return;
    }

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme"
    );
}

function toggleTheme() {
    const currentTheme = root.dataset.theme;
    const nextTheme = currentTheme === DARK_THEME
        ? LIGHT_THEME
        : DARK_THEME;

    localStorage.setItem(THEME_KEY, nextTheme);
    applyTheme(nextTheme);
}

applyTheme(getPreferredTheme());

themeToggle?.addEventListener("click", toggleTheme);