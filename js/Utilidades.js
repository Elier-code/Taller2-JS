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
