import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery')
const galleryMarkup = createGalleryItem(galleryItems);


galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem(items) {
  return items
    .map(({preview, original, description}) => {
      return `<li> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>
`;
    })
    .join(' ');
};
galleryRef.addEventListener('click', onModalOpen)

function onModalOpen (event) {
    event.preventDefault();
    const lightbox = new SimpleLightbox('.gallery__item', {captionsData:"alt", captionDelay:"250 ms"});
}
