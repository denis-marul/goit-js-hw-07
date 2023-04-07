import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryUl = document.querySelector('.gallery');

const galleryElements = galleryItems
  .map(element => {
    const { original, preview, description } = element;
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
  })
  .join('');

galleryUl.insertAdjacentHTML('afterbegin', galleryElements);

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  function escape(event) {
    if (event.code === 'Escape') {
      console.log('listen');
      instance.close();
    }
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: instance => {
        galleryUl.addEventListener('keydown', escape);
      },

      onClose: instance => {
        galleryUl.removeEventListener('keydown', escape);
      },
    }
  );

  instance.show();
}

galleryUl.addEventListener('click', openModal);
