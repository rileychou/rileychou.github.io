const secretDiv = document.querySelector('.secret-div');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const backButton = document.getElementById('back-button');
const body = document.body;

const keys = [];
const secretCode = ['i', 'c', 'e', 's', 'h', 'a', 'r', 'k'];

let spinAnimation = anime({
    targets: '.secret-div',
    rotate: '1turn',
    backgroundColor: '',
    duration: 2000
});

function keysDetector(e) {
    keys.push(e.key);
    if (keys.length > secretCode.length) {
        keys.shift();
        console.log(keys);
    }
    if (JSON.stringify(keys) === JSON.stringify(secretCode)) {
        body.style.backgroundColor = "#ffffff";
        main.style.display = 'none';
        footer.style.display = 'none';
        secretDiv.style.display = 'block';
        spinAnimation.restart();
    }
}

function goBack() {
    body.style.removeProperty("background-color");
    main.style.display = 'block';
    main.scrollIntoView();
    footer.style.display = 'block';
    setTimeout(() => { secretDiv.style.display = 'none'; }, 500);
}

window.addEventListener('keyup', keysDetector);
backButton.addEventListener('click', goBack);