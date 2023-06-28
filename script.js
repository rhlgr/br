const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


const swiper1 = new Swiper('.swiper', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});