const gtbtn = document.querySelector('.js--go-top-btn');
const gtCible = document.querySelector('.js--go-top-cible');

window.addEventListener('scroll', function() {

    if (gtCible.offsetTop < window.scrollY) {
        gtbtn.classList.remove('hide');
    } else {
        gtbtn.classList.add('hide');
    }

});
