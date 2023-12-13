let images = document.querySelectorAll('.image img')
let btnPrev = document.querySelector('.control_prev')
let btnNext = document.querySelector('.control_next')
let close = document.querySelector('.icon i')
let galleryImg= document.querySelector('.gallery__inner img')
let gallery= document.querySelector('.gallery')


function showGallery(){
    if(currentIndex == 0){
        btnPrev.classList.add('hide')
    }else{
        btnPrev.classList.remove('hide')
    }
    if(currentIndex == images.length -1){
        btnNext.classList.add('hide')
    }else{
        btnNext.classList.remove('hide')
    }
    //display
    galleryImg.src=images[currentIndex].src
        gallery.classList.add('show')
}
let currentIndex =0
images.forEach((item,index)=>{
    item.addEventListener('click',function(){
        currentIndex= index;
        showGallery()
    })
})
close.addEventListener('click',function(){
    gallery.classList.remove('show')
})

btnPrev.addEventListener('click',function(){
    if(currentIndex>0)
    currentIndex--
    showGallery()
})
btnNext.addEventListener('click',function(){
    if(currentIndex < images.length-1)
    currentIndex++
    showGallery()
})