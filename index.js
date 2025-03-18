let pageHeight = 0;
let scrollY = 0;
let page = 0;
let inPageScroll = scrollY/pageHeight;

const pages = document.querySelectorAll('.page');

pageHeight = pages[0].offsetHeight;
document.addEventListener('scroll',function(){
    scrollY = window.scrollY || document.documentElement.scrollTop;
    page = Math.floor(scrollY/pageHeight);
    inPageScroll = scrollY/pageHeight-page;
    pages[page].style.opacity = 1-inPageScroll;
    pages[page+1].style.opacity = inPageScroll;
})