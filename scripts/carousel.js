import { tittleText } from "../data/tittle-text.js";

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const previousButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const tittle = document.querySelector('.carousel__tittle');

// DISPLAY TITTLE FIRST SLIDE
tittle.innerHTML = `${tittleText[0]}`;

// ARRANGE THE SLIDES NEXT TO ONE ANOTHER
function setSlidePosition (slide, index) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slide.style.left = slideWidth * index + 'px';
};

function setSlidesPositions () {
    slides.forEach(setSlidePosition); 
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[0];
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = dots[0];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows (slides, previousButton, nextButton, 0)
    updateTittle(track)
};

setSlidesPositions();

// ARRANGE SLIDES WHEN RESIZE
window.addEventListener('resize', setSlidesPositions);


function moveToSlide (track, currentSlide, targetSlide) {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide'); 
};

function updateDots (currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

function hideShowArrows (slides, previousButton, nextButton, targetIndex) {
    if (targetIndex === 0) {
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length - 1) {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden'); 
    };
};



// WHEN I CLICK LEFT, MOVE SLIDES TO THE LEFT
previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide === previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrows(slides, previousButton, nextButton, previousIndex);
    updateTittle(track);
});

// WHEN I CLICK RIGHT, MOVE SLIDES TO THE RIGHT
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide (track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows(slides, previousButton, nextButton, nextIndex);
    updateTittle(track);
});

// WHEN I CLICK THE NAV INDICATORS, MOVE TO THAT SLIDE
dotsNav.addEventListener('click', e => {
    // what indicator was click on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, previousButton, nextButton, targetIndex);
    updateTittle(track);
});

function updateTittle (track) {
    const currentSlide = track.querySelector('.current-slide');

    slides.forEach((slide, index) => {
        if (slide === currentSlide) {
            tittle.innerHTML = tittleText[index]; 
        };
    });
};


//made carousel draggable
/* let isDragStart = false;

function dragStart () {
    isDragStart = true;
};

function dragging (e) {
    if (!isDragStart) return;
    e.preventDefault();
    track.scrollLeft = e.pageX;
};

track.addEventListener('mousedown', dragStart)
track.addEventListener('mousemove', dragging); */

