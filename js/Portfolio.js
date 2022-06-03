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
        }
    })
}

window.addEventListener('scroll', (e)=> {
    e.preventDefault();
    e.stopPropagation();
    if(moveCheck===false) {
        console.log(e);
    }
})