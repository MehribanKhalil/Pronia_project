//navbar start
const navSearchIcon = document.querySelector(".nav_search_icon");
const overlay = document.getElementById("overlay");
const sideBar=document.querySelector(".side_bar");
const barsBtn=document.querySelector(".fa-bars")
const closeBtn=document.querySelector(".side_nav_close")
const basketMenu=document.querySelector(".basket_menu")
const basketCounet=document.querySelector(".basketCounet")
const basketCloseBtn=document.querySelector('.basket_menu_close')
const closeOverlayBtn=document.querySelector(".close_overlay")


navSearchIcon.addEventListener("click", (e) => {
    e.preventDefault()
  overlay.classList.add("active");
});

closeOverlayBtn.addEventListener("click", (e) => {
  e.preventDefault()
overlay.classList.remove("active");
});

//navbar side menu

  barsBtn.addEventListener('click',()=>{
    sideBar.classList.toggle('side_bar_active')
  })


  closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('side_bar_active')
  })



//navbar basket menu
basketCounet.addEventListener('click',()=>{
  basketMenu.classList.add('basket_menu_active')
  
})

basketCloseBtn.addEventListener('click',()=>{
  basketMenu.classList.remove('basket_menu_active')

})


//Initialize Swiper 

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 10000,
        disableOnInteraction: false,
          },
      loopedSlides: 3,
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    var swiper = new Swiper(".brandSwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
      delay: 3000,
      disableOnInteraction: false,
        },
      loopedSlides: 4,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });

    var swiper = new Swiper(".blogSwiper", {
    slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loopedSlides: 4,
      breakpoints: {
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });

    var swiper = new Swiper(".cardSwiper", {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: true,
      pagination: {
        clickable: true,
      },
      autoplay: {
    delay: 2000,
    disableOnInteraction: false,
        },
      loopedSlides: 4,
      breakpoints: {
        300: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
