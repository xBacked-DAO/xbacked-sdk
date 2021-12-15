/// <reference types="node" />
import EventEmitter from 'events';
declare class Interact extends EventEmitter {
    name: string;
    acc?: any;
    constructor(params: {
        name: string;
        acc?: any;
    });
}
export default Interact;
