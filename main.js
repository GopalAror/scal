import './style.css'
let mobile = document.querySelector(".mobile")
let menu = document.querySelector(".menu")
let cross1 = document.querySelector(".cross1")
let cross2 = document.querySelector(".cross2")
let cross3 = document.querySelector(".cross3")
let home = document.querySelector(".home")
let about = document.querySelector(".about")
let why = document.querySelector(".why")


menu.addEventListener("click", function () {
  mobile.classList.toggle("view");
  document.querySelector("body").classList.toggle("overflow-hidden")
  cross1.classList.toggle("cross4")
  cross2.classList.toggle("cross5")
  cross3.classList.toggle("cross6")
})
home.addEventListener("click", function(){
  cross1.classList.remove("cross4")
  cross2.classList.remove("cross5")
  cross3.classList.remove("cross6")
  document.querySelector("body").classList.remove("overflow-hidden")
  mobile.classList.remove("view");
})
about.addEventListener("click", function(){
  cross1.classList.remove("cross4")
  cross2.classList.remove("cross5")
  cross3.classList.remove("cross6")
  document.querySelector("body").classList.remove("overflow-hidden")
  mobile.classList.remove("view");
})
why.addEventListener("click", function(){
  cross1.classList.remove("cross4")
  cross2.classList.remove("cross5")
  cross3.classList.remove("cross6")
  document.querySelector("body").classList.remove("overflow-hidden")
  mobile.classList.remove("view");
})
// back-to-top
function scrollBtn() {
  window.scrollTo(0, 0);
}
document.getElementById("topbtn").addEventListener("click",scrollBtn)
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 300) {
      topbtn.style.display = 'block';
  }
  else{
      topbtn.style.display = 'none';
  }
})
// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);
$('.slidr').slick({
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '.prev',
  nextArrow: '.next',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 675,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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