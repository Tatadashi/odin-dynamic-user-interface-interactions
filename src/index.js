import './style.css';
import { addDropdownFunctionalities } from './otherJs/dropdown';
import carouselImage1 from './assets/image_carousel/carousel_image_1.jpg';
import carouselImage2 from './assets/image_carousel/carousel_image_2.jpg';
import carouselImage3 from './assets/image_carousel/carousel_image_3.jpg';
import leftArrowImage from './assets/image_carousel/left_arrow.svg';
import rightArrowImage from './assets/image_carousel/right_arrow.svg';

addDropdownFunctionalities();

addCarouselSlideImage('carousel-slide-1', carouselImage1);
addCarouselSlideImage('carousel-slide-2', carouselImage2);
addCarouselSlideImage('carousel-slide-3', carouselImage3);
addLeftArrowImage();
addRightArrowImage();

addForwardSlideButtonEvent();
addBackSlideButtonEvent();
addClickEventToAllSlideDot();

let slideTimer = window.setInterval(changeCurrentSlideForward, 5000);

function resetSlideTimer () {
    clearInterval(slideTimer);
    slideTimer = setInterval(changeCurrentSlideForward, 5000);
}

function addCarouselSlideImage (elementID, src) {
    const element = document.getElementById(`${elementID}`);
    const image = new Image();
    image.src = src;
    image.alt = elementID;
    element.appendChild(image);
}

function addLeftArrowImage () {
    const leftButton = document.getElementById('carousel-back-button');
    leftButton.style.backgroundImage = `url(${leftArrowImage})`;
    leftButton.style.backgroundRepeat = 'no-repeat';
    leftButton.style.backgroundPosition = 'center center';
}

function addRightArrowImage () {
    const leftButton = document.getElementById('carousel-forward-button');
    leftButton.style.backgroundImage = `url(${rightArrowImage})`;
    leftButton.style.backgroundRepeat = 'no-repeat';
    leftButton.style.backgroundPosition = 'center center';
}

function changeCurrentSlideForward () {
    const slides = document.getElementById('slides');
    const currentSlide = document.querySelector('.slide');
    const nextSlide = currentSlide.nextElementSibling;
    slides.prepend(nextSlide);
    slides.appendChild(currentSlide);

    changeCurrentSlideDotForward();
    resetSlideTimer();
}

function changeCurrentSlideDotForward () {
    const currentSlideDot = document.querySelector('.current');
    const nextSlideDot = currentSlideDot.nextElementSibling;
    currentSlideDot.classList.remove('current');

    //current slide being last slide means next slide is null
    if (nextSlideDot == null) {
        const firstSlideDot = document.querySelector('.slide-dot');
        firstSlideDot.classList.add('current');
    } else {
        nextSlideDot.classList.add('current');
    }
}

function changeCurrentSlideBack () {
    const slides = document.getElementById('slides');
    const lastSlide = slides.lastElementChild;
    slides.prepend(lastSlide);

    changeCurrentSlideDotBack();
    resetSlideTimer();
}

function changeCurrentSlideDotBack () {
    const currentSlideDot = document.querySelector('.current');
    const previousSlideDot = currentSlideDot.previousElementSibling;
    currentSlideDot.classList.remove('current');

    //current slide being slide 1 means previous slide is null
    if (previousSlideDot == null) {
        const slideDots = document.getElementById('slide-dots');
        const lastSlideDot = slideDots.lastElementChild;
        lastSlideDot.classList.add('current');
    } else {
        previousSlideDot.classList.add('current');
    }
}

function addForwardSlideButtonEvent () {
    const button = document.getElementById('carousel-forward-button');
    button.addEventListener('click', (e) => {
        changeCurrentSlideForward();
    });
}

function addBackSlideButtonEvent () {
    const button = document.getElementById('carousel-back-button');
    button.addEventListener('click', (e) => {
        changeCurrentSlideBack();
    });
}

function addClickEventToAllSlideDot () {
    const slides = document.querySelectorAll('.slide');
    const slideDots = document.querySelectorAll('.slide-dot');

    slides.forEach((slide, index) => {
        addClickEventToSlideDot(slideDots[index], slide);
    });
}

function addClickEventToSlideDot (dot, slide) {
    dot.addEventListener('click', (e) => {
        changeCurrentSlideSpecific(slide);
    });
}

function changeCurrentSlideSpecific (slide) {
    const currentSlideDot = document.querySelector('.current');
    let currentSlideNumber = Number(currentSlideDot.dataset.slide);

    const newSlideID = slide.getAttribute('id');
    const newSlideNumber = Number(newSlideID.replace('carousel-slide-', ''));

    while (currentSlideNumber != newSlideNumber) {
        if (newSlideNumber > currentSlideNumber) {
            changeCurrentSlideForward();
            currentSlideNumber = currentSlideNumber + 1;
        } else {
            changeCurrentSlideBack();
            currentSlideNumber = currentSlideNumber - 1;
        }
    }
}