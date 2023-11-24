import './style.css'
let mobile = document.querySelector(".mobile")
let menu = document.querySelector(".menu")
let cross1 = document.querySelector(".cross1")
let cross2 = document.querySelector(".cross2")
let cross3 = document.querySelector(".cross3")

menu.addEventListener("click", function () {
  mobile.classList.toggle("view");
  document.querySelector("body").classList.toggle("overflow-hidden")
  cross1.classList.toggle("cross4")
  cross2.classList.toggle("cross5")
  cross3.classList.toggle("cross6")
})
$('.slidr').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'.prev',
  nextArrow:'.next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});