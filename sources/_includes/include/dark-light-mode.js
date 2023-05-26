const toggleMode = document.querySelector(".js--toggleMode");
const labelClair = document.querySelector(".js--switch-clair");
const labelSombre = document.querySelector(".js--switch-sombre");
const currentMode = localStorage.getItem('mode');

if (currentMode){
    document.documentElement.setAttribute('data-mode', currentMode);
    if (currentMode === 'light') {
        toggleMode.setAttribute('aria-pressed', 'true');
        labelClair.classList.add('hide');
        labelSombre.classList.remove('hide');
    } else {
        labelClair.classList.remove('hide');
        labelSombre.classList.add('hide');
    }
}

toggleMode.addEventListener('click', function () {

    if (this.getAttribute('aria-pressed') === 'false') {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
        labelClair.classList.add('hide');
        labelSombre.classList.remove('hide');
        this.setAttribute('aria-pressed', 'true');
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
        labelClair.classList.remove('hide');
        labelSombre.classList.add('hide');
        this.setAttribute('aria-pressed', 'false');
    }

})
