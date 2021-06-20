var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var foto = JSON.parse(xhttp.responseText);
        //imagenes
        var img = document.createElement("img");
        img.setAttribute("src", foto.url);
        document.getElementById("img-container").appendChild(img);
    }
};
xhttp.open("GET", ("http://api.pinofans.ml" + ":3000" + "/normal"), true);
xhttp.send();

var xhttps = new XMLHttpRequest();
xhttps.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var respuesta = JSON.parse(xhttps.responseText);
        //titulos
        document.title = respuesta.titulos;
    }
};
xhttps.open("GET", ("http://api.pinofans.ml" + ":3000" + "/titulos"), true);
xhttps.send();

function refreshPage() {
    window.location.reload();
}