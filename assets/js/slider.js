//Slider js

const sliderLeftBtn=document.querySelector('fa-angle-left')
const sliderRightBtn=document.querySelector('fa-angle-right')
const sliderImage=document.querySelector('.sliderImg')


const images=[
    'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png',

    'https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-1-524x617.png'
]

curretImg=0

function showImg(){
    sliderImage.setAttribute('src',images[curretImg])

}

showImg()


sliderRightBtn.addEventListener('click',()=>{
    sliderImage.setAttribute('src',images[1])

})