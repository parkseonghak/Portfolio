// header start

const navMenu = document.querySelectorAll('.menu-list');
const section = document.querySelectorAll('.body-section');

let moveCheck = true;

for(let i = 0; i < navMenu.length; i++){
    navMenu[i].addEventListener('click', (e) => {
        e.preventDefault();
        const sectionHeight = section[i].getBoundingClientRect().top;
        
        if(moveCheck){
            moveCheck = false;
            window.scrollTo({left:0, top:sectionHeight, behavior:"smooth"});

            setTimeout(() => {
                moveCheck = true;
            }, 1000);
        };
    });
};

window.addEventListener('scroll', (e)=> {
    e.preventDefault();
    e.stopPropagation();
    if(moveCheck===false) {
        
    };
});

const tabMenu = document.querySelector('.stroke-container');
const navigationMenu = document.querySelector('.menu-navi');

tabMenu.addEventListener('click', (e) => {
    navigationMenu.style.top = 0;
})

// 클릭 후 스크롤 하면 버벅

// header fin


// scroll start

const sectionLength = section.length;

section.forEach(function(item, page){
    item.addEventListener('mousewheel', (e) => {
        e.preventDefault();
        let delta = 0;

        if(e.wheelDelta){
            delta = e.wheelDelta;
        }

        let moveTop;
        let sectionSelector = section[page];

        if(delta < 0){
            if(moveCheck){
                moveCheck = false;
                if(sectionSelector !== sectionLength){
                    try{
                        moveTop = window.pageYOffset +  sectionSelector.nextElementSibling.getBoundingClientRect().top; 
                        window.scrollTo({top:moveTop, left:0, behavior:"smooth"});
                    }catch(e){}
                }
                setTimeout(() => {
                    moveCheck = true;
                }, 1000);
            }
        }else{
            if(moveCheck){
                moveCheck = false;
                if(sectionSelector !== 0){
                    try{
                        moveTop = window.pageYOffset + sectionSelector.previousElementSibling.getBoundingClientRect().top;
                        window.scrollTo({top:moveTop, left:0, behavior:"smooth"});
                    }catch(e){}
                }
                setTimeout(() => {
                    moveCheck = true;
                }, 1000);
            }
        }
        // 2번째 섹션 작동안함..


    })
})

// scroll fin


// fade in

const hideContent = document.querySelectorAll('.hide-content');
const hideTitle = document.querySelectorAll('.hide-sub-title');
let winHeight = window.innerHeight;

window.addEventListener('scroll', (e) => {
    for(let i = 0; i < hideContent.length; i++){
        const contentHeihgt = hideContent[i].getBoundingClientRect().top;
        if(contentHeihgt < winHeight){
            hideContent[i].classList.remove('hide-content');
        }
    }
    for(let j = 0; j < hideTitle.length; j++){
        const titleHeight = hideTitle[j].getBoundingClientRect().top;
        if(titleHeight < winHeight){
            hideTitle[j].classList.remove('hide-sub-title');
        }
    }
})


//fade in fin


// random stars

const mainContainer = document.querySelector('main');
const mainHeight = mainContainer.offsetHeight;
const mainWidth = mainContainer.offsetWidth;

let randomHeight = Math.floor(Math.random() * mainHeight);


for(let i = 0; i < 33; i++){
    let randomWidth = Math.floor(Math.random() * mainWidth);
    const yellowStar = document.createElement('div');
    mainContainer.appendChild(yellowStar);
    yellowStar.classList.add('yellow-star');
    yellowStar.style.transform = 'translateX(' + randomWidth + ')px';
}
// make yellow star

for(let i = 0; i < 33; i++){
    const redStar = document.createElement('div');
    mainContainer.appendChild(redStar);
    redStar.classList.add('red-star');
}
// make red star

for(let i = 0; i < 33; i++){
    const whiteStar = document.createElement('div');
    mainContainer.appendChild(whiteStar);
    whiteStar.classList.add('white-star');
}
// make white star

















// 남은것 : 이메일 클릭시 복사 , 별 랜덤 생성