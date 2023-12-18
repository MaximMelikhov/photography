//Бургер
const burger = document.getElementById("burger")
const nav = document.getElementById("nav")


burger.addEventListener("click", function(){
  nav.classList.toggle("nav--activ")
  burger.classList.toggle("burger--active")
  document.body.classList.toggle("stop-scroll")
})

//Модальное окно

const callFormBtn = document.getElementById("call-form")
const modalCallForm = document.getElementById("modal-call-form")

callFormBtn.addEventListener("click", function(){
  modalCallForm.classList.add("modal-parent--open")
})

modalCallForm.querySelector(".modal").addEventListener("click", function(event) {
  event._isClick = true
})
modalCallForm.addEventListener("click", function (event) {
  if (event._isClick === true) return
  modalCallForm.classList.remove("modal-parent--open")
})


//Закрытие на esc

window.addEventListener("keydown", function(event){
  if(event.key === "Escape") {
    modalCallForm.classList.remove("modal-parent--open")
  }
})

//Слайдер

const swiper = new Swiper("#gallery", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  autoplay: true,

  navigation: {
    prevEl: "#gallery-prev",
    nextEl: "#gallery-next"
  }
})