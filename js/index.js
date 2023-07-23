/* header */
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav__link')

burger.addEventListener('click',
  function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

let searchBtn = document.querySelector('.header__btn');
let search = document.querySelector('.header__search');
let searchClose = document.querySelector('.search__close');

searchBtn.addEventListener('click', function() {
  search.classList.add('header__search--active');
});

searchClose.addEventListener('click', function() {
  search.classList.remove('header__search--active');
});

/* hero */
new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true,
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти к слайду {{index}}',
  },
});

/* work */
let workBtn = document.querySelectorAll('.nav__btn');
let workItem = document.querySelectorAll('.work__item');

workBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    workItem.forEach(function(element){ element.classList.remove('work__item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__item--active');

    workBtn.forEach(function(element){ element.classList.remove('nav__btn--active')});
    document.querySelector(`[data-path="${path}"]`).classList.add('nav__btn--active');
  });
});

/* questions */
new Accordion('.questions__list', {
	elementClass: 'accordion',
	triggerClass: 'accordion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion--active'
});

let questionBtn = document.querySelectorAll('.accordion__control');

questionBtn.forEach(function(element) {
	element.addEventListener('click', function(e) {
		const path = e.currentTarget.dataset.path;
		document.querySelector(`[data-target="${path}"]`).classList.toggle('accordion__svg--active');
	})
})
