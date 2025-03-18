function typeTitle(index , subTitleIndex) {
    let speed = 50;
    const titleElement = document.querySelector('#slogun_title');
    const fullTitle = '"일에서 기쁨을 느끼면, 일이 완벽해진다."';
    const subTitleElement = document.querySelector("#sub_title");
    const fullSubTitle = "즐기는 개발자 김현빈 입니다."
    if (index < fullTitle.length) {
        titleElement.textContent = fullTitle.substring(0, index + 1);
        setTimeout(() => typeTitle(index + 1 , 0), speed);
    }else{
        if(subTitleIndex < fullSubTitle.length){
            subTitleElement.textContent = fullSubTitle.substring(0,subTitleIndex +1);
            setTimeout(() => typeTitle(index , subTitleIndex+1),speed);
        }
    }
}
typeTitle(0,0);

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            target.classList.add("puff-enterance");
        } else {
            target.style.opacity = 0;
        }
    });
};

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.4
};

let observer = new IntersectionObserver(callback, options);
let target = document.querySelector("#information");

if (target) {
    observer.observe(target);
} else {
    console.error("대상 요소를 찾을 수 없습니다.");
}
let projectPage = document.querySelector('#project');

let projectObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let projectTitle = document.querySelector('#project_title');
            let projectElement = document.querySelectorAll('.project_title');
            projectTitle.classList.add('fade-enterance');
            projectTitle.opacity = 1;
            setTimeout(()=>reavalProjectElement(0,projectElement),300);
        } else {
            target.style.opacity = 0;
        }
    });
},options);
projectObserver.observe(projectPage);
function reavalProjectElement(index , elements){
    if(index < elements.length){
        elements[index].classList.add('slit-in-vertical-enterance');
        elements[index].style.opacity = 1;
        setTimeout(()=> reavalProjectElement(index+1,elements),300);
    }
}
//setTimeout(() => typeTitle(index , subTitleIndex+1),speed);