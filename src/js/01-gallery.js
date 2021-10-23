import { galleryItems } from './gallery-items.js';

// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItem(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem(items) {
  return items
    .map(({preview, original, description}) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href=" ">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </div>`;
    })
    .join(' ');
};

galleryRef.addEventListener('click', imgShow);

const instance = basicLightbox.create(`<img src="" >`, {
    onShow: () => {
        window.addEventListener('keydown', keydownEscape);
    },
    onClose: () => {
        window.removeEventListener('keydown', keydownEscape);
    },
})

function keydownEscape(event) {
    if (event.key === 'Escape') {
        instance.close();
        return
    }
}


function imgShow(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    instance.element().querySelector('img').src = event.target.dataset.source;
    instance.show();
}
