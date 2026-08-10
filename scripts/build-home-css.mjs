import { readFile, writeFile } from "node:fs/promises";
import { PurgeCSS } from "purgecss";

const css = await readFile("css/generated/site.min.css", "utf8");
const html = await readFile("index.html", "utf8");
const scripts = await Promise.all([
    "js/theme.js",
    "js/navigation.js",
    "js/chinagraph-authentic-marks.js"
].map((file) => readFile(file, "utf8")));

const [result] = await new PurgeCSS().purge({
    content: [{ raw: [html, ...scripts].join("\n"), extension: "html" }],
    css: [{ raw: css }],
    safelist: {
        standard: ["is-open", "is-visible"],
        greedy: [/^data-theme/]
    }
});

await writeFile("css/generated/home.min.css", result.css);
