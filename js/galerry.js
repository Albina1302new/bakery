let galleryInput = document.querySelector(".gallery-wrapper");

let images = [
  "../image/bagery-2.jpg",
  "../image/bagery-3.jpg",
  "../image/bagery-4.jpg",
  "../image/bagery-5.jpg",
  "../image/bagery-6.jpg",
  "../image/bagery-7.jpg",
  "../image/bagery-8.jpg",
  "../image/bagery-9.jpg",
  "../image/bagery-1.jpg",
  "../image/bagery-10.jpg",
  "../image/bagery-11.jpg",
  "../image/bagery-12.jpg",
];

images.forEach((image) => {
  galleryInput.innerHTML += `<img src="${image}" class="img show-dialog">`;
});

let dialog = document.querySelector(".gallery-dialog");
let showDialogBtns = document.querySelectorAll(".show-dialog");
let closeBtn = document.querySelector(".close-dialog");
let imgInDialog = document.querySelector(".img-in-dialog");

showDialogBtns.forEach((img) => {
  img.addEventListener("click", () => {
    dialog.showModal();
    imgInDialog.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  dialog.close();
});
