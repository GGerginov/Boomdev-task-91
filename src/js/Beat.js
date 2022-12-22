export default class Beat {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    const EventEmitter = require('eventemitter3');
    const emitter = new EventEmitter()

    setInterval(() => {
      emitter.emit(Beat.events.BIT,()=>{
        console.log("bit");
      })
    }, 600);
  }
}
