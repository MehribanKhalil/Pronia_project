//navbar start
const navSearchIcon = document.querySelector(".nav_search_icon");
const overlay = document.getElementById("overlay");
const sideBar=document.querySelector(".side_bar");

navSearchIcon.addEventListener("click", (e) => {
    e.preventDefault()
  overlay.classList.add("active");
});



//navbar side menu
const barsBtn=document.querySelector(".fa-bars")
const closeBtn=document.querySelector(".side_nav_close")

function openMenu() {
  barsBtn.addEventListener('click',()=>{
    sideBar.classList.toggle('side_bar_active')
  })
}

openMenu()

function closeMenu() {
  closeBtn.addEventListener('click',()=>{
    sideBar.classList.remove('side_bar_active')
  })
  
}

closeMenu()

// document.addEventListener('click',function(e){
//   if(e.target && e.target.classList == 'side_bar_active'){
//     openMenu() ? closeMenu() : openMenu();
//    }
// }); 




