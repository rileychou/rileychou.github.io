const secretDiv = document.querySelector('.secret-div');

const keys = [];
const secretCode = ['i','c','e','s','h','a','r','k'];

//const confettiSettings = { target: 'my-canvas', size: 1.4, max: 150};
//const confetti = new ConfettiGenerator(confettiSettings);

function keysDetector(e) {
    keys.push(e.key);

    if (JSON.stringify(keys) === JSON.stringify(secretCode)){
        secretDiv.style.display = 'block';
        //confetti.render();

        anime({
            targets:'body',
            rotate: '1turn',
            backgroundColor: '#fcba03',
            duration: 2000,
        }) 
    }
    if (keys.length > secretCode.length){
        keys.shift();
    }
}

window.addEventListener('keyup', keysDetector);