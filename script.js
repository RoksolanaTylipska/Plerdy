const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  slidesPerView: 1,
  watchOverflow: true,

  breakpoints: {
    990: {
      slidesPerView: 4.5,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper__button--right',
    prevEl: '.swiper__button--left',

  },

  spaceBetween: 17,

});


document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__menu');
  const header = document.querySelector('.header');
  const main = document.querySelector('.main-container');
  const footer = document.querySelector('.footer');
  const buttonContainer = document.querySelector('.header__button-container');

  burgerMenu.addEventListener('click', function () {
    nav.classList.toggle('active');
    header.classList.toggle('header__active');
    main.classList.toggle('main-container--notactive');
    footer.classList.toggle('footer--notactive');
    buttonContainer.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const popupButtons = document.querySelectorAll('.popup-button');

  popupButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const popupId = this.getAttribute('data-popup-target');
      const popup = document.getElementById(popupId);

      popup.style.display = 'block';
    });
  });

  const closeButton = document.querySelector('.close-button');
  closeButton.addEventListener('click', function () {
    const popup = this.closest('.popup');
    popup.style.display = 'none';
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const phoneInput = document.getElementById('phone');
  const iti = window.intlTelInput(phoneInput, {
    separateDialCode: true,
    showSelectedDialCode: true,
    initialCountry: 'ua',
    utilsScript: 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js',
  });

  intlTelInput(input, {
    customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
      return "eg " + selectedCountryPlaceholder;
    },
  });

  phoneInput.addEventListener('input', function (event) {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('.form__input--name');

  input.addEventListener('input', function() {
      const value = input.value;
      const regex = /^[a-zA-Z]+$/; // Регулярний вираз для перевірки наявності тільки букв

      if (!regex.test(value)) {
          input.value = value.replace(/[^a-zA-Z]/g, ''); // Видаляємо всі символи, які не є буквами
      }
  });
});