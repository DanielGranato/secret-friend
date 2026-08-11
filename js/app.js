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
    
}

