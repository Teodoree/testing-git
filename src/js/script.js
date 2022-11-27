const splide = new Splide( '.splide', {
  type   : 'loop'
  drag   : 'free'
  focus  : 'center'
  perPage: 3,
  arrows: false,
  autoScroll: {
    speed: 1,
  },
} );

splide.mount(window.splide.Extensions);
