export default class BienvenidaNJV extends HTMLElement {
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
      h1{
        color: snow;
      }
    `
  }
  ready() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${BienvenidaNJV.styles}</style>
        <h1>Bienvenid@ ${this.getAttribute("name-user") ?? 'Bienvenid@'}</h1>
      `
  }
  disconnectedCallback() {
    this.shadowRoot!.innerHTML = /* html */ "";
  }

  attributeChangedCallback(attr:any, old:any, now:any) { 
    console.log(attr, old, now);
  }


  static get observedAttributes() {
    return ['name-user', "is-enabled"];
  }
}
window.customElements.define("bienvenida-njv",BienvenidaNJV);