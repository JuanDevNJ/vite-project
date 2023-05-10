const $ = (tag: string) => document.querySelector<HTMLDivElement>(tag)!

const animacion = (nombre: string, opciones: {}): boolean => {
  if (typeof nombre === 'string' && nombre && typeof opciones === 'object' || Object.keys(opciones).length) {
    return true
  } else {
    return false
  }
}
const getItemStorage = (token: string): string => JSON.parse(window.localStorage.getItem(token)!)!
const setItemStorage = (token: string, payload: string): void => {
  window.localStorage.setItem(token, JSON.stringify(payload)!)!
}
const removeItemStorage = (token: string): void => {
  window.localStorage.removeItem(token)!
}
export { $, animacion, getItemStorage, setItemStorage, removeItemStorage }