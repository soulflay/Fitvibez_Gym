const menuBtn = document.getElementById("menubtn")
const navLinks = document.getElementById("navlinks");
const menuBtnIcon = menuBtn.querySelector("i")


menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open")
  menuBtnIcon.setAttribute("class", isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});


const scrollRevealOption = {
  distance : "50px" ,
  origin : "bottom",
  duration : 1000,
}

ScrollReveal().reveal(".home_text h1", {
  ...scrollRevealOption,
})

ScrollReveal().reveal(".home_text h2", {
  ...scrollRevealOption,
  delay: 500,
})

ScrollReveal().reveal(".home_text p", {
  ...scrollRevealOption,
  delay: 1000,
})

ScrollReveal().reveal(".home_text .main_btn", {
  ...scrollRevealOption,
  delay: 1500,
})

ScrollReveal().reveal(".about_card", {
  duration: 1000,
  interval: 500,
})

ScrollReveal().reveal(".trainer_card", {
  ...scrollRevealOption,
  interval: 500,
})

ScrollReveal().reveal(".blog_card", {
  ...scrollRevealOption,
  interval: 500,
})




const swiper = new Swiper(".swiper", {
  loop: true,

  pagination:{
    el: ".swiper-pagination", 
  },
})