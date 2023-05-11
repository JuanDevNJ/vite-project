export default class Contador extends HTMLElement {
 
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }
  connectedCallback() {
   
    this.ready()
  }
  static get styles() {
    return /* CSS */ `
      :host{
        display: block;
      }
    `
  }
  ready() {
   
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${Contador.styles}</style>
        <h1>Contador ${this.getAttribute("count")}</h1>
      `
  }
 

  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 
    if (typeof attr !== "string"){
      throw new Error("Los atributos de los componetes tienen que ser de tipo cadena (string)"); 
    }
    console.log("Changed attribute:", attr, now);
  }


  static get observedAttributes() {
    return ['count'];
  }
}
window.customElements.define("contador-njv",Contador);