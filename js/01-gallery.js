import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

// cтворюю розмітку з вхідного масиву
const makePreviewImageGallery = ({preview, original, description }) => {
    return `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
}

// перебираю масив і позбуваюся його
//? const elements = galleryItems.map(makePreviewImageGallery).join('');
// добавляю розмітку в готовий хтмл
//? galleryEl.innerHTML = elements;

galleryEl.innerHTML = galleryItems.map(makePreviewImageGallery).join('');

const onModalOriginalImage = (e) => {
    event.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    };

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `)

    instance.show()
}

galleryEl.addEventListener('click', onModalOriginalImage);