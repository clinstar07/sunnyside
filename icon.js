const menubtn = document.querySelector('.menu-button');
const navlinks = document.querySelector('.header-nav');

menubtn.addEventListener('click', () => {
    // if it is scaleY(1) check the second if statement(excute scaleY(0)), else navlinks shold be  scaleY(1) {checking the else condition}
    if(navlinks.style.transform === 'scaleY(1)'){
        navlinks.style.transform = 'scaleY(0)';
    }else(
        navlinks.style.transform = 'scaleY(1)'
     )
});
    
