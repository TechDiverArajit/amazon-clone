const imgs = document.querySelectorAll(".header-slider ul img");
const controlPrev = document.querySelector(".header-prev");
const controlNext = document.querySelector(".header-next");

let n = 0;
function changeSlider(){
    for(let i =0; i<imgs.length; i++){
        imgs[i].style.display = 'none';

    }
    imgs[n].style.display = 'block';
}

changeSlider();

controlPrev.addEventListener('click' ,(e)=>{
    if(n>0){
        n--;
    }else{
        n = imgs.length-1;
    }
    changeSlider();
});

controlNext.addEventListener('click',(e)=>{
    if(n<imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlider();
});

const scroll = document.querySelectorAll('.products-row');

for(const item of scroll){
    item.addEventListener('wheel' , (e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}


const scrollProduct = document.querySelectorAll('.products');

for(const item of scrollProduct){
    item.addEventListener('wheel' ,(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}
