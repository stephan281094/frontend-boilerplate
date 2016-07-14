require('./scss/index.scss')

var wrapper = document.querySelector('.o-wrapper')
var baselineToggler = document.querySelector('.c-baseline-toggler')

baselineToggler.addEventListener('click', function () {
  wrapper.classList.toggle('o-wrapper--show-baseline')
})
