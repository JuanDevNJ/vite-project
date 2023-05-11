export default class Core {
  count: number = 0
  constructor() {

  }

  setup(callback: () => void): void {
    callback(this)
  }
  ready(callback: () => void): void{
    callback(this)
  }
}