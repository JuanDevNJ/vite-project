import './style.css'
import { $, setItemStorage, getItemStorage } from './helpers'
import BienvenidaNJV from './components/Bienvenida'

const bienvenidaTexto = getItemStorage("bienvenida")
const nombre = getItemStorage("nombre")

const bienvenida = new BienvenidaNJV();
let count = 1;
const contenedorContador = document.createElement("div");
setInterval(() => {
  
  count++
  bienvenida.setAttribute("value", `Cuenta ${count}`)
  contenedorContador.appendChild(bienvenida)
  $('#app').appendChild(contenedorContador);
},1000)

$('#app').innerHTML = /*HTML*/ `
  <h1>${bienvenidaTexto} ${nombre}</h1>
`


