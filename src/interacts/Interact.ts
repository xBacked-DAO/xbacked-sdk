import EventEmitter from 'events';

class Interact extends EventEmitter {
  name: string;
  acc?: any;

  constructor(params: { name: string; acc?: any }) {
    super();
    this.name = params.name;
    this.acc = params.acc;
  }
}

export default Interact;
