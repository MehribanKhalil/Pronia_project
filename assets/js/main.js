const navSearchIcon = document.querySelector(".nav_search_icon");
const overlay = document.getElementById("overlay");

console.log(navSearchIcon);
navSearchIcon.addEventListener("click", (e) => {
    e.preventDefault()
  console.log("sa");
  overlay.classList.add("active");
});
