
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryMarkup = makeGalleryMarkup(galleryItems);

const refs = {
    galleryEl: document.querySelector(".gallery"),
};

refs.galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
new SimpleLightbox(".gallery a", {
    captionDelay: 250,
});
refs.galleryEl.addEventListener("click", onGalleryClick);

function makeGalleryMarkup(gallery) {
    return gallery
        .map(({ original, preview, description }) => {
            return `
        <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="" title= "${description}"/></a>`;
        })
        .join("");
}

function onGalleryClick(evt) {
    evt.preventDefault();
    const isOnImage = evt.target.classList.contains("gallery__image");
    if (!isOnImage) {
        return;
    }
}

console.log(galleryItems);
