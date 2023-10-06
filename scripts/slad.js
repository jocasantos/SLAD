import { closeMenu, openMenu } from "./menu-button.js";
import { generateResultsGrid } from "./results-grid.js"
import { results } from "../data/results.js";

generateResultsGrid (results);

document.querySelector('.hamb-icon')
    .addEventListener('click', () => {
        openMenu();
    });

const closeMenusElem = document.getElementsByClassName('close-menu');

closeMenusElem[0].addEventListener('click', () => {
    closeMenu();
});