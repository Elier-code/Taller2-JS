function numeroAleatorio(min , max){
    return Math.floor(Math.random()*(max - min + 1)) + min
}
function agregarElemtoALista(lista){
    var listaUl = document.getElementById("lista")
    var item = document.createElement("li")
    var numero = lista.length - 1
    var aleatorio = numeroAleatorio(0 , numero)
    var texto = document.createTextNode(lista[aleatorio])
    item.appendChild(texto)
    listaUl.appendChild(item)
    //console.log(texto.textContent)
}
function covercionPesos(){
    var usd = document.getElementById("usd").value;
    var dolares = parseFloat(usd)
    var tasaRepresentativa = 4410.62
    var valorEnCOP = dolares * tasaRepresentativa
    //console.log(`${valorEnCOP}`)
    document.getElementById("cop").value = valorEnCOP
}
function convertirGrados(){
    var centigrados = parseFloat(document.getElementById("centigrados").value)
    var fahrenheit = centigrados * 9/5 + 32
    document.getElementById("fahrenheit").value = fahrenheit
    //console.log(`${fahrenheit}`)
}
function ocultar(boton){
    var idBoton = boton.id
    switch(idBoton){
        case "mostrarOcultar1":{
            document.getElementById("contenido1").textContent = ""
        }break;
        case "mostrarOcultar2":{
            document.getElementById("contenido2").textContent = ""
        }break;
        case "mostrarOcultar3":{
            document.getElementById("contenido3").textContent = ""
        }
    }
}
function detectarMouse(event){
    const xNavegador = event.clientX
    const yNavegador = event.clientY
    const xPagina = event.pageX
    const yPagina = event.pageY
    const positionNavegador = `Navegador [${xNavegador}, ${yNavegador}]`
    document.getElementById("navegador").innerText = positionNavegador
    const positionPagina = `Pagina [${xPagina}, ${yPagina}]`
    document.getElementById("pagina").innerText = positionPagina
}
document.addEventListener("keydown", function(event) {
    const tecla = event.key; // Obtiene el carácter de la tecla presionada
    const codigo = event.keyCode || event.which; // Obtiene el código ASCII o Unicode de la tecla

    document.getElementById("caracter").innerText = `Caracter: [${tecla}]`
    document.getElementById("codigo").innerText = `Código: [${codigo}]`
});
