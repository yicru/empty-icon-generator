module.exports = {
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')(),
    require('tailwindcss-animatecss')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000
      },
      variants: ['responsive']
    })
  ]
};
