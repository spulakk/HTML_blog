function casDatum() {
    var vterina = new Date().getSeconds();
    var minuta = new Date().getMinutes();
    var hodina = new Date().getHours();
    var den = new Date().getDate();
    var mesic = new Date().getMonth() + 1;
    var rok = new Date().getFullYear();
    document.getElementById("cas").innerHTML = hodina + ":" + minuta + ":" + vterina;
    document.getElementById("datum").innerHTML = den + "." + mesic + "." + rok;
    setTimeout(casDatum, 1000)
}

casDatum();