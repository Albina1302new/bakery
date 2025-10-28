// Отримуємо елементи для меню
const burger = document.getElementById("burger");
const navList = document.querySelector(".nav ul");
const overlay = document.getElementById("overlay");

// Функція для перемикання меню і затемнення
function toggleMenu() {
  const menuActive = burger.classList.toggle("active");
  if (menuActive) {
    overlay.classList.add("show");
    navList.style.display = "flex";
    setTimeout(() => navList.classList.add("show"), 10);
  } else {
    overlay.classList.remove("show");
    navList.classList.remove("show");
    setTimeout(() => (navList.style.display = "none"), 400);
  }
}
// Закрити меню і прокрутити до секції при виборі пункту меню
const menuItems = document.querySelectorAll(".nav ul li a, .nav ul li button");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Закрити меню
    if (burger.classList.contains("active")) {
      toggleMenu();
    }
    // Отримати ціль із href або id
    const targetSelector = item.getAttribute("href");
    if (targetSelector && targetSelector.startsWith("#")) {
      const targetSection = document.querySelector(targetSelector);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Навішуємо обробники кліків на іконку меню і фон
burger.onclick = toggleMenu;
overlay.onclick = function () {
  if (burger.classList.contains("active")) toggleMenu();
};

// Діалоги "Про нас"
const openDialog = document.getElementById("openDialog");
const infoDialog = document.getElementById("infoDialog");
const closeDialog = document.getElementById("closeDialog");

openDialog.onclick = function () {
  infoDialog.showModal();
};
closeDialog.onclick = function () {
  infoDialog.close();
};

// Контактна форма та її діалог
/* const contactBtn = document.getElementById(".contactBtn");
const contactDialog = document.getElementById(".contactDialog");

const closeContact = document.getElementById(".closeContact");

contactBtn.onclick = function () {
  contactDialog.showModal();
};
closeContact.onclick = function () {
  contactDialog.close();
}; */

// Обробка відправлення контактної форми

/* document.getElementById("contactForm").onsubmit = function (event) {
  event.preventDefault(); // Забороняємо стандартну поведінку форми

  contactDialog.close(); // Закриваємо діалог
}; */

// Попап підписки, що з'являється через 10 секунд
const subscribeDialog = document.getElementById("subscribeDialog");
setTimeout(function () {
  subscribeDialog.showModal();
}, 10000);

// Обробка підписки
document.getElementById("subscribeForm").onsubmit = function (event) {
  event.preventDefault();
  subscribeDialog.close();
};

// Слайдер
const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Показує конкретний слайд по індексу і оновлення точок
function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");
  updateDots(index);
}

// Створення точок навігації для слайдера
function createDots() {
  slides.forEach(function (_, i) {
    let dot = document.createElement("span");
    dot.addEventListener("click", function () {
      currentIndex = i;
      showSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

// Оновлення активної класу точки-показчика
function updateDots(index) {
  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach(function (dot) {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}

// Переключення слайдів кнопками
prevBtn.onclick = function () {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
};

nextBtn.onclick = function () {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
};

// Ініціалізація: створення точок та показ першого слайду
createDots();
showSlide(currentIndex);
