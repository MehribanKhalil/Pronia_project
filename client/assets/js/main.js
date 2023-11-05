//navbar start
const navSearchIcon = document.querySelector(".nav_search_icon");
const overlay = document.getElementById("overlay");
const sideBar=document.querySelector(".side_bar");
const barsBtn=document.querySelector(".fa-bars")
const closeBtn=document.querySelector(".side_nav_close")
const basketMenu=document.querySelector(".basket_menu")
const basketCounet=document.querySelector(".basketCounet")
const basketCloseBtn=document.querySelector('.basket_menu_close')

navSearchIcon.addEventListener("click", (e) => {
    e.preventDefault()
  overlay.classList.add("active");
});



//navbar side menu

  barsBtn.addEventListener('click',()=>{
    sideBar.classList.toggle('side_bar_active')
  })


  closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('side_bar_active')
  })


// document.addEventListener('click',function(e){
//   if(e.target && e.target.classList == 'side_bar_active'){
//     openMenu() ? closeMenu() : openMenu();
//    }
// }); 


//navbar basket menu
basketCounet.addEventListener('click',()=>{
  basketMenu.classList.add('basket_menu_active')
  
})

basketCloseBtn.addEventListener('click',()=>{
  basketMenu.classList.remove('basket_menu_active')

})


