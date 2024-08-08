listaNumSort = [];
function GerarNum() {
    let numGerado = parseInt(Math.random() * 50 + 1);
    let numElementosLista = listaNumSort.length;

    if(numElementosLista == 3) {
        listaNumSort = [];
    }

    if (listaNumSort.includes(numGerado)) {
        return GerarNum;  
    } else {
        listaNumSort.push(numGerado);
        console.log(listaNumSort);
        return numGerado;
    }
}

let numeroS = GerarNum();

let tries = 1;

function Textotela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function Limparcampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroS = GerarNum();
    Limparcampo();
    tries = 1;
    Textotela('h1', 'Joguinho do número!');
    Textotela('p', 'Escolha um número entre 1 e 50');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

Textotela('h1', 'Joguinho do número!');
Textotela('p', 'Escolha um número entre 1 e 50');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroS);
    if (chute == numeroS) {
        Textotela('h1', 'Acertou, miseravi!');
        let Textotries = 'Você acertou em '+tries+' tentativa(s)';
        Textotela('p', Textotries);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute < numeroS) {
            Textotela('h1', 'O número é maior');
        } else {
            Textotela('h1', 'O número é menor');
        }
        tries++
        Limparcampo();
    }
}
