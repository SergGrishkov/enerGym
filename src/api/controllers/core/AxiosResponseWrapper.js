export class AxiosResponseWrapper {
  #response;

  constructor(response) {
    this.#response = response;
  }

  json() {
    return JSON.parse(this.#response.data);
  }
}
