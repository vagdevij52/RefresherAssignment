const HANDS_UP = '👍';
const HANDS_DOWN = '👎';
const TESTED_MODE = 'tested',
const NOT_TESTED_MODE = 'nottested';
const DEFAULT_MODE = TESTED_MODE;
const btn = document.querySelector('#theme-switcher');

init();

function init() {
    let storedMode = sessionStorage.getItem('mode');
    if (!storedMode) {
        storedMode = DEFAULT_MODE;
        sessionStorage.setItem('mode', DEFAULT_MODE);
    }
    setMode(storedMode);
}

function setMode(mode = DEFAULT_MODE) {
    if (mode === TESTED_MODE) {
        btn.textContent = HANDS_UP;
        document.body.classList.add(TESTED_MODE);

    } else if (mode === NOT_TESTED_MODE) {
        btn.textContent = HANDS_DOWN;
        document.body.classList.remove(TESTED_MODE);
    }
}

btn.addEventListener('click', function () {
    let mode = sessionStorage.getItem('mode');
    if (mode) {
        let newMode = mode == TESTED_MODE ? NOT_TESTED_MODE : TESTED_MODE;
        setMode(newMode);
        sessionStorage.setItem('mode', newMode);
    }
});