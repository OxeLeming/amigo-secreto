let amigos = [];
function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let nomesIncluidos = document.getElementById('lista-amigos');
    amigos.push(nome.value);

    if (nomesIncluidos.textContent == '') {
        nomesIncluidos.textContent += nome.value;
    } else {
        nomesIncluidos.textContent += ', ' + nome.value
    }

    nome.value = '';
    console.log(amigos);


}

function reiniciar() {
    document.getElementById('lista-amigos').textContent = '';
    amigos = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function sortear() {
    embaralharArray(amigos);
    let lista = document.getElementById('lista-sorteio');
    console.log(amigos);


    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            lista.innerHTML = lista.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';

        } else {
            lista.innerHTML = lista.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }

}

function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {

        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [array[i], array[indiceAleatorio]] = [array[indiceAleatorio], array[i]];
    }
}


