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
const headerDisplay = document.querySelector('.body-section');

function navOn(){
    navigationMenu.style.top = 0;
}

tabMenu.addEventListener('click', (e) => {
    navOn();
})

window.addEventListener('resize', (e) => {
    if(window.innerWidth > 767){
        navOn();
    }else{
        navOff();
    }
})

headerDisplay.addEventListener('click', (e) => {
    const target = e.target;
    console.log(e);
    if(target.classList.contains('body-section')){
        if(window.innerWidth < 768){
            navOff();
        }
    }
})


function navOff(){
    navigationMenu.style.top = '-65px';
}


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
            
            console.log(sectionSelector.previousElementSibling);
            
            if(delta < 0){
                if(moveCheck){
                    moveCheck = false;
                    if(sectionSelector !== sectionLength){
                        try{
                            moveTop = window.pageYOffset +  section[page+1].getBoundingClientRect().top; 
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
                            moveTop = window.pageYOffset + section[page-1].getBoundingClientRect().top;
                            window.scrollTo({top:moveTop, left:0, behavior:"smooth"});
                        }catch(e){}
                    }
                    setTimeout(() => {
                        moveCheck = true;
                    }, 1000);
                }
                }

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



for(let i = 0; i < 33; i++){
    let randomWidth = Math.floor(Math.random() * 100);
    let randomHeight = Math.floor(Math.random() * 100);
    const yellowStar = document.createElement('div');
    mainContainer.insertBefore(yellowStar,mainContainer.firstChild);
    yellowStar.classList.add('yellow-star');
    yellowStar.style.left = `${randomWidth}%`;
    yellowStar.style.top = `${randomHeight}%`;
}
// make yellow star

for(let i = 0; i < 33; i++){
    let randomWidth = Math.floor(Math.random() * 100);
    let randomHeight = Math.floor(Math.random() * 100);
    const redStar = document.createElement('div');
    mainContainer.insertBefore(redStar,mainContainer.firstChild);
    redStar.classList.add('red-star');
    redStar.style.left = `${randomWidth}%`;
    redStar.style.top = `${randomHeight}%`;
}
// make red star

for(let i = 0; i < 33; i++){
    let randomWidth = Math.floor(Math.random() * 100);
    let randomHeight = Math.floor(Math.random() * 100);
    const whiteStar = document.createElement('div');
    mainContainer.insertBefore(whiteStar,mainContainer.firstChild);
    whiteStar.classList.add('white-star');
    whiteStar.style.left = `${randomWidth}%`;
    whiteStar.style.top = `${randomHeight}%`;
}
// make white star

// click copy mail

const copyMail = document.getElementsByClassName('copy-mail');

for( let i = 0 ; i < copyMail.length ; i ++) {
    copyMail[i].addEventListener('click', () => {
        const mailText = copyMail[i].innerText;
        navigator.clipboard.writeText(mailText);
        alert('Copied to clipboard!')
    })
}
