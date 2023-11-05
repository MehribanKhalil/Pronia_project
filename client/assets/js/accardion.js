// ACARDION MENU
const sideListItems = document.querySelectorAll(".list_item");
const subMenu = document.querySelectorAll(".subMenu");

sideListItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    console.log(item.querySelector(".submenu"));

    item.querySelector(".submenu").classList.toggle("active");
  });
});


