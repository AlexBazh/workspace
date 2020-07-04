
let preloader = document.querySelector('.preloader');

window.onload = function (){
    preloader.classList.add('hidePreloader');
    window.setTimeout(function(){
        preloader.classList.add('removePreloader');
    }, 1000);
};