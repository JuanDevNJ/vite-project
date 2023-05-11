
export const render = (  app: HTMLElement, callback: (element: Element) => void, idName?: string ) => {
  if(idName && typeof idName === 'string'){
    app.id = idName;
  }else{
    app.id = 'app';
  }
  document.body.appendChild(app)
  return callback(app)
}