let contagem = 0;
let firstime = 0;
const arrow_left = document.getElementById('arrow_left');
const arrow_right = document.getElementById('arrow_right');
const radio_0 = document.getElementById('radio_0');
const radio_1 = document.getElementById('radio_1');
const radio_2 = document.getElementById('radio_2');
const intro = document.getElementById('intro');

function mudarContagemEsquerda() {
    if (contagem === 0) {
        contagem = 2;
    }
    else {
        contagem--;
    }
}

function mudarContagemDireita() {
    if (contagem === 2) {
        contagem = 0;
    }
    else {
        contagem++;
    }
}

function mudarSlideAndRadio(direcao) {
    if (contagem === 0) {
        radio_1.className = 'inactive';
        radio_2.className = 'inactive';
        radio_0.className = 'active';
        intro.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./Assets/Img/desk.png)';
    } 
    if (contagem === 1) {
        radio_0.className = 'inactive';
        radio_2.className = 'inactive';
        radio_1.className= 'active';
        intro.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./Assets/Img/desk2.png)';
    }
    if (contagem === 2) {
        radio_0.className = 'inactive';
        radio_1.className = 'inactive';
        radio_2.className= 'active';
        intro.style.backgroundImage = 'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./Assets/Img/desk3.png)';
    }
}

arrow_left.addEventListener('click', function() {
    mudarContagemEsquerda();
    mudarSlideAndRadio('esquerda');
});

arrow_right.addEventListener('click', function() {
    mudarContagemDireita();
    mudarSlideAndRadio('direita');
});