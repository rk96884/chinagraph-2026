const timelineItems = document.querySelectorAll(".timeline__item");
const timelinePanel = document.querySelector("#timeline-panel");

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
        item.tabIndex = isSelected ? 0 : -1;
    });

    timelinePanel.setAttribute("aria-labelledby", selectedItem.id);

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
        const keys = [
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown",
            "Home",
            "End"
        ];

        if (!keys.includes(event.key)) {
            return;
        }

        event.preventDefault();

        let nextIndex;

        if (event.key === "Home") {
            nextIndex = 0;
        } else if (event.key === "End") {
            nextIndex = timelineItems.length - 1;
        } else {
            const moveBack =
                event.key === "ArrowLeft" || event.key === "ArrowUp";

            nextIndex = moveBack
                ? (index - 1 + timelineItems.length) % timelineItems.length
                : (index + 1) % timelineItems.length;
        }

        timelineItems[nextIndex].focus();
        updateTimeline(timelineItems[nextIndex]);
    });
});
