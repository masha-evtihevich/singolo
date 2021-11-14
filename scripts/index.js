let slideIndex = 1;
/* Основная функция слайдера */
const showSlides = n => {
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
}

/* Индекс слайда по умолчанию */
const currentSlide = n => {
  showSlides((slideIndex = n));
}

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
const plusSlide = () => {
  showSlides((slideIndex += 1));
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
const minusSlide = () => {
  showSlides((slideIndex -= 1));
}

showSlides(slideIndex);
