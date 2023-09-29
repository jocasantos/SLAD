const navElem = document.getElementById('nav');
const resultsGridElem = document.getElementById('results-main');
const closeMenusElem = document.getElementsByClassName('close-menu');

function openMenu () {
    navElem.classList.toggle('responsive');

    resultsGridElem.classList.toggle('responsive');
};

document.querySelector('.icon')
    .addEventListener('click', () => {
        openMenu();
    });

closeMenusElem[0].addEventListener('click', () => {
    resultsGridElem.classList.remove('responsive');
    navElem.classList.remove('responsive');
});

