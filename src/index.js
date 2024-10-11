import './style.css';
import { addDropdownFunctionalities } from './otherJs/dropdown';
import carouselImage1 from './assets/image_carousel/carousel_image_1.jpg';
import carouselImage2 from './assets/image_carousel/carousel_image_2.jpg';
import carouselImage3 from './assets/image_carousel/carousel_image_3.jpg';

addDropdownFunctionalities();

addCarouselSlideImage('carousel-slide-1', carouselImage1);
addCarouselSlideImage('carousel-slide-2', carouselImage2);
addCarouselSlideImage('carousel-slide-3', carouselImage3);

function addCarouselSlideImage (elementID, src) {
    const element = document.getElementById(`${elementID}`);
    const image = new Image();
    image.src = src;
    image.alt = elementID;
    element.appendChild(image);
}

function changeCurrentSlideForward () {
    const slides = document.getElementById('slides');
    const currentSlide = document.querySelector('.slide');
    const nextSlide = currentSlide.nextElementSibling;
    slides.prepend(nextSlide);
    slides.appendChild(currentSlide);
}

function changeCurrentSlideBack () {
    const slides = document.getElementById('slides');
    const lastSlide = slides.lastElementChild;
    slides.prepend(lastSlide);
}