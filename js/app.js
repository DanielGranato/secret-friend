let amigos = []

function adicionar () {
    let amigo = document.getElementById("nome-amigo").value.trim();
    if (amigo !== "") {
        amigos.push(amigo);
        document.getElementById("nome-amigo").value = "";
        document.getElementById("lista-amigos").innerHTML = amigos.join(", ");
    }
}

function sortear () {
    embaralha(amigos);
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}