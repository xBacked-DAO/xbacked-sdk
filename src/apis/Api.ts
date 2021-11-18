class Api {
  name: string;
  acc?: any;

  constructor(params: { name: string; acc?: any }) {
    this.name = params.name;
    this.acc = params.acc;
  }
}

export default Api;
