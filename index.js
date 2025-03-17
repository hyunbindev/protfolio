const viewHeight = window.innerHeight;
let scrollY = 0;
let page = 0;
let inPageScroll = scrollY/viewHeight;
const pages = document.querySelectorAll('.page');
document.addEventListener('scroll',function(){
    scrollY = window.scrollY || document.documentElement.scrollTop;
    page = Math.floor(scrollY/viewHeight);
    inPageScroll = scrollY/viewHeight-page;
    pages[page].style.opacity = 1-inPageScroll
    pages[page+1].style.opacity = inPageScroll
    console.log(page);
})