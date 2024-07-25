// Lightbox functionality
function showLightbox(element) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = element.querySelector('img').src;
    lightbox.style.display = 'flex';
}

function hideLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Slideshow functionality
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0;
