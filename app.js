let amigos = [];
let parejasSorteadas = [];
let indiceResultado = 0;

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, escribe un nombre antes de añadir.");
        return;
    }
    
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido añadido.");
        return;
    }
    
    amigos.push(nombre);
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes para realizar el sorteo.");
        return;
    }
    
    if (parejasSorteadas.length === 0) {
        let mezclados = [...amigos];
        for (let i = mezclados.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [mezclados[i], mezclados[j]] = [mezclados[j], mezclados[i]];
        }
        
        for (let i = 0; i < mezclados.length; i++) {
            let amigo1 = mezclados[i];
            let amigo2 = mezclados[(i + 1) % mezclados.length];
            parejasSorteadas.push(`${amigo1} → ${amigo2}`);
        }
        indiceResultado = 0;
    }
    
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    if (indiceResultado < parejasSorteadas.length) {
        let item = document.createElement("li");
        item.textContent = parejasSorteadas[indiceResultado];
        resultadoLista.appendChild(item);
        indiceResultado++;
    } else {
        alert("Todos los resultados han sido mostrados. Presiona sortear para reiniciar.");
        parejasSorteadas = [];
    }
}
