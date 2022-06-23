// Появление меню
let nav = document.querySelector('.icon-menu');

nav.addEventListener('click', function (e) {
  let navList = document.querySelector('.header__body')
  navList.classList.toggle('_active');
});




new Swiper('.swiper', {

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  slideToClickedSlide: true,
  autoHeight: true,
  slidesPerView: 2.6,
  slidesPerGroup: 1,
  spaceBetween: 30,
  touchAngle: 180,
  slideToClickedSlide: true,
  grabCursor: true,
  touchRatio: 1,
  breakpoints: {
    320: {
      slidesPerView: 1.09
    },
    480: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 2.6,
      spaceBetween: 30
    }
  },
});







// ререход к разделам меню
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
  for (let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];
    menuLink.addEventListener('click', menuClick);
  };


  function menuClick(e) {
    const menuLink2 = e.target;
    console.log(menuLink2);
    if (menuLink2.dataset.goto && document.querySelector(menuLink2.dataset.goto)) {
      const block = document.querySelector(menuLink2.dataset.goto);

      const gotoBlockValue = block.getBoundingClientRect().top + window.pageYOffset;


      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}



