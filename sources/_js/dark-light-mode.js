const toggleSwitch = document.querySelector(".js--switch");
const currentMode = localStorage.getItem('mode');

console.log(currentMode);

if (currentMode){
    document.documentElement.setAttribute('data-mode', currentMode);
    if (currentMode === 'light') {
        toggleSwitch.checked = true;
    }
}

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-mode', 'light');
        localStorage.setItem('mode', 'light');
    }else{
        document.documentElement.setAttribute('data-mode', 'dark');
        localStorage.setItem('mode', 'dark');
    }
}

toggleSwitch.addEventListener('change', switchMode, false);