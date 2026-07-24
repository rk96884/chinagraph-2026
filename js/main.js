const timelineItems = document.querySelectorAll(".timeline__item");

const timelineImage = document.querySelector("#timeline-image");
const timelineYear = document.querySelector("#timeline-year");
const timelineTitle = document.querySelector("#timeline-title");
const timelineCompany = document.querySelector("#timeline-company");
const timelineDescription = document.querySelector(
    "#timeline-description"
);
const timelineTechnologies = document.querySelector(
    "#timeline-technologies"
);

function updateTimeline(selectedItem) {
    timelineItems.forEach((item) => {
        const isSelected = item === selectedItem;

        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-selected", String(isSelected));
    });

    timelineYear.textContent = selectedItem.dataset.year;
    timelineTitle.textContent = selectedItem.dataset.title;
    timelineCompany.textContent = selectedItem.dataset.company;
    timelineDescription.textContent = selectedItem.dataset.description;
    timelineTechnologies.textContent =
        selectedItem.dataset.technologies;

    timelineImage.src = selectedItem.dataset.image;
    timelineImage.alt = selectedItem.dataset.alt;
}

timelineItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        updateTimeline(item);
    });

    item.addEventListener("keydown", (event) => {
        const keys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

        if (!keys.includes(event.key)) {
            return;
        }

        event.preventDefault();

        const moveBack =
            event.key === "ArrowLeft" || event.key === "ArrowUp";

        const nextIndex = moveBack
            ? Math.max(0, index - 1)
            : Math.min(timelineItems.length - 1, index + 1);

        timelineItems[nextIndex].focus();
        updateTimeline(timelineItems[nextIndex]);
    });
});