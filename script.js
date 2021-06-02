

const hamburger = document.querySelector('.hamburger');
const homeUl = document.querySelector('.home-ul');


hamburger.addEventListener('click', function() {
    homeUl.classList.toggle('show');
   
});
