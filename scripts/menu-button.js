const navElem = document.getElementById('nav');
const resultsGridElem = document.getElementById('results-main');

export function openMenu () {
    navElem.classList.toggle('responsive');
    resultsGridElem.classList.toggle('responsive');
};

export function closeMenu () {
    resultsGridElem.classList.remove('responsive');
    navElem.classList.remove('responsive');
};

