function mostraRellotge() {
    let horaActual = new Date().toLocaleTimeString();
    let [horas, minutos, segundos] = horaActual.split(':');

    minutos = minutos.padStart(2, '0');
    segundos = segundos.padStart(2, '0');

    var ele = document.getElementById("rellotge");
    if (ele) {
        ele.innerHTML = horas + ":" + minutos + ":" + segundos;
    }
}

function displayRellotge() {
    mostraRellotge();
    setInterval(mostraRellotge, 1000); 
}

window.onload = function() {
    displayRellotge();
};
