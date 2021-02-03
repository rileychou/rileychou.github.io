const secretDiv = document.querySelector('.secret-div');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const backButton = document.getElementById('back-button');

const keys = [];
const secretCode = ['i','c','e','s','h','a','r','k'];

function keysDetector(e) {
    keys.push(e.key);
    if (keys.length > secretCode.length){
        keys.shift();
        console.log(keys);
    }
    if (JSON.stringify(keys) === JSON.stringify(secretCode)){
        secretDiv.style.display = 'block';
        main.style.display = 'none';
        footer.style.display = 'none';
        //confetti.render();
        anime({
            targets:'.secret-div',
            rotate: '1turn',
            backgroundColor: '',
            duration: 2000
        });
    }
}

function goBack() {
    main.style.display = 'block';
    main.scrollIntoView();
    footer.style.display = 'block';
    setTimeout (() => {secretDiv.style.display = 'none';}, 450);
}

window.addEventListener('keyup', keysDetector);
backButton.addEventListener('click', goBack);