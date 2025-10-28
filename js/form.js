let form = document.querySelector(".form");
let btnSubmit = document.querySelector('input[name="submit"]');
let msg = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");
  msg.innerHTML = "Succes! Du har udfyldt formularen";
});
