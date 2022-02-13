import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('div.gallery');

//? cтворюю розмітку з вхідного масиву
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

//? перебираю масив і позбуваюся його
// const elements = galleryItems.map(makePreviewImageGallery).join('');
//? добавляю розмітку в готовий хтмл
// galleryEl.innerHTML = elements;

galleryEl.innerHTML = galleryItems.map(makePreviewImageGallery).join('');

galleryEl.addEventListener('click', onModalOriginalImage); //? слухач подій на клік і відкриття модалки

function onModalOriginalImage (e) {
    e.preventDefault(); //? відключення дефолтного переходу по силці

    //? перевірка на натискання по "імґ", якщо ні то нічого не буде
    if (e.target.nodeName !== 'IMG') {
        return;
    };

    //? підключена бібліотека на модалку
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
    `)

    instance.show();

    const visible = instance.visible() //? перевірка на включену модалку

    if (visible) {
        //? слухач клавіатури на "ескейп" і закриття модалки якщо так
        window.addEventListener('keydown', (e) => {
            if (e.code === `Escape`) {
            instance.close();
            };
        })
    }
    
}

// ! функція винесено не працює (instance не знаходить)
// ? функція перевірки натискання кнопки "ескейп" і закриття 
// ? модалки + закриття слухача на клавіатуру.
// function escapeCloseModal(e) {
//     if (e.code === `Escape`) {
//         instance.close();
//         window.removeEventListener('keydown', escapeCloseModal)
//     };
// };