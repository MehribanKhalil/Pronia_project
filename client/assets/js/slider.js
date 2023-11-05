
  AOS.init();


//Slider js
const sliderLeftBtn = document.querySelector(".fa-angle-left");
const sliderRightBtn = document.querySelector(".fa-angle-right");
const sliderImage = document.querySelector(".sliderImg");
const headerH2=document.querySelector(".header_h2")
const headerH1=document.querySelector(".header_h1")
const headerP=document.querySelector(".header_p")

let images = [
  "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png",

  "https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png"
  
];

//initial declaration
let i = 0;

//slider function
function handleImgChange() {
  sliderImage.src=images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

//previous slide
function previous() {
  if (i === 0) {
    i = images.length - 1;
  } else {
    i--;
  }
  sliderImage.src=images[i]
}


//next slide
function next() {
    if (i===images.length - 1) {
      i =0;
    } else {
      i++;
    }
    sliderImage.src=images[i]

}

handleImgChange()

sliderLeftBtn.addEventListener("click",previous);
sliderRightBtn.addEventListener("click", next);

// sliderLeftBtn.addEventListener('click',()=>{
//   headerH2.setAttribute('data-aos',"fade-right")
// })



// mouse event
document.body.addEventListener('mousemove', event => {
  const x = Math.floor(event.clientX / 100) * 1.5
  const y = Math.floor(event.clientY / 100) * 1.5

  sliderImage.style.transform = `translate(${-x}px,${-y}px)`
  sliderImage.style.transition = 'all .4s ease'
})