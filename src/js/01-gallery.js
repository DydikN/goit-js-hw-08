// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const imgEl = createImgMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgEl);

function createImgMarkup(items) {
  return items
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link"
      href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
      </a>
      </div>`;
    })
    .join('');
}

const lighbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: '250',
  scrollZoom: false,
});

console.log(galleryItems);
