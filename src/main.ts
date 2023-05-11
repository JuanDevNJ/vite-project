import './assets/css/root.css'
import './assets/css/style.css'

import App from './App'
import { render } from './helpers/render'
// import Inicio from './routes/Inicio';

const app = new App();

const routes = [
  {
    path: '/',
    namespace: '',
    component:  /* HTML */ `<h1 class="inicio">Inicio</h1>`,
  },
  {
    path: '/about',
    namespace: '',
    component:  /* HTML */ `<h1 class="inicio">About</h1>`,
  }
]

render(app, (app) => {
  // console.log(app)
  app.addEventListener("popstate", (e) => {
    console.log(e)
  })
  const changeRoute = (_route: string) => {
    console.log(_route)
    history.pushState("","",_route)
    routes.forEach((route) =>{
      if (_route.includes(route.path)){
        app.shadowRoot!.innerHTML = `${route.component}`
      }
    })
    
   
  }
  const urls = [...document.querySelectorAll("a")]
  urls.forEach((url) => {
    console.log(url)
    url.addEventListener("click", (event: Event) => {
      event.preventDefault()
      console.log(event.target.href) 
      changeRoute(event.target.href)
    })
  })
  
})


window.onpopstate = (event) => {
  console.log(event)
 

}




























// const bienvenida: HTMLElement = new BienvenidaNJV();
// const contador: HTMLElement = new Contador();


// let count: number = 0;
// const contenedorAnimacion = document.createElement("section");





// // Inject DOM element
// const ready = (app: HTMLElement) => {
//   app.appendChild(contenedorAnimacion)
//   app.appendChild(bienvenida)
// }



// core.setup((res: any) => {
//   bienvenida.setAttribute("name-user", `Juan Dev`)
//   // Create a new element with tag name section and edit classList 

//   contenedorAnimacion.classList.add("contenedor-animacion");
//   // init counter
//   setInterval(() => {
//     count++
// console.log(res)
//     contador.setAttribute("count", `${count}`);
//     $('#app').appendChild(contador);
//   }, 1000)
// })

// ready($('#app'))