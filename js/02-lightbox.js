import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('ul.gallery');

//? cтворюю розмітку з вхідного масиву
const makePreviewImageGallery = ({preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
        <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
    </a>`
}

galleryEl.innerHTML = galleryItems.map(makePreviewImageGallery).join('');

//? підключена бібліотека на модалку
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', //? змінено текст щоб брався з "альт"
    captionDelay: 250, //? затримка появи тексту 250 мс
});