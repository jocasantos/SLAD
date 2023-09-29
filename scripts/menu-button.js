function openMenu () {
    const navElem = document.getElementById('nav');
    navElem.classList.toggle('responsive');

    const bodyElem = document.getElementById('results-main');
    bodyElem.classList.toggle('responsive');
}