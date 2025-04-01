const images = [
  './Images/image1.webp',
  "./Images/image2.webp",
  "./Images/image3.webp",
  "./Images/image4.webp",
];

let currentIndex = 0;
let slider = document.getElementById("slider");

function updateImage() {
    slider.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

setInterval(nextImage, 3000);

updateImage();