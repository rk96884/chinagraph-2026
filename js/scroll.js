const figures = document.querySelectorAll('.figure--browser');

figures.forEach((figure) => {
    const viewport = figure.querySelector('.figure__viewport');
    const image = figure.querySelector('.figure__image');

    figure.addEventListener('mouseenter', () => {
        const distance = image.offsetHeight - viewport.offsetHeight;

        image.style.transform = `translateY(-${distance}px)`;
    });

    figure.addEventListener('mouseleave', () => {
        image.style.transform = 'translateY(0)';
    });
});